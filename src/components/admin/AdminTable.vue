<template>
  <v-container fluid>
    <v-data-table
      width="auto"
      height="auto"
      :headers="headers"
      :items="items"
      :sort-by="sortBy"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ $t(title) }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog scrollable v-model="dialog" max-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                {{ $t(newText) }}
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-subheader>{{ $t("general-properties") }}</v-subheader>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field
                          v-model="editedItem.id"
                          :disabled="!isNewItem"
                          :label="$t('id')"
                          :hint="$t('id-empty-auto-generated-message')"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field
                          v-model="editedItem.description.title"
                          :label="$t('title')"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <slot
                      name="editable-fields"
                      :editedItem="editedItem"
                    ></slot>
                    <v-row>
                      <v-subheader>{{ $t("descriptions") }}</v-subheader>
                      <v-expansion-panels accordion flat>
                        <v-expansion-panel>
                          <v-expansion-panel-header></v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-data-iterator
                              :items="editedItem.descriptions"
                              item-key="id"
                              hide-default-footer
                            >
                              <template>
                                <v-row>
                                  <v-col
                                    v-for="description in editedItem.descriptions"
                                    cols="6"
                                    sm="12"
                                    md="6"
                                    :key="`input-${description.locale}`"
                                  >
                                    <v-row>
                                      <v-subheader>{{
                                        $t(description.locale)
                                      }}</v-subheader>
                                    </v-row>
                                    <v-row>
                                      <v-col cols="12">
                                        <v-text-field
                                          v-model="description.title"
                                          :label="$t('title')"
                                          outlined
                                          required
                                        ></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                        <v-textarea
                                          v-model="description.description"
                                          :label="$t('description')"
                                          outlined
                                        ></v-textarea>
                                      </v-col>
                                    </v-row>
                                  </v-col>
                                </v-row>
                              </template>
                            </v-data-iterator>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="close">
                  {{ $t("cancel") }}
                </v-btn>
                <v-btn color="primary" text @click="save">
                  {{ $t("save") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">{{
                $t("confirm-delete-message")
              }}</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="closeDelete">{{
                  $t("cancel")
                }}</v-btn>
                <v-btn color="primary" text @click="deleteItemConfirm">{{
                  $t("ok")
                }}</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="refresh">
          {{ $t("refresh") }}
        </v-btn>
      </template>
      <template
        v-for="customColumn in customColumns"
        v-slot:[`item.${customColumn}`]="{ item }"
      >
        <slot :name="`item.${customColumn}`" :item="item" />
      </template>
    </v-data-table>
    <v-snackbar
      v-for="message in messages"
      v-model="notification"
      :key="message"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification = false">
          {{ $t("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Editable } from "@/store/types";
import { localise, mergeDescriptions } from "@/utils/localise";
import Vue from "vue";
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";

const AdminTableProps = Vue.extend({
  props: {
    defaultItem: Object,
    headers: Array,
    module: String,
    newText: String,
    editText: String,
    title: String,
    customColumns: Array,
    localiseDependencies: Function,
  },
});

@Component({
  name: "admin-table",
})
export default class AdminTable extends AdminTableProps {
  dialog = false;
  valid = true;
  editedIndex = -1;
  dialogDelete = false;
  sortBy = ["description.title"];
  messages: string[] = [];
  notification = false;
  editedItem = mergeDescriptions(
    this.defaultItem,
    this.$i18n.locale
  ) as Editable;

  get items(): Editable[] {
    return localise(
      this.$store.getters[`${this.module}/list`],
      this.$i18n.locale
    ) as Editable[];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t(this.newText)
      : this.$t(this.editText);
  }

  refresh() {
    this.$store
      .dispatch(`${this.module}/load`)
      .catch((error: GraphQLResult<Editable>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
        console.log(this.messages);
      });
  }
  close() {
    this.dialog = false;
  }
  save() {
    this.$store
      .dispatch(
        this.isNewItem ? `${this.module}/create` : `${this.module}/update`,
        mergeDescriptions(this.editedItem, this.$i18n.locale)
      )
      .catch((error: GraphQLResult<Editable>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
        console.log(this.messages);
      });
    this.dialog = false;
  }
  deleteItemConfirm() {
    this.$store.dispatch(`${this.module}/delete`, this.editedItem.id);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign(
        {},
        mergeDescriptions(this.defaultItem, this.$i18n.locale) as Editable
      );
      this.editedIndex = -1;
    });
  }
  editItem(item: Editable) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: Editable) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
  mounted() {
    this.refresh();
  }
}
</script>

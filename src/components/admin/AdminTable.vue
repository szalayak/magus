<template>
  <v-container fluid>
    <v-data-table
      width="auto"
      height="auto"
      :headers="computedHeaders"
      :items="items"
      :sort-by="sortBy"
      :search="search"
      multi-sort
    >
      <template v-slot:top>
        <v-toolbar id="admin-table-toolbar" flat>
          <v-text-field
            v-model="search"
            single-line
            hide-details
            clearable
            prepend-icon="mdi-magnify"
            :label="$t('search')"
            class="mr-4"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog scrollable v-model="dialog" max-width="1200px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-if="!readonly"
                color="primary"
                text
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ $t(newText) }}
              </v-btn>
            </template>
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-select
                  single-line
                  hide-details
                  v-model="editedItem.locale"
                  :items="locales"
                  @input="changeEditedLocale"
                />
              </v-toolbar>
              <v-card-text>
                <v-form :disabled="readonly" ref="input" v-model="valid">
                  <v-container>
                    <v-row dense>
                      <v-subheader class="pl-1">{{
                        $t("general-properties")
                      }}</v-subheader>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" xs="12" sm="6">
                        <v-text-field
                          v-model="editedItem.id"
                          :disabled="!isNewItem"
                          :label="$t('id')"
                          :hint="$t('id-empty-auto-generated-message')"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" xs="12" sm="6">
                        <v-text-field
                          v-model="editedItem.description.title"
                          :rules="[v => !!v || $t('field-is-mandatory')]"
                          :label="$t('title')"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <slot
                      name="editable-fields"
                      :editedItem="editedItem"
                    ></slot>
                    <v-row v-if="readonly" dense>
                      <v-subheader class="pl-1">{{
                        $t("description")
                      }}</v-subheader>
                    </v-row>
                    <v-row dense>
                      <v-col v-if="!readonly" cols="12" sm="12" md="6">
                        <v-textarea
                          v-model="editedItem.description.description"
                          :label="$t('description')"
                        />
                      </v-col>
                      <v-col cols="12" sm="12" :md="readonly ? '12' : '6'">
                        <div v-html="markdownDescription" />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="close">
                  {{ $t("cancel") }}
                </v-btn>
                <v-btn v-if="!readonly" color="primary" text @click="save">
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
      <template v-if="!readonly" v-slot:[`item.actions`]="{ item }">
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
      <template v-slot:[`item.description.title`]="{ item }">
        <a @click="editItem(item)">{{ item.description.title }}</a>
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

<style>
#admin-table-toolbar .v-toolbar__content {
  padding: 0px !important;
}
</style>

<script lang="ts">
import { DropdownValueList, Editable, LooseObject } from "@/store/types";
import { localise, localiseItem, mergeDescriptions } from "@/utils/localise";
import Vue from "vue";
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Locale } from "@/API";
import marked from "marked";
import { Form } from "@/utils";

const AdminTableProps = Vue.extend({
  props: {
    defaultItem: Object || Function,
    headers: Array,
    module: String,
    newText: String,
    editText: String,
    title: String,
    customColumns: Array,
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
  search = "";

  editedItem = mergeDescriptions(
    typeof this.defaultItem === "function"
      ? this.defaultItem()
      : this.defaultItem,
    this.$i18n.locale
  ) as Editable;

  get markdownDescription() {
    return marked(this.editedItem.description?.description || "");
  }

  get locales(): DropdownValueList[] {
    return Object.keys(Locale).map(locale => ({
      value: locale,
      text: this.$i18n.t(locale),
    })) as DropdownValueList[];
  }

  get readonly() {
    return !(
      this.$store.getters["isCurrentUserAdmin"] ||
      this.$store.getters["isCurrentUserEditor"]
    );
  }

  get computedHeaders() {
    return this.readonly
      ? this.headers.filter(h => (h as LooseObject).value !== "actions")
      : this.headers;
  }

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

  changeEditedLocale(locale: Locale) {
    this.editedItem = localiseItem(this.editedItem, locale);
  }

  refresh() {
    this.$store
      .dispatch(`${this.module}/load`)
      .catch((error: GraphQLResult<Editable>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
  }

  resetEditedItem() {
    this.$nextTick(() => {
      this.editedItem = Object.assign(
        {},
        mergeDescriptions(this.defaultItem, this.$i18n.locale) as Editable
      );
      this.editedIndex = -1;
    });
  }

  close() {
    this.dialog = false;
    this.resetEditedItem();
  }
  save() {
    if ((this.$refs.input as Form).validate()) {
      this.$store
        .dispatch(
          this.isNewItem ? `${this.module}/create` : `${this.module}/update`,
          mergeDescriptions(this.editedItem, this.$i18n.locale)
        )
        .catch((error: GraphQLResult<Editable>) => {
          this.messages = error.errors?.map(err => err.message) || [];
          this.notification = true;
        });
      this.dialog = false;
      this.resetEditedItem();
    }
  }
  deleteItemConfirm() {
    this.$store.dispatch(`${this.module}/delete`, this.editedItem.id);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.resetEditedItem();
  }
  editItem(item: Editable) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = JSON.parse(JSON.stringify(item));
    this.dialog = true;
  }
  deleteItem(item: Editable) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
  created() {
    this.refresh();
  }
}
</script>

<template>
  <page-template>
    <template v-slot:app-bar>
      <app-bar>
        <template v-slot:actions>
          <v-dialog scrollable v-model="dialog" max-width="1200px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-if="!readonly"
                icon
                color="primary"
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-toolbar flat :color="color">
                <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn-toggle
                  dense
                  tile
                  color="primary"
                  group
                  v-model="editedItem.locale"
                  @change="changeEditedLocale"
                >
                  <v-btn
                    v-for="locale in locales"
                    :key="locale.value"
                    :value="locale.value"
                    >{{ locale.text }}</v-btn
                  >
                </v-btn-toggle>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  v-model="notification"
                  dense
                  outlined
                  type="error"
                  dismissible
                >
                  {{ messages }}
                </v-alert>
                <v-form :disabled="readonly" ref="input" v-model="valid">
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
                  <slot name="editable-fields" :editedItem="editedItem"></slot>
                  <v-row v-if="readonly" dense>
                    <v-subheader class="pl-1">{{
                      $t("description")
                    }}</v-subheader>
                  </v-row>
                  <v-row dense>
                    <v-col v-if="!readonly" cols="12">
                      <v-textarea
                        auto-grow
                        rows="1"
                        v-model="editedItem.description.description"
                        :label="$t('description')"
                      />
                    </v-col>
                    <v-col cols="12" sm="12" :md="readonly ? '12' : '6'">
                      <div v-html="markdownDescription" />
                    </v-col>
                  </v-row>
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
          <confirm-delete-dialog
            :open.sync="dialogDelete"
            @cancel="closeDelete"
            @confirm="deleteItemsConfirm(selected)"
          />
          <v-btn
            v-if="!readonly"
            :disabled="selected.length === 0"
            icon
            text
            @click="dialogDelete = true"
            color="error"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </template>
      </app-bar>
    </template>
    <v-card>
      <v-card-text>
        <v-alert v-model="notification" dense outlined type="error" dismissible>
          {{ messages }}
        </v-alert>
        <v-data-table
          v-model="selected"
          :show-select="!readonly"
          item-key="id"
          :headers="computedHeaders"
          :items="items"
          :sort-by="sortBy"
          :search="search"
          multi-sort
          :disable-sort="$vuetify.breakpoint.xsOnly"
        >
          <template v-slot:top>
            <v-toolbar dense id="admin-table-toolbar" flat :color="color">
              <v-text-field
                v-model="search"
                single-line
                hide-details
                clearable
                prepend-icon="mdi-magnify"
                :label="$t('search')"
                class="mr-4"
              ></v-text-field>
            </v-toolbar>
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
      </v-card-text>
    </v-card>
  </page-template>
</template>

<style>
#admin-table-toolbar .v-toolbar__content {
  padding: 0px !important;
}
.theme--dark.v-toolbar.v-sheet {
  background-color: #1e1e1e;
}
</style>

<script lang="ts">
import { DropdownValueList, Editable, LooseObject } from "@/store/types";
import { localiseItem, mergeDescriptions } from "@/utils/localise";
import Vue from "vue";
import Component from "vue-class-component";
import { Locale } from "@/API";
import marked from "marked";
import { Form } from "@/utils";
import PageTemplate from "../PageTemplate.vue";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";
import AppBar from "../AppBar.vue";

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
  components: {
    "page-template": PageTemplate,
    "confirm-delete-dialog": ConfirmDeleteDialog,
    "app-bar": AppBar,
  },
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
  selected: Editable[] = [];

  editedItem = mergeDescriptions(
    typeof this.defaultItem === "function"
      ? this.defaultItem()
      : this.defaultItem
  ) as Editable;

  get color() {
    return this.$vuetify.theme.dark ? "#1E1E1E" : "white";
  }

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
    return this.$store.getters[`${this.module}/list`];
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

  async refresh() {
    try {
      await this.$store.dispatch(`${this.module}/load`);
    } catch (error) {
      this.messages =
        error.errors?.map((err: { message: string }) => err.message) || [];
      this.notification = true;
    }
  }

  resetEditedItem() {
    this.$nextTick(() => {
      this.editedItem = Object.assign(
        {},
        mergeDescriptions(
          typeof this.defaultItem === "function"
            ? this.defaultItem()
            : this.defaultItem
        ) as Editable
      );
      this.editedIndex = -1;
    });
  }

  close() {
    this.dialog = false;
    this.resetEditedItem();
  }
  async save() {
    if ((this.$refs.input as Form).validate()) {
      try {
        await this.$store.dispatch(
          this.isNewItem ? `${this.module}/create` : `${this.module}/update`,
          mergeDescriptions(this.editedItem)
        );
        this.dialog = false;
        this.resetEditedItem();
      } catch (error) {
        this.messages =
          error.errors?.map((err: { message: string }) => err.message) || [];
        this.notification = true;
      }
    }
  }
  async deleteItemConfirm() {
    try {
      await this.$store.dispatch(`${this.module}/delete`, this.editedItem.id);
    } catch (error) {
      this.messages =
        error.errors?.map((err: { message: string }) => err.message) || [];
      this.notification = true;
    }
    this.closeDelete();
  }

  async deleteItemsConfirm(items: Editable[]) {
    try {
      await Promise.all(
        items.map(item =>
          this.$store.dispatch(`${this.module}/delete`, item.id)
        )
      );
      items.forEach(item =>
        this.selected.splice(this.selected.indexOf(item), 1)
      );
    } catch (error) {
      this.messages =
        error.errors?.map((err: { message: string }) => err.message) || [];
      this.notification = true;
    }
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

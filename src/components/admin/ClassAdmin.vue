<template>
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
        <v-toolbar-title>{{ $t("classes") }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              {{ $t("new-class") }}
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
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.id"
                        :disabled="!isNewItem"
                        :label="$t('id')"
                        :hint="$t('id-empty-auto-generated-message')"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-select
                        v-model="editedItem.mainClass"
                        :items="mainClasses"
                        item-text="description.title"
                        item-value="id"
                        :label="$t('main-class')"
                        single-line
                        return-object
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-checkbox
                        v-model="editedItem.magicUser"
                        :label="$t('magic-user')"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
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
  </v-data-table>
</template>
<script lang="ts">
import {
  localise,
  getDescriptionsForLocales,
  localiseItem,
} from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import { Class } from "@/store/modules/class";
import { ValueRange } from "@/store/modules/valueRange";
import { Locale, ValueRangeType } from "@/API";

@Component({
  name: "class-admin",
})
export default class ClassAdmin extends Vue {
  dialog = false;
  valid = true;
  headers = [
    { text: this.$t("id"), value: "id" },
    { text: this.$t("main-class"), value: "mainClass.description.title" },
    { text: this.$t("title"), value: "description.title" },
    { text: this.$t("actions"), value: "actions", sortable: false },
  ];
  sortBy = ["description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem: Class = {
    id: "",
    mainClass: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    descriptions: getDescriptionsForLocales(),
  };
  defaultItem: Class = {
    id: "",
    mainClass: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    descriptions: getDescriptionsForLocales(),
  };

  get items(): Class[] {
    const items = localise(
      this.$store.state.class.result?.listClasses?.items,
      this.$i18n.locale
    ) as Class[];
    return items.map(
      item =>
        ({
          ...item,
          mainClass: item.mainClass
            ? localiseItem(item.mainClass, this.$i18n.locale)
            : undefined,
        } as Class)
    );
  }

  get mainClasses(): ValueRange[] {
    const mainClasses = this.$store.getters["valueRange/getMainClasses"];
    return localise(mainClasses, this.$i18n.locale) as ValueRange[];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-class")
      : this.$t("edit-class");
  }

  refresh() {
    this.$store.dispatch("class/load");
  }
  close() {
    this.dialog = false;
  }
  save() {
    this.$store.dispatch(
      this.isNewItem ? "class/create" : "class/update",
      this.editedItem
    );
    this.dialog = false;
  }
  deleteItemConfirm() {
    this.$store.dispatch("class/delete", this.editedItem.id);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }
  editItem(item: Class) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: Class) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
  mounted() {
    this.refresh();
  }
  created() {
    this.$store.dispatch("valueRange/loadByType", ValueRangeType.MAIN_CLASS);
  }
}
</script>

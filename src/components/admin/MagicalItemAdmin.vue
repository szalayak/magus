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
        <v-toolbar-title>{{ $t("magical-items") }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog scrollable v-model="dialog" max-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              {{ $t("new-magical-item") }}
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
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-select
                        v-model="editedItem.class"
                        :items="classes"
                        item-text="description.title"
                        item-value="id"
                        :label="$t('class')"
                        return-object
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-text-field
                        v-model.number="editedItem.manaCost"
                        type="number"
                        :label="$t('mana-cost')"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-text-field
                        v-model="editedItem.duration"
                        :label="$t('duration')"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-text-field
                        v-model.number="editedItem.price"
                        type="number"
                        :label="$t('price')"
                        outlined
                      ></v-text-field>
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
    <template v-slot:[`item.magicUser`]="{ item }">
      <v-simple-checkbox v-model="item.magicUser" disabled></v-simple-checkbox>
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
import { MagicalItem } from "@/store/modules/magicalItem";
import { Class } from "@/store/modules/class";
import { Locale } from "@/API";

@Component({
  name: "magical-item-admin",
})
export default class MagicalItemAdmin extends Vue {
  dialog = false;
  valid = true;
  headers = [
    { text: this.$t("id"), value: "id" },
    { text: this.$t("title"), value: "description.title" },
    { text: this.$t("class"), value: "class.description.title" },
    { text: this.$t("mana-cost"), value: "manaCost" },
    { text: this.$t("duration"), value: "duration" },
    { text: this.$t("price"), value: "price" },
    { text: this.$t("actions"), value: "actions", sortable: false },
  ];
  sortBy = ["description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem: MagicalItem = {
    id: "",
    class: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    descriptions: getDescriptionsForLocales(),
  };
  defaultItem: MagicalItem = {
    id: "",
    class: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    descriptions: getDescriptionsForLocales(),
  };

  get items(): MagicalItem[] {
    const items = localise(
      this.$store.state.magicalItem.result?.listMagicalItems?.items,
      this.$i18n.locale
    ) as MagicalItem[];
    return items.map(
      item =>
        ({
          ...item,
          class: item.class
            ? localiseItem(item.class, this.$i18n.locale)
            : undefined,
        } as MagicalItem)
    );
  }

  get classes(): Class[] {
    const classes = this.$store.getters["class/getMagicUserClasses"];
    return localise(classes, this.$i18n.locale) as Class[];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-magical-item")
      : this.$t("edit-magical-item");
  }

  refresh() {
    this.$store.dispatch("magicalItem/load");
  }
  close() {
    this.dialog = false;
  }
  save() {
    this.$store.dispatch(
      this.isNewItem ? "magicalItem/create" : "magicalItem/update",
      this.editedItem
    );
    this.dialog = false;
  }
  deleteItemConfirm() {
    this.$store.dispatch("magicalItem/delete", this.editedItem.id);
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
    this.$store.dispatch("class/load");
  }
}
</script>

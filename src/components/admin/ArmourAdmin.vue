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
        <v-toolbar-title>{{ $t("armours") }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog scrollable v-model="dialog" max-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              {{ $t("new-armour") }}
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
                    <v-col cols="12" sm="12">
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
                      <v-text-field
                        v-model.number="editedItem.movementPreventionValue"
                        type="number"
                        :label="$t('movement-prevention-value')"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-text-field
                        v-model.number="editedItem.damageReductionValue"
                        type="number"
                        :label="$t('damage-reduction-value')"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-text-field
                        v-model="editedItem.weight"
                        :label="$t('weight')"
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
import { Armour } from "@/store/modules/armour";
import { localise, getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "armour-admin",
})
export default class ArmourAdmin extends Vue {
  dialog = false;
  valid = true;
  headers = [
    { text: this.$t("id"), value: "id" },
    { text: this.$t("title"), value: "description.title" },
    {
      text: this.$t("movement-prevention-value"),
      value: "movementPreventionValue",
    },
    { text: this.$t("damage-reduction-value"), value: "damageReductionValue" },
    { text: this.$t("weight"), value: "weight" },
    { text: this.$t("price"), value: "price" },
    { text: this.$t("actions"), value: "actions", sortable: false },
  ];
  sortBy = ["description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem: Armour = {
    id: "",
    descriptions: getDescriptionsForLocales(),
    movementPreventionValue: 0,
    damageReductionValue: 0,
  };
  defaultItem: Armour = {
    id: "",
    descriptions: getDescriptionsForLocales(),
    movementPreventionValue: 0,
    damageReductionValue: 0,
  };

  get items(): Armour[] {
    return localise(
      this.$store.state.armour.result?.listArmours?.items,
      this.$i18n.locale
    ) as Armour[];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-armour")
      : this.$t("edit-armour");
  }

  refresh() {
    this.$store.dispatch("armour/load");
  }
  close() {
    this.dialog = false;
  }
  save() {
    this.$store.dispatch(
      this.isNewItem ? "armour/create" : "armour/update",
      this.editedItem
    );
    this.dialog = false;
  }
  deleteItemConfirm() {
    this.$store.dispatch("armour/delete", this.editedItem.id);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }
  editItem(item: Armour) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: Armour) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
  mounted() {
    this.refresh();
  }
}
</script>

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
        <v-toolbar-title>Races</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-form v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field
                        v-model="editedItem.id"
                        :disabled="!isNewItem"
                        label="ID"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-data-iterator
                      :items="editedItem.descriptions"
                      item-key="id"
                      hide-default-footer
                    >
                      <template v-for="description in editedItem.descriptions">
                        <v-col
                          :key="`input-${description.locale}`"
                          cols="12"
                          sm="12"
                        >
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-subheader>{{
                                $t(description.locale)
                              }}</v-subheader>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                v-model="description.title"
                                label="Title"
                                outlined
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-textarea
                                v-model="description.description"
                                label="Description"
                                outlined
                              ></v-textarea>
                            </v-col>
                          </v-row>
                        </v-col>
                      </template>
                    </v-data-iterator>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
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
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script lang="ts">
import { Race } from "@/store/modules/race";
import localise from "@/utils/localise";
import { Locale } from "@/API";
import { Description } from "@/store";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "race-admin",
})
export default class RaceAdmin extends Vue {
  dialog = false;
  valid = true;
  headers = [
    { text: "ID", value: "id" },
    { text: "Description", value: "description.title" },
    { text: "Actions", value: "actions", sortable: false },
  ];
  sortBy = ["description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem: Race = {
    id: "",
    descriptions: Object.keys(Locale).map(
      l => ({ locale: l, title: "" } as Description)
    ),
  };
  defaultItem: Race = {
    id: "",
    descriptions: Object.keys(Locale).map(
      l => ({ locale: l, title: "" } as Description)
    ),
  };
  locales: Array<{ id: string }> = Object.keys(Locale).map(locale => ({
    id: locale,
  }));

  get items(): Race[] {
    return localise(
      this.$store.state.race.result?.listRaces?.items,
      this
    ) as Race[];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  refresh() {
    this.$store.dispatch("race/loadRaces");
  }
  close() {
    this.dialog = false;
  }
  save() {
    this.$store.dispatch(
      this.isNewItem ? "race/createRace" : "race/updateRace",
      this.editedItem
    );
    this.dialog = false;
  }
  deleteItemConfirm() {
    this.$store.dispatch("race/deleteRace", this.editedItem.id);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }
  editItem(item: Race) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: Race) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
  mounted() {
    this.refresh();
  }
}
</script>

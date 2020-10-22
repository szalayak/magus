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
        <v-toolbar-title>Dice</v-toolbar-title>
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
              <v-container>
                <v-row> </v-row>
              </v-container>
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

<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "dice-table",
  data: () => {
    return {
      dialog: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Description", value: "description.title" },
        { text: "MinValue", value: "minValue" },
        { text: "MaxValue", value: "maxValue" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      sortBy: ["maxValue"],
      editedIndex: -1,
      dialogDelete: false,
      editedItem: {},
      defaultItem: {},
    };
  },
  computed: {
    ...mapState(["dice"]),
    items: {
      get() {
        const items = this.dice.result?.listDies?.items.map(item => ({
          ...item,
          description: item.descriptions.find(
            d => d.locale === this.$i18n.locale
          ),
        }));
        return items || [];
      },
    },
    formTitle: {
      get() {
        return this.editedIndex === -1 ? "New Item" : "Edit Item";
      },
    },
  },
  methods: {
    ...mapActions(["loadDice"]),
    refresh() {
      this.loadDice();
    },
    close() {
      console.log("close");
    },
    save() {
      console.log("save");
    },
    deleteItemConfirm() {
      console.log("deleteItemConfirm");
    },
    closeDelete() {
      console.log("closeDelete");
    },
    editItem(item) {
      console.log("editItem", item);
    },
    deleteItem(item) {
      console.log("deleteItem", item);
    },
  },
  created() {
    this.refresh();
  },
});
</script>

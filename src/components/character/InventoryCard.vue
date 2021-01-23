<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('inventory')"
    :error.sync="error"
    :messages="messages"
  >
    <template v-slot:toolbar="{}">
      <v-dialog scrollable v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-show="editable"
            color="primary"
            text
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>{{ formTitle }}</v-card-title>
          <v-alert v-model="error" dense outlined type="error" dismissible>
            {{ messages }}
          </v-alert>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.name"
                      :label="$t('item')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.amount"
                      :label="$t('amount')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.location"
                      :label="$t('location')"
                    ></v-text-field>
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
      <confirm-delete-dialog
        :open.sync="dialogDelete"
        @cancel="closeDelete"
        @confirm="deleteItemConfirm"
      />
    </template>
    <template v-slot:fields="{}">
      <v-data-table
        width="auto"
        height="auto"
        :headers="headers"
        :items="assignments"
        :sort-by="sortBy"
      >
        <template v-slot:[`item.name`]="{ item }">
          <a @click="editItem(item, assignments)">{{ item.name }}</a>
        </template>
        <template v-if="editable" v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item, assignments)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item, assignments)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { InventoryItem } from "@/store/types";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";
import CharacterInfoList from "./CharacterInfoList";

@Component({
  name: "inventory-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class InventoryCard extends CharacterInfoList {
  sortBy = ["name"];

  get headers() {
    const headers = [
      { text: this.$t("item"), value: "name" },
      { text: this.$t("amount"), value: "amount" },
      { text: this.$t("location"), value: "location" },
    ];
    return this.editable
      ? [
          ...headers,
          { text: this.$t("actions"), value: "actions", sortable: false },
        ]
      : headers;
  }

  get assignments() {
    return this.character.inventory || [];
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-inventory-item")
      : this.$t("edit-inventory-item");
  }

  defaultItem(): InventoryItem {
    return {};
  }

  async createFunction(item: InventoryItem) {
    const inventory = [...this.assignments, item];
    return this.update({ id: this.character.id, inventory });
  }

  async updateFunction(item: InventoryItem) {
    const inventory = [...this.assignments];
    Object.assign(inventory[this.editedIndex], item);
    return this.update({ id: this.character.id, inventory });
  }

  async deleteFunction() {
    const inventory = [...this.assignments];
    inventory.splice(this.editedIndex, 1);
    return this.update({ id: this.character.id, inventory });
  }
}
</script>

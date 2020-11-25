<template>
  <character-info-card :id="id" :editable="false" :title="$t('inventory')">
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
    </template>
    <template v-slot:fields="{}">
      <v-data-table
        width="auto"
        height="auto"
        :headers="headers"
        :items="items"
        :sort-by="sortBy"
      >
        <template v-slot:top>
          <v-alert
            v-model="notification"
            dense
            outlined
            type="error"
            dismissible
          >
            {{ messages }}
          </v-alert>
        </template>
        <template v-if="editable" v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { InventoryItem } from "@/store/types";

@Component({
  name: "inventory-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class InventoryCard extends CharacterInfo {
  valid = true;
  dialog = false;
  sortBy = ["name"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  notification = false;
  messages: string[] = [];

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

  get items() {
    return this.character.inventory || [];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-inventory-item")
      : this.$t("edit-inventory-item");
  }

  defaultItem(): InventoryItem {
    return {};
  }

  close() {
    this.dialog = false;
    this.resetEditedItem();
  }
  save() {
    if (this.isNewItem)
      this.character.inventory
        ? this.character.inventory.push(this.editedItem)
        : (this.character.inventory = [this.editedItem]);
    else {
      Object.assign(
        this.character.inventory
          ? this.character.inventory[this.editedIndex]
          : {},
        this.editedItem
      );
    }
    this.$store.dispatch("character/update", this.character);
    this.dialog = false;
    this.resetEditedItem();
  }

  deleteItemConfirm() {
    this.character.inventory?.splice(this.editedIndex, 1);
    this.$store.dispatch("character/update", this.character);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.resetEditedItem();
  }
  editItem(item: InventoryItem) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: InventoryItem) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
  resetEditedItem() {
    this.$nextTick(() => {
      this.editedItem = this.defaultItem();
      this.editedIndex = -1;
    });
  }
}
</script>

<template>
  <character-info-card :id="id" :editable="false" :title="$t('poisons')">
    <template v-slot:toolbar="{}">
      <v-dialog scrollable v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" text v-bind="attrs" v-on="on">
            {{ $t("new-poison") }}
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
                      :label="$t('name')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model.number="editedItem.amount"
                      type="number"
                      :label="$t('amount')"
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
        :items="poisons"
        :sort-by="sortBy"
        disable-pagination
        hide-default-footer
      >
        <template v-slot:top>
          <v-alert v-if="notification" dense outlined type="error">
            {{ messages }}
          </v-alert>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
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
import { Poison } from "@/store/types";

@Component({
  name: "poison-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class PoisonCard extends CharacterInfo {
  valid = true;
  dialog = false;
  sortBy = ["name"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  notification = false;
  messages: string[] = [];

  get headers() {
    return [
      { text: this.$t("poison"), value: "name" },
      { text: this.$t("amount"), value: "amount" },
      { text: this.$t("actions"), value: "actions", sortable: false },
    ];
  }

  get poisons() {
    return this.character.poisons || [];
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-poison")
      : this.$t("edit-poison");
  }

  defaultItem(): Poison {
    return {};
  }

  close() {
    this.dialog = false;
  }
  save() {
    if (this.isNewItem)
      this.character.poisons
        ? this.character.poisons.push(this.editedItem)
        : (this.character.poisons = [this.editedItem]);
    else {
      Object.assign(
        this.character.poisons ? this.character.poisons[this.editedIndex] : {},
        this.editedItem
      );
    }
    this.$store.dispatch("character/update", this.character);
    this.dialog = false;
  }

  deleteItemConfirm() {
    this.character.poisons?.splice(this.editedIndex, 1);
    this.$store.dispatch("character/update", this.character);
    this.closeDelete();
  }
  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = this.defaultItem();
      this.editedIndex = -1;
    });
  }
  editItem(item: Poison) {
    this.editedIndex = this.poisons.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: Poison) {
    this.editedIndex = this.poisons.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
}
</script>

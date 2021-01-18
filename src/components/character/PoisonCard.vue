<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('poisons')"
    :error.sync="error"
    :messages="messages"
  >
    <template v-slot:toolbar="{}">
      <v-dialog scrollable v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="editable"
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
        disable-pagination
        hide-default-footer
      >
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
import { Poison } from "@/store/types";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";
import CharacterInfoList from "./CharacterInfoList";

@Component({
  name: "poison-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class PoisonCard extends CharacterInfoList {
  sortBy = ["name"];

  get headers() {
    const headers = [
      { text: this.$t("poison"), value: "name" },
      { text: this.$t("amount"), value: "amount" },
    ];
    return this.editable
      ? [
          ...headers,
          { text: this.$t("actions"), value: "actions", sortable: false },
        ]
      : headers;
  }

  get assignments() {
    return this.character.poisons || [];
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-poison")
      : this.$t("edit-poison");
  }

  defaultItem(): Poison {
    return {};
  }

  async createFunction(item: Poison[]) {
    const poisons = [...this.assignments, item];
    return this.update({ id: this.character.id, poisons });
  }

  async updateFunction(item: Poison) {
    const poisons = [...this.assignments];
    Object.assign(poisons[this.editedIndex], item);
    return this.update({ id: this.character.id, poisons });
  }

  async deleteFunction() {
    const poisons = [...this.assignments];
    poisons.splice(this.editedIndex, 1);
    return this.update({ id: this.character.id, poisons });
  }
}
</script>

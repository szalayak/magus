<template>
  <character-info-card :id="id" :editable="false" :title="$t('magical-items')">
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
            <v-alert v-model="error" dense outlined type="error" dismissible>
              {{ messages }}
            </v-alert>
            <v-form :disabled="!editable" ref="form" v-model="valid">
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.magicalItem"
                      :items="magicalItems"
                      item-text="description.title"
                      item-value="id"
                      :label="$t('magical-item')"
                      return-object
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.location"
                      :label="$t('location')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.notes"
                      :label="$t('notes')"
                    />
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
            <v-btn v-if="editable" color="primary" text @click="save">
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
        v-if="editable"
        :disabled="selected.length === 0"
        icon
        text
        @click="deleteItems"
        color="error"
        ><v-icon>mdi-delete</v-icon></v-btn
      >
    </template>
    <template v-slot:fields="{}">
      <v-data-table
        v-model="selected"
        :show-select="editable"
        item-key="id"
        :headers="headers"
        :items="assignments"
        :sort-by="sortBy"
        disable-pagination
        hide-default-footer
      >
        <template v-slot:[`item.magicalItem.description.title`]="{ item }">
          <a @click="editItem(item, assignments)">{{
            item.magicalItem.description.title
          }}</a>
        </template>
      </v-data-table>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { MagicalItemAssignment } from "@/store/modules/character";
import CharacterInfoList from "./CharacterInfoList";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";

@Component({
  name: "magical-item-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class MagicalItemAssignmentCard extends CharacterInfoList {
  sortBy = ["magicalItem.description.title"];

  get headers() {
    return [
      { text: this.$t("magical-item"), value: "magicalItem.description.title" },
      { text: this.$t("location"), value: "location" },
      { text: this.$t("notes"), value: "notes" },
    ];
  }

  get magicalItems() {
    return this.$store.getters["magicalItem/list"];
  }

  get assignments() {
    return this.character.magicalItems || [];
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-magical-item")
      : this.$t("edit-magical-item");
  }

  defaultItem(): MagicalItemAssignment {
    return {
      characterId: this.character.id || "",
    };
  }

  async createFunction(item: MagicalItemAssignment) {
    return this.$store.dispatch("character/createMagicalItemAssignment", item);
  }

  async updateFunction(item: MagicalItemAssignment) {
    return this.$store.dispatch("character/updateMagicalItemAssignment", item);
  }

  async deleteFunction(item: MagicalItemAssignment) {
    return this.$store.dispatch("character/deleteMagicalItemAssignment", item);
  }
}
</script>

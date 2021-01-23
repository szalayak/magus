<template>
  <character-info-card
    :id="id"
    :editable="false"
    :title="$t('languages')"
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
          <v-card-text>
            <v-alert v-model="error" dense outlined type="error" dismissible>
              {{ messages }}
            </v-alert>
            <v-form ref="form" v-model="valid">
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.language"
                      :label="$t('language')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="editedItem.level"
                      :items="languageLevels"
                      :label="$t('level')"
                    ></v-select>
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
        <template v-slot:[`item.language`]="{ item }">
          <a @click="editItem(item, assignments)">{{ item.language }}</a>
        </template>
        <template v-slot:[`item.level`]="{ item }">
          {{ $t(item.level) }}
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
import { DropdownValueList, LanguageAbility } from "@/store/types";
import { LanguageLevel } from "@/API";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog.vue";
import CharacterInfoList from "./CharacterInfoList";

@Component({
  name: "language-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "confirm-delete-dialog": ConfirmDeleteDialog,
  },
})
export default class LanguageCard extends CharacterInfoList {
  sortBy = ["language"];

  get headers() {
    const headers = [
      { text: this.$t("language"), value: "language" },
      { text: this.$t("level"), value: "level" },
    ];
    return this.editable
      ? [
          ...headers,
          { text: this.$t("actions"), value: "actions", sortable: false },
        ]
      : headers;
  }

  get assignments() {
    return this.character.languages || [];
  }

  get languageLevels(): DropdownValueList[] {
    return Object.keys(LanguageLevel).map(m => ({
      value: m.toString(),
      text: this.$t(m).toString(),
    }));
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-language")
      : this.$t("edit-language");
  }

  defaultItem(): LanguageAbility {
    return {};
  }

  async createFunction(item: LanguageAbility) {
    const languages = [...this.assignments, item];
    return this.update({ id: this.character.id, languages });
  }

  async updateFunction(item: LanguageAbility) {
    const languages = [...this.assignments];
    Object.assign(languages[this.editedIndex], item);
    return this.update({ id: this.character.id, languages });
  }

  async deleteFunction() {
    const languages = [...this.assignments];
    languages.splice(this.editedIndex, 1);
    return this.update({ id: this.character.id, languages });
  }
}
</script>

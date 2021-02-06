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
      <!-- <v-list tile two-line>
        <v-list-item
          class="ps-0"
          :key="item.language"
          v-for="item in assignments"
          @click="editItem(item, assignments)"
        >
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                @click="languageSelected(item, $event)"
                :input-value="active"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.language }}</v-list-item-title>
              <v-list-item-subtitle>{{
                `${$t("level")}: ${$t(item.level)}`
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list> -->
      <v-data-table
        width="auto"
        height="auto"
        :headers="headers"
        :items="assignments"
        disable-sort
        disable-filtering
        disable-pagination
        hide-default-footer
      >
        <template v-slot:[`item.language`]="{ item }">
          <a @click="editItem(item, assignments)">{{ item.language }}</a>
        </template>
        <template v-slot:[`item.level`]="{ item }">
          {{ $t(item.level) }}
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
  selected: LanguageAbility[] = [];

  get headers() {
    const headers = [
      { text: this.$t("language"), value: "language" },
      { text: this.$t("level"), value: "level" },
    ];
    return headers;
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

  languageSelected(item: LanguageAbility, event: MouseEvent) {
    const sel = this.selected.findIndex(i => i === item);
    if (sel > -1) this.selected.splice(sel, 1);
    else this.selected.push(item);
    event.stopPropagation();
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

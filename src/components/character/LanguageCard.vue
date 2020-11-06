<template>
  <character-info-card :id="id" :editable="false" :title="$t('languages')">
    <template v-slot:toolbar="{}">
      <v-dialog scrollable v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="editable" color="primary" text v-bind="attrs" v-on="on">
            {{ $t("new-language") }}
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
        :items="languages"
        :sort-by="sortBy"
        disable-pagination
        hide-default-footer
      >
        <template v-slot:top>
          <v-alert v-if="notification" dense outlined type="error">
            {{ messages }}
          </v-alert>
        </template>
        <template v-slot:[`item.level`]="{ item }">
          {{ levelToString(item.level) }}
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
import { DropdownValueList, LanguageAbility } from "@/store/types";
import { LanguageLevel } from "@/API";

@Component({
  name: "language-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class LanguageCard extends CharacterInfo {
  valid = true;
  dialog = false;
  sortBy = ["skill.description.title"];
  editedIndex = -1;
  dialogDelete = false;
  editedItem = this.defaultItem();
  notification = false;
  messages: string[] = [];

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

  get languages() {
    return this.character.languages || [];
  }

  get languageLevels(): DropdownValueList[] {
    return Object.keys(LanguageLevel).map(m => ({
      value: m.toString(),
      text: this.$t(m).toString(),
    }));
  }

  get isNewItem() {
    return this.editedIndex === -1;
  }

  get formTitle() {
    return this.editedIndex === -1
      ? this.$t("new-language")
      : this.$t("edit-language");
  }

  defaultItem(): LanguageAbility {
    return {};
  }

  levelToString(languageLevel: LanguageLevel) {
    return this.$t(languageLevel).toString();
  }

  close() {
    this.dialog = false;
  }
  save() {
    if (this.isNewItem)
      this.character.languages
        ? this.character.languages.push(this.editedItem)
        : (this.character.languages = [this.editedItem]);
    else {
      Object.assign(
        this.character.languages
          ? this.character.languages[this.editedIndex]
          : {},
        this.editedItem
      );
    }
    this.$store.dispatch("character/update", this.character);
    this.dialog = false;
  }

  deleteItemConfirm() {
    this.character.languages?.splice(this.editedIndex, 1);
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
  editItem(item: LanguageAbility) {
    this.editedIndex = this.languages.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }
  deleteItem(item: LanguageAbility) {
    this.editedIndex = this.languages.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }
}
</script>

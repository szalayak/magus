<template>
  <v-container fluid>
    <v-data-iterator :items="characters" hide-default-footer>
      <template v-slot:header>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <slot name="toolbar-buttons"></slot>
        </v-toolbar>
      </template>
      <template v-slot:default="props">
        <v-row class="px-3">
          <v-col
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title>
                <router-link :to="characterToLink(item)">{{
                  item.name
                }}</router-link>
              </v-card-title>
              <v-card-subtitle>{{ characterToString(item) }}</v-card-subtitle>
              <v-card-text>
                {{
                  `${$t("owner")}: ${ownerToString(item.owner)}`
                }}</v-card-text
              >
              <v-card-actions>
                <v-subheader class="pl-2">{{ $t("page") }}</v-subheader>
                <v-btn-toggle dense tile color="primary" group>
                  <v-btn :to="characterPageToLink(item, 1)">1</v-btn>
                  <v-btn :to="characterPageToLink(item, 2)">2</v-btn>
                  <v-btn :to="characterPageToLink(item, 3)">3</v-btn>
                  <v-btn :to="characterPageToLink(item, 4)">4</v-btn>
                </v-btn-toggle>
                <v-spacer />
                <v-dialog
                  v-if="editable"
                  v-model="deleteDialog"
                  max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="error" icon text v-on="on" v-bind="attrs"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title class="headline">{{
                      $t("confirm-delete-message")
                    }}</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="error" text @click="closeDelete">{{
                        $t("cancel")
                      }}</v-btn>
                      <v-btn
                        color="primary"
                        text
                        @click="deleteItemConfirm(item.id)"
                        >{{ $t("ok") }}</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-snackbar
      v-for="message in messages"
      :value="notification"
      :key="message"
      @input="$emit('update:notification', $event)"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification = false">
          {{ $t("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Race } from "@/store/modules/race";
import { Class } from "@/store/modules/class";
import { localiseItem } from "@/utils/localise";
import { LooseObject } from "@/store/types";
import { User } from "@/store";
import { characterToLink } from "@/utils";

@Component({
  name: "character-list",
})
export default class CharacterList extends Vue {
  @Prop({ type: Array, required: true })
  characters!: Character[];

  @Prop({ type: String, required: true })
  title!: string;

  @Prop({ type: Array, required: false })
  messages!: string[];

  @Prop({ type: Boolean, required: false })
  notification!: boolean;

  @Prop({ type: Boolean, required: false })
  editable!: boolean;

  deleteDialog = false;

  get users() {
    return this.$store.getters["getUsers"];
  }

  raceToString(race: Race): string {
    return localiseItem(race, this.$i18n.locale)?.description?.title || "";
  }

  classToString(cl: Class): string {
    return localiseItem(cl, this.$i18n.locale)?.description?.title || "";
  }

  ownerToString(owner: string): string {
    return this.users.find((u: User) => u.username === owner)?.name || owner;
  }

  characterToString(character: Character) {
    const raceString = character.race
      ? `${this.raceToString(character.race)} `
      : "";
    const classString = character.class
      ? `${this.classToString(character.class)}`
      : "";
    return `${raceString}${classString}, ${this.$t("ex-lev")}: ${
      character.level?.currentLevel
    }`;
  }

  characterToLink(character: Character) {
    return characterToLink(character);
  }

  characterPageToLink(character: Character, page: number) {
    return `${this.characterToLink(character)}/${page}`;
  }

  closeDelete() {
    this.deleteDialog = false;
  }

  async deleteItemConfirm(id: string) {
    try {
      await this.$store.dispatch(`character/delete`, id);
    } catch (error) {
      const messages =
        typeof error === "string"
          ? [error]
          : error.errors?.map((err: LooseObject) => err.message) || [];
      this.$emit("update:messages", messages);
      this.$emit("update:notification", true);
    }
    this.closeDelete();
  }
}
</script>

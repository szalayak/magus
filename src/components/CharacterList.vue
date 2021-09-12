<template>
  <page-template>
    <template v-slot:app-bar>
      <app-bar>
        <template v-slot:actions>
          <slot name="actions"></slot>
        </template>
      </app-bar>
    </template>
    <v-list v-if="!loading" three-line>
      <v-list-item
        :to="characterToLink(character)"
        v-for="character in characters"
        :key="character.id"
      >
        <v-list-item-avatar>
          <v-avatar color="primary"
            ><span class="white--text headline">{{
              initials(character)
            }}</span></v-avatar
          >
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="character.name"></v-list-item-title>

          <v-list-item-subtitle>{{
            characterToString(character)
          }}</v-list-item-subtitle>

          <v-list-item-subtitle>{{
            `${$t("owner")}: ${ownerToString(character.owner)}`
          }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            icon
            text
            :to="characterToLink(character, true)"
            @click="$event.stopPropagation()"
            ><v-icon>mdi-account-details</v-icon></v-btn
          >
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-skeleton-loader
      v-for="i in 12"
      :key="i"
      v-else
      type="list-item-three-line"
    ></v-skeleton-loader>
  </page-template>
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Race } from "@/store/modules/race";
import { Class } from "@/store/modules/class";
import { localiseItem } from "@/utils/localise";
import { User } from "@/store";
import { characterToLink } from "@/utils";
import SkeletonCards from "@/components/SkeletonCards.vue";
import PageTemplate from "./PageTemplate.vue";
import AppBar from "./AppBar.vue";
import { BackendError } from "@/types";

@Component({
  name: "character-list",
  components: {
    "skeleton-cards": SkeletonCards,
    "page-template": PageTemplate,
    "app-bar": AppBar,
  },
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

  @Prop({ type: Boolean })
  loading: boolean | undefined;

  deleteDialog = false;

  get users(): User[] {
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

  characterToString(character: Character): string {
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

  initials(character: Character): string {
    const nameparts = character.name?.split(" ");
    return (
      nameparts
        ?.map(part => part[0])
        .join("")
        .toUpperCase() || ""
    );
  }

  characterToLink(character: Character, details?: boolean): string {
    return characterToLink(character, undefined, details);
  }

  characterPageToLink(character: Character, page: number): string {
    return `${this.characterToLink(character)}/${page}`;
  }

  closeDelete(): void {
    this.deleteDialog = false;
  }

  async deleteItemConfirm(id: string): Promise<void> {
    try {
      await this.$store.dispatch(`character/delete`, id);
    } catch (error) {
      const messages =
        typeof error === "string"
          ? [error]
          : (error as BackendError).errors?.map(err => err.message) || [];
      this.$emit("update:messages", messages);
      this.$emit("update:notification", true);
    }
    this.closeDelete();
  }
}
</script>

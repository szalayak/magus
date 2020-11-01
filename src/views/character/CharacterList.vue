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
            <v-card :to="characterToLink(item)" outlined>
              <v-card-title>
                {{ item.name }}
              </v-card-title>
              <v-card-subtitle>{{ characterToString(item) }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-snackbar
      v-for="message in messages"
      v-model="notification"
      :key="message"
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

type Form = Vue & { validate: () => boolean };

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

  raceToString(race: Race): string {
    return localiseItem(race, this.$i18n.locale)?.description?.title || "";
  }

  classToString(cl: Class): string {
    return localiseItem(cl, this.$i18n.locale)?.description?.title || "";
  }

  characterToString(character: Character) {
    const raceString = character.race
      ? `${this.raceToString(character.race)} `
      : "";
    const classString = character.class
      ? `${this.classToString(character.class)} `
      : "";
    return `${raceString}${classString}, ${this.$t("level")}: ${
      character.level?.currentLevel
    }`;
  }

  characterToLink(character: Character) {
    const type = character.playerCharacter
      ? "player-characters"
      : "non-player-characters";
    return `/${type}/${character.id}`;
  }
}
</script>

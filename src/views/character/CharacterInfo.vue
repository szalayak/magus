<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <slot name="fields" :edit="edit" :character="character" />
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" v-if="!edit" text @click="edit = true">{{
        $t("edit")
      }}</v-btn>
      <v-btn color="error" v-if="edit" text @click="cancel">{{
        $t("cancel")
      }}</v-btn>
      <v-btn color="primary" v-if="edit" text @click="save">{{
        $t("save")
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Vue from "vue";
import Component from "vue-class-component";

const CharacterInfoProps = Vue.extend({
  props: ["id", "title"],
});

@Component({
  name: "character-info",
})
export default class CharacterInfo extends CharacterInfoProps {
  edit = false;

  get character(): Character {
    return (
      this.$store.getters["character/listTransient"].find(
        (char: Character) => char.id === this.id
      ) || {}
    );
  }

  set character(character: Character) {
    this.$store.commit("race/mergeTransient", character);
  }

  save() {
    this.$store.dispatch("character/update", this.character);
    this.edit = false;
  }

  cancel() {
    this.$store.commit("character/revert", this.id);
    this.edit = false;
  }
}
</script>

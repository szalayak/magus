<template>
  <v-card outlined>
    <v-card-title>{{ $t("appearance") }}</v-card-title>
    <v-card-text>
      <v-select
        v-model="sex"
        :label="$t('sex')"
        :items="sexes"
        single-line
        autofocus
        :disabled="!edit"
      />
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
import { Sex } from "@/API";
import { Character } from "@/store/modules/character";
import { DropdownValueList } from "@/store/types";
import Vue from "vue";
import Component from "vue-class-component";

const AppearanceProps = Vue.extend({
  props: ["id"],
});

@Component({
  name: "appearance",
})
export default class Appearance extends AppearanceProps {
  edit = false;

  get sexes(): DropdownValueList[] {
    return Object.keys(Sex).map(sex => ({
      value: sex.toString(),
      text: this.$i18n.t(sex).toString(),
    }));
  }

  get sex(): Sex {
    return this.character.basicInfo?.sex || ("" as Sex);
  }

  set sex(sex: Sex) {
    if (this.character.basicInfo) this.character.basicInfo.sex = sex;
    else this.character.basicInfo = { sex };
  }

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

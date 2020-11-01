<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('spell-resistance')"
  >
    <template v-slot:fields="{ edit }">
      <v-subheader class="pl-0">{{
        `${$t("initiation")}: ${initiationTotal}`
      }}</v-subheader>
      <v-row dense> </v-row>
      <v-subheader class="pl-0">{{
        `${$t("offence")}: ${offenceTotal}`
      }}</v-subheader>
      <v-row dense> </v-row>
      <v-subheader class="pl-0">{{
        `${$t("defence")}: ${defenceTotal}`
      }}</v-subheader>
      <v-row dense> </v-row>
      <v-subheader class="pl-0">{{
        `${$t("aiming")}: ${aimingTotal}`
      }}</v-subheader>
      <v-row dense> </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { CombatValues } from "@/store/types";
import {
  aimingTotal,
  defenceTotal,
  initiationTotal,
  offenceTotal,
} from "@/utils/character";

@Component({
  name: "combat-values-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class CombatValuesCard extends CharacterInfo {
  get initiationTotal() {
    return initiationTotal(this.character);
  }

  get offenceTotal() {
    return offenceTotal(this.character);
  }

  get defenceTotal() {
    return defenceTotal(this.character);
  }

  get aimingTotal() {
    return aimingTotal(this.character);
  }

  get base(): CombatValues {
    if (!this.character.baseCombatValues) this.character.baseCombatValues = {};
    return this.character.baseCombatValues || {};
  }

  set base(values: CombatValues) {
    Object.assign(this.character.baseCombatValues, values);
  }

  get spent(): CombatValues {
    if (!this.character.spentCombatValueModifiers)
      this.character.spentCombatValueModifiers = {};
    return this.character.spentCombatValueModifiers || {};
  }

  set spent(values: CombatValues) {
    Object.assign(this.character.spentCombatValueModifiers, values);
  }

  get modifiers(): CombatValues {
    if (!this.character.otherCombatValueModifiers)
      this.character.otherCombatValueModifiers = {};
    return this.character.otherCombatValueModifiers || {};
  }
}
</script>

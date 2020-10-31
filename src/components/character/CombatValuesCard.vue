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
      <v-row dense>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.astral.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("offence")}: ${offenceTotal}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.mental.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("defence")}: ${defenceTotal}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.mental.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("aiming")}: ${aimingTotal}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.mental.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";

@Component({
  name: "combat-values-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class CombatValuesCard extends CharacterInfo {
  calculateTotal(
    base?: number,
    spentModifier?: number,
    otherModifier?: number,
    abilities?: Array<number | undefined>
  ) {
    const baseValue = base || 0;
    const spentValue = spentModifier || 0;
    const otherValue = otherModifier || 0;

    const abilityValue =
      abilities?.reduce((acc, value) => {
        return (acc || 0) + (value || 0);
      }) || 0;

    return baseValue + spentValue + otherValue + abilityValue;
  }

  get initiationTotal() {
    return 0;
  }

  get offenceTotal() {
    return 0;
  }

  get defenceTotal() {
    return 0;
  }

  get aimingTotal() {
    return 0;
  }
}
</script>

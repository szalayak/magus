<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('spell-resistance')"
  >
    <template v-slot:fields="{ edit }">
      <v-subheader class="pl-0">{{
        `${$t("astral")}: ${astralTotal}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.astral.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.astral.dynamicShield"
            :label="$t('dynamic')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.astral.innate"
            :label="$t('innate')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.astral.magical"
            :label="$t('magical')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("mental")}: ${mentalTotal}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.mental.staticShield"
            :label="$t('static')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.mental.dynamicShield"
            :label="$t('dynamic')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.mental.innate"
            :label="$t('innate')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="spellResistance.mental.magical"
            :label="$t('magical')"
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
import { SpellResistance, SpellResistanceValues } from "@/store/types";

@Component({
  name: "spell-resistance-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class SpellResistanceCard extends CharacterInfo {
  calculateTotal(values?: SpellResistanceValues): number {
    const staticShield = values?.staticShield || 0;
    const dynamicShield = values?.dynamicShield || 0;
    const innate = values?.innate || 0;
    const magical = values?.magical || 0;

    return staticShield + dynamicShield + innate + magical;
  }

  calculateInnate(ability?: number): number {
    const base = (ability || 0) - 10;
    return base > 0 ? base : 0;
  }

  get astralTotal() {
    return this.calculateTotal(this.spellResistance.astral);
  }

  get mentalTotal() {
    return this.calculateTotal(this.spellResistance.mental);
  }

  get spellResistance(): SpellResistance {
    const defaultValue = {
      astral: {
        innate: this.calculateInnate(this.character.abilities?.astral),
      },
      mental: {
        innate: this.calculateInnate(this.character.abilities?.willpower),
      },
    };
    if (!this.character.spellResistance)
      this.character.spellResistance = defaultValue;
    return this.character.spellResistance || defaultValue;
  }

  set spellResistance(spellResistance: SpellResistance) {
    Object.assign(this.character.magicalAbility, spellResistance);
  }
}
</script>

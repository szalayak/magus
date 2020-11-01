<template>
  <character-info-card :id="id" :editable="editable" :title="$t('abilities')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.strength"
            :label="$t('strength')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            :value="damageBonus"
            :label="$t('damage-bonus')"
            type="number"
            disabled
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.agility"
            :label="$t('agility')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            :value="agilityInArmour"
            :label="$t('in-armour')"
            type="number"
            disabled
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.dexterity"
            :label="$t('dexterity')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            :value="dexterityInArmour"
            :label="$t('in-armour')"
            type="number"
            disabled
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.stamina"
            :label="$t('stamina')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.health"
            :label="$t('health')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.beauty"
            :label="$t('beauty')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.intelligence"
            :label="$t('intelligence')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.willpower"
            :label="$t('willpower')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="abilities.astral"
            :label="$t('astral')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { Abilities } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { movementPreventionValueTotal } from "@/utils/character";

@Component({
  name: "abilities-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class AbilitiesCard extends CharacterInfo {
  get agilityInArmour() {
    return this.character.abilities?.agility
      ? this.character.abilities.agility -
          movementPreventionValueTotal(
            this.character.armour,
            this.character.shield
          )
      : 0;
  }

  get dexterityInArmour() {
    return this.character.abilities?.dexterity
      ? this.character.abilities.dexterity -
          movementPreventionValueTotal(
            this.character.armour,
            this.character.shield
          )
      : 0;
  }

  get damageBonus() {
    return this.abilities.strength && this.abilities.strength > 16
      ? this.abilities.strength - 16
      : 0;
  }

  get abilities() {
    if (!this.character.abilities) this.character.abilities = {};
    return this.character.abilities || {};
  }

  set abilities(abilities: Abilities) {
    Object.assign(this.character.abilities, abilities);
  }
}
</script>

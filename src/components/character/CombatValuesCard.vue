<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('combat-values')"
  >
    <template v-slot:fields="{ edit }">
      <v-subheader class="pl-0">{{
        `${$t("initiation")}: ${initiationString}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="base.initiation"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="spent.initiation"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="other.initiation"
            :label="$t('modifier')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("offence")}: ${offenceString}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="base.offence"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="spent.offence"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="other.offence"
            :label="$t('modifier')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("defence")}: ${defenceString}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="base.defence"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="spent.defence"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="other.defence"
            :label="$t('modifier')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{
        `${$t("aiming")}: ${aimingString}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="base.aiming"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="spent.aiming"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            v-model.number="other.aiming"
            :label="$t('modifier')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{ $t("combat-value-modifiers") }}</v-subheader>
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="character.combatValueModifiersPerLevel"
            :label="$t('combat-value-modifiers-per-level')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model="character.mandatoryCombatValueModifierDistribution"
            :label="$t('mandatory-combat-value-modifier-distribution')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{ $t("no-weapons") }}</v-subheader>
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="character.attacksPerTurn"
            :disabled="!edit"
            :label="$t('attacks-per-turn')"
            type="number"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <throw-scenario-dialog v-bind.sync="damage" :title="$t('damage')">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="throwScenarioToString(damage)"
                :label="$t('damage')"
                :disabled="!edit"
                v-on="on"
                v-bind="attrs"
              />
            </template>
          </throw-scenario-dialog>
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { CombatValues, ThrowScenario } from "@/store/types";
import {
  aimingTotal,
  defenceTotal,
  initiationTotal,
  isCharacterMovementRestricted,
  offenceTotal,
} from "@/utils/character";
import ThrowScenarioDialog from "../ThrowScenarioDialog.vue";
import { getThrowScenarioString } from "@/utils";

@Component({
  name: "combat-values-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "throw-scenario-dialog": ThrowScenarioDialog,
  },
})
export default class CombatValuesCard extends CharacterInfo {
  get initiationString() {
    const total = initiationTotal(this.character, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${initiationTotal(
        this.character
      )}`;
    return total;
  }
  get offenceString() {
    const total = offenceTotal(this.character, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${offenceTotal(
        this.character
      )}`;
    return total;
  }

  get defenceString() {
    const total = defenceTotal(this.character, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${defenceTotal(
        this.character
      )}`;
    return total;
  }

  get aimingString() {
    const total = aimingTotal(this.character, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${aimingTotal(this.character)}`;
    return total;
  }

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

  get other(): CombatValues {
    if (!this.character.otherCombatValueModifiers)
      this.character.otherCombatValueModifiers = {};
    return this.character.otherCombatValueModifiers || {};
  }

  set other(values: CombatValues) {
    Object.assign(this.character.otherCombatValueModifiers, values);
  }

  get damage() {
    if (!this.character.damage)
      this.character.damage = {
        iterationCount: 1,
        dice: undefined,
        modifier: undefined,
      };
    return this.character.damage || {};
  }

  set damage(values: ThrowScenario) {
    Object.assign(this.character.damage, values);
  }

  throwScenarioToString(scenario: ThrowScenario) {
    return getThrowScenarioString(scenario, this.$i18n);
  }
}
</script>

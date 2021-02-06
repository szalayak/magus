<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('combat-values')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-subheader class="pl-0">{{
        `${$t("initiation")}: ${initiationString}`
      }}</v-subheader>
      <v-row dense>
        <v-col cols="4">
          <v-text-field
            v-model.number="base.initiation"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model.number="spent.initiation"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
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
        <v-col cols="4">
          <v-text-field
            v-model.number="base.offence"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model.number="spent.offence"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
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
        <v-col cols="4">
          <v-text-field
            v-model.number="base.defence"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model.number="spent.defence"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
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
        <v-col cols="4">
          <v-text-field
            v-model.number="base.aiming"
            :label="$t('base')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model.number="spent.aiming"
            :label="$t('spent-cm')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="4">
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
        <v-col cols="6">
          <v-text-field
            v-model.number="combatValueModifiersPerLevel"
            :label="$t('combat-value-modifiers-per-level')"
            :disabled="!edit"
            type="number"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="mandatoryCombatValueModifierDistribution"
            :label="$t('mandatory-combat-value-modifier-distribution')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{ $t("no-weapons") }}</v-subheader>
      <v-row dense>
        <v-col cols="6">
          <v-text-field
            v-model.number="attacksPerTurn"
            :disabled="!edit"
            :label="$t('attacks-per-turn')"
            type="number"
          />
        </v-col>
        <v-col cols="6">
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
import { Character } from "@/store";

const copyCombatValues = (combatValues?: CombatValues): CombatValues => ({
  initiation: combatValues?.initiation,
  offence: combatValues?.offence,
  defence: combatValues?.defence,
  aiming: combatValues?.aiming,
});

const copyDamage = (damage?: ThrowScenario): ThrowScenario => ({
  iterationCount: damage?.iterationCount,
  dice: damage?.dice,
  modifier: damage?.modifier,
});

@Component({
  name: "combat-values-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "throw-scenario-dialog": ThrowScenarioDialog,
  },
})
export default class CombatValuesCard extends CharacterInfo {
  base = copyCombatValues(this.character.baseCombatValues);
  spent = copyCombatValues(this.character.spentCombatValueModifiers);
  other = copyCombatValues(this.character.otherCombatValueModifiers);
  damage = copyDamage(this.character.damage);
  combatValueModifiersPerLevel = this.character.combatValueModifiersPerLevel;
  attacksPerTurn = this.character.attacksPerTurn;
  mandatoryCombatValueModifierDistribution = this.character
    .mandatoryCombatValueModifierDistribution;

  get initiationString() {
    const total = initiationTotal(this.transientCharacter, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${initiationTotal(
        this.transientCharacter
      )}`;
    return total;
  }
  get offenceString() {
    const total = offenceTotal(this.transientCharacter, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${offenceTotal(
        this.transientCharacter
      )}`;
    return total;
  }

  get defenceString() {
    const total = defenceTotal(this.transientCharacter, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${defenceTotal(
        this.transientCharacter
      )}`;
    return total;
  }

  get aimingString() {
    const total = aimingTotal(this.transientCharacter, true);
    if (isCharacterMovementRestricted(this.character))
      return `${total}, ${this.$t("in-armour")}:${aimingTotal(
        this.transientCharacter
      )}`;
    return total;
  }

  get transientCharacter(): Character {
    return {
      ...this.character,
      baseCombatValues: this.base,
      otherCombatValueModifiers: this.other,
      spentCombatValueModifiers: this.spent,
    };
  }

  get initiationTotal() {
    return initiationTotal(this.transientCharacter);
  }

  get offenceTotal() {
    return offenceTotal(this.transientCharacter);
  }

  get defenceTotal() {
    return defenceTotal(this.transientCharacter);
  }

  get aimingTotal() {
    return aimingTotal(this.transientCharacter);
  }

  throwScenarioToString(scenario: ThrowScenario) {
    return getThrowScenarioString(scenario);
  }
  save() {
    this.update({
      id: this.character.id,
      baseCombatValues: this.base,
      spentCombatValueModifiers: this.spent,
      otherCombatValueModifiers: this.other,
      attacksPerTurn: this.attacksPerTurn,
      damage: this.damage,
      combatValueModifiersPerLevel: this.combatValueModifiersPerLevel,
      mandatoryCombatValueModifierDistribution: this
        .mandatoryCombatValueModifierDistribution,
    });
  }

  cancel() {
    this.base = copyCombatValues(this.character.baseCombatValues);
    this.spent = copyCombatValues(this.character.spentCombatValueModifiers);
    this.other = copyCombatValues(this.character.otherCombatValueModifiers);
    this.damage = copyDamage(this.character.damage);
    this.combatValueModifiersPerLevel = this.character.combatValueModifiersPerLevel;
    this.attacksPerTurn = this.character.attacksPerTurn;
    this.mandatoryCombatValueModifierDistribution = this.character.mandatoryCombatValueModifierDistribution;
  }
}
</script>

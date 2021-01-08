<template>
  <v-card outlined>
    <v-card-title>
      <slot name="title">
        <router-link :to="characterToLink(character, 2, 'abilities')">{{
          $t("abilities")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-text>
      <v-alert
        dense
        v-if="abilityTrialStatus.show"
        text
        :color="abilityTrialStatus.type"
        dismissible
        @input="abilityTrialResult = null"
      >
        <strong>{{ $t("trial") }}: {{ abilityTrialResult.abilityName }}</strong>
        <v-row dense>
          <v-col cols="6">{{ abilityTrialResult.abilityName }}:</v-col>
          <v-col cols="6">
            {{
              abilityTrialResult.abilityValue +
                (abilityTrialResult.result.modifier || 0)
            }}</v-col
          >
          <v-col cols="6">{{ $t("result") }}:</v-col>
          <v-col cols="6">{{
            abilityTrialResult.result.throwResults[0].result
          }}</v-col>
        </v-row>
      </v-alert>
      <v-row dense>
        <v-col cols="4"
          ><strong>{{ $t("strength") }}: </strong></v-col
        >
        <v-col cols="3">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('strength')"
            :value="abilities.strength || 0"
            @save="
              onTrialResult($event, $t('strength'), abilities.strength || 0)
            "
          />
        </v-col>
        <v-col cols="5">{{ $t("damage-bonus") }}: {{ damageBonus }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("agility") }}: </strong></v-col
        >
        <v-col cols="3">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('agility')"
            :value="agilityInArmour || 0"
            :text="abilities.agility"
            @save="onTrialResult($event, $t('agility'), agilityInArmour || 0)"
          />
        </v-col>
        <v-col cols="5">{{ $t("in-armour") }}: {{ agilityInArmour }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("dexterity") }}: </strong></v-col
        >
        <v-col cols="3">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('dexterity')"
            :value="dexterityInArmour || 0"
            :text="abilities.dexterity"
            @save="
              onTrialResult($event, $t('dexterity'), dexterityInArmour || 0)
            "
          />
        </v-col>
        <v-col cols="5">{{ $t("in-armour") }}: {{ dexterityInArmour }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("stamina") }}: </strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('stamina')"
            :value="abilities.stamina || 0"
            @save="onTrialResult($event, $t('stamina'), abilities.stamina || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("health") }}: </strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('health')"
            :value="abilities.health || 0"
            @save="onTrialResult($event, $t('health'), abilities.health || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("beauty") }}: </strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('beauty')"
            :value="abilities.beauty || 0"
            @save="onTrialResult($event, $t('beauty'), abilities.beauty || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("intelligence") }}: </strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('intelligence')"
            :value="abilities.intelligence || 0"
            @save="
              onTrialResult(
                $event,
                $t('intelligence'),
                abilities.intelligence || 0
              )
            "
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("willpower") }}: </strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('willpower')"
            :value="abilities.willpower || 0"
            @save="
              onTrialResult($event, $t('willpower'), abilities.willpower || 0)
            "
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("astral") }}: </strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('astral')"
            :value="abilities.astral || 0"
            @save="onTrialResult($event, $t('astral'), abilities.astral || 0)"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {
  abilityTrial,
  AbilityTrialResult,
  movementPreventionValueTotal,
  ThrowScenarioResult,
} from "@/utils";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";
import ThrowScenarioTriggerField from "./ThrowScenarioTriggerField.vue";
@Component({
  name: "character-abilities-quick-view",
  components: {
    "throw-scenario-trigger-field": ThrowScenarioTriggerField,
  },
})
export default class CharacterAbilitiesQuickView extends CharacterQuickView {
  abilityTrialResult: AbilityTrialResult | null = null;

  get abilities() {
    return this.character.abilities || {};
  }

  get abilityTrialStatus() {
    return {
      show: !!this.abilityTrialResult,
      type:
        this.abilityTrialResult && this.abilityTrialResult.success
          ? "success"
          : "error",
    };
  }

  get agilityInArmour() {
    return this.abilities.agility
      ? this.abilities.agility - movementPreventionValueTotal(this.character)
      : 0;
  }

  get dexterityInArmour() {
    return this.abilities.dexterity
      ? this.abilities.dexterity - movementPreventionValueTotal(this.character)
      : 0;
  }

  get damageBonus() {
    return this.abilities.strength && this.abilities.strength > 16
      ? this.abilities.strength - 16
      : 0;
  }

  onTrialResult(
    result: ThrowScenarioResult,
    abilityName: string,
    abilityValue: number
  ) {
    this.abilityTrialResult = abilityTrial({
      result,
      abilityName,
      abilityValue,
    });
  }
}
</script>

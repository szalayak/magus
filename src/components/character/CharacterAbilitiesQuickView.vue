<template>
  <v-card outlined>
    <v-card-title>
      <slot name="title">
        <router-link :to="characterToLink(character, 2, 'abilities')">{{
          $t("abilities")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-subtitle><slot name="subtitle"></slot></v-card-subtitle>
    <v-card-text>
      <v-alert
        dense
        v-if="abilityTrialStatus.show"
        text
        :color="abilityTrialStatus.type"
        dismissible
        @input="abilityTrialResult = null"
      >
        <strong>{{ $t(`${abilityTrialResult.abilityName}-trial`) }}</strong>
        <v-row dense>
          <v-col cols="6">{{ $t(abilityTrialResult.abilityName) }}:</v-col>
          <v-col cols="6">
            {{ abilityTrialResult.abilityValue || 0
            }}<template v-if="abilityTrialResult.result.modifier">
              + ({{ abilityTrialResult.result.modifier }}) =
              {{
                (abilityTrialResult.abilityValue || 0) +
                  abilityTrialResult.result.modifier
              }}</template
            ></v-col
          >
          <v-col cols="6">{{ $t("result") }}:</v-col>
          <v-col cols="6">{{
            abilityTrialResult.result.throwResults[0].result
          }}</v-col>
        </v-row>
      </v-alert>
      <v-row dense>
        <v-col cols="4"
          ><strong>{{ $t("strength") }}</strong></v-col
        >
        <v-col cols="3">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('strength-trial')"
            :value="abilities.strength || 0"
            @save="onTrialResult($event, 'strength', abilities.strength || 0)"
          />
        </v-col>
        <v-col cols="5">{{ $t("damage-bonus") }}: {{ damageBonus }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("agility") }}</strong></v-col
        >
        <v-col cols="3">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('agility-trial')"
            :value="agilityInArmour || 0"
            :text="abilities.agility"
            @save="onTrialResult($event, 'agility', agilityInArmour || 0)"
          />
        </v-col>
        <v-col cols="5">{{ $t("in-armour") }}: {{ agilityInArmour }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("dexterity") }}</strong></v-col
        >
        <v-col cols="3">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('dexterity-trial')"
            :value="dexterityInArmour || 0"
            :text="abilities.dexterity"
            @save="onTrialResult($event, 'dexterity', dexterityInArmour || 0)"
          />
        </v-col>
        <v-col cols="5">{{ $t("in-armour") }}: {{ dexterityInArmour }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("stamina") }}</strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('stamina-trial')"
            :value="abilities.stamina || 0"
            @save="onTrialResult($event, 'stamina', abilities.stamina || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("health") }}</strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('health-trial')"
            :value="abilities.health || 0"
            @save="onTrialResult($event, 'health', abilities.health || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("beauty") }}</strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('beauty-trial')"
            :value="abilities.beauty || 0"
            @save="onTrialResult($event, 'beauty', abilities.beauty || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("intelligence") }}</strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('intelligence-trial')"
            :value="abilities.intelligence || 0"
            @save="
              onTrialResult($event, 'intelligence', abilities.intelligence || 0)
            "
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("willpower") }}</strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('willpower-trial')"
            :value="abilities.willpower || 0"
            @save="onTrialResult($event, 'willpower', abilities.willpower || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("astral") }}</strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('astral-trial')"
            :value="abilities.astral || 0"
            @save="onTrialResult($event, 'astral', abilities.astral || 0)"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Dice } from "@/API";
import {
  abilityTrial,
  AbilityTrialResult,
  executeThrowScenario,
  movementPreventionValueTotal,
  parseThrowScenarioString,
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

  created() {
    if (this.bus) {
      this.bus.$on("ability-trial", (ability: string, modifier: number) => {
        this.abilityTrialResult = abilityTrial({
          result: {
            ...executeThrowScenario(parseThrowScenarioString(Dice.D10)),
            modifier,
          },
          abilityName: ability,
          abilityValue: this.abilities[ability] || 0,
        });
      });
    }
  }
}
</script>

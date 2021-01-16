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
        v-if="abilityCheckStatus.show"
        text
        :color="abilityCheckStatus.type"
        dismissible
        @input="abilityCheckResult = null"
      >
        <strong>{{ $t(`${abilityCheckResult.abilityName}-check`) }}</strong>
        <v-row dense>
          <v-col cols="6">{{ $t(abilityCheckResult.abilityName) }}:</v-col>
          <v-col cols="6">
            {{ abilityCheckResult.abilityValue || 0
            }}<template v-if="abilityCheckResult.result.modifier">
              + ({{ abilityCheckResult.result.modifier }}) =
              {{
                (abilityCheckResult.abilityValue || 0) +
                  abilityCheckResult.result.modifier
              }}</template
            ></v-col
          >
          <v-col cols="6">{{ $t("result") }}:</v-col>
          <v-col cols="6">{{
            abilityCheckResult.result.throwResults[0].result
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
            :title="$t('strength-check')"
            :value="abilities.strength || 0"
            @save="onCheckResult($event, 'strength', abilities.strength || 0)"
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
            :title="$t('agility-check')"
            :value="agilityInArmour || 0"
            :text="abilities.agility"
            @save="onCheckResult($event, 'agility', agilityInArmour || 0)"
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
            :title="$t('dexterity-check')"
            :value="dexterityInArmour || 0"
            :text="abilities.dexterity"
            @save="onCheckResult($event, 'dexterity', dexterityInArmour || 0)"
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
            :title="$t('stamina-check')"
            :value="abilities.stamina || 0"
            @save="onCheckResult($event, 'stamina', abilities.stamina || 0)"
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
            :title="$t('health-check')"
            :value="abilities.health || 0"
            @save="onCheckResult($event, 'health', abilities.health || 0)"
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
            :title="$t('beauty-check')"
            :value="abilities.beauty || 0"
            @save="onCheckResult($event, 'beauty', abilities.beauty || 0)"
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
            :title="$t('intelligence-check')"
            :value="abilities.intelligence || 0"
            @save="
              onCheckResult($event, 'intelligence', abilities.intelligence || 0)
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
            :title="$t('willpower-check')"
            :value="abilities.willpower || 0"
            @save="onCheckResult($event, 'willpower', abilities.willpower || 0)"
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
            :title="$t('astral-check')"
            :value="abilities.astral || 0"
            @save="onCheckResult($event, 'astral', abilities.astral || 0)"
          />
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("perception") }}</strong></v-col
        >
        <v-col cols="8">
          <throw-scenario-trigger-field
            bold
            dialog
            throwScenarioString="D10"
            :title="$t('perception-check')"
            :value="abilities.perception || 0"
            @save="
              onCheckResult($event, 'perception', abilities.perception || 0)
            "
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Dice } from "@/API";
import {
  abilityCheck,
  AbilityCheckResult,
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
  abilityCheckResult: AbilityCheckResult | null = null;

  get abilities() {
    return this.character.abilities || {};
  }

  get abilityCheckStatus() {
    return {
      show: !!this.abilityCheckResult,
      type:
        this.abilityCheckResult && this.abilityCheckResult.success
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

  onCheckResult(
    result: ThrowScenarioResult,
    abilityName: string,
    abilityValue: number
  ) {
    this.abilityCheckResult = abilityCheck({
      result,
      abilityName,
      abilityValue,
    });
  }

  created() {
    if (this.bus) {
      this.bus.$on("ability-check", (ability: string, modifier: number) => {
        this.abilityCheckResult = abilityCheck({
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

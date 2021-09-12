<template>
  <v-card outlined>
    <v-card-title
      ><slot name="title"
        ><router-link :to="characterToLink(character, 2, 'spell-resistance')">{{
          $t("spell-resistance")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-subtitle><slot name="subtitle"></slot></v-card-subtitle>
    <v-card-text>
      <v-alert
        dense
        text
        color="success"
        v-if="spellResistanceThrowStatus.show"
        dismissible
        @input="spellResistanceThrowResult = null"
      >
        <v-row dense
          ><v-col cols="6"
            ><strong>{{ spellResistanceThrowResult.name }}:</strong></v-col
          ><v-col cols="6">{{
            spellResistanceThrowResult.value -
            spellResistanceThrowResult.result.total
          }}</v-col
          ><v-col cols="6"
            >{{ $t("throw") }} ({{
              throwScenarioToString(
                spellResistanceThrowResult.result.throwScenario
              )
            }}):</v-col
          >
          <v-col cols="6">{{ spellResistanceThrowResults }}</v-col></v-row
        >
      </v-alert>
      <v-row dense>
        <v-col cols="4"> </v-col>
        <v-col cols="4">
          <strong>{{ $t("astral-sr") }}</strong>
        </v-col>
        <v-col cols="4">
          <strong>{{ $t("mental") }}</strong>
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("static") }}</strong></v-col
        >
        <v-col cols="4">{{ spellResistance.astral.staticShield }}</v-col>
        <v-col cols="4">{{ spellResistance.mental.staticShield }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("dynamic") }}</strong></v-col
        >
        <v-col cols="4">{{ spellResistance.astral.dynamicShield }}</v-col>
        <v-col cols="4">{{ spellResistance.mental.dynamicShield }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("innate") }}</strong></v-col
        >
        <v-col cols="4">{{ spellResistance.astral.innate }}</v-col>
        <v-col cols="4">{{ spellResistance.mental.innate }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("magical") }}</strong></v-col
        >
        <v-col cols="4">{{ spellResistance.astral.magical }}</v-col>
        <v-col cols="4">{{ spellResistance.mental.magical }}</v-col>
        <v-col cols="4"
          ><strong>{{ $t("total-sr") }}</strong></v-col
        >
        <v-col cols="4">
          <throw-scenario-trigger-field
            bold
            throwScenarioString="D10"
            :title="$t('astral-sr')"
            :value="astralSpellResistanceTotal || 0"
            @save="
              onThrowResult(
                $event,
                $t('astral-sr'),
                astralSpellResistanceTotal || 0
              )
            "
        /></v-col>
        <v-col cols="4"
          ><throw-scenario-trigger-field
            bold
            throwScenarioString="D10"
            :title="$t('mental')"
            :value="mentalSpellResistanceTotal || 0"
            @save="
              onThrowResult(
                $event,
                $t('mental'),
                mentalSpellResistanceTotal || 0
              )
            "
        /></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { ThrowScenario } from "@/store";
import {
  getThrowScenarioString,
  SpellResistanceThrowResult,
  ThrowScenarioResult,
} from "@/utils";
import Component from "vue-class-component";
import CharacterSpellResistanceQuickViewBase from "../CharacterSpellResistanceQuickViewBase";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";

interface ThrowStatus {
  show: boolean;
}

@Component({
  name: "character-spell-resistance-quick-view",
  components: {
    "throw-scenario-trigger-field": ThrowScenarioTriggerField,
  },
})
export default class CharacterSpellResistanceQuickView extends CharacterSpellResistanceQuickViewBase {
  spellResistanceThrowResult: SpellResistanceThrowResult | null = null;

  get spellResistanceThrowResults(): number[] {
    return (
      this.spellResistanceThrowResult?.result.throwResults.map(r => r.result) ||
      []
    );
  }

  get spellResistanceThrowStatus(): ThrowStatus {
    return {
      show: !!this.spellResistanceThrowResult,
    };
  }

  throwScenarioToString(damage: ThrowScenario): string {
    return getThrowScenarioString(damage);
  }

  onThrowResult(
    result: ThrowScenarioResult,
    name: string,
    value?: number
  ): void {
    this.spellResistanceThrowResult = {
      result: { ...result },
      name,
      value,
    };
  }
}
</script>

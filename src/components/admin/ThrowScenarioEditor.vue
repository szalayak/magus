<template>
  <v-row>
    <v-col cols="12" sm="12" md="4">
      <v-text-field
        type="number"
        :value="throwScenario.iterationCount"
        :label="$t('iteration-count')"
        @change="onIterationCountChange"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-select
        :value="throwScenario.dice"
        :items="dice"
        item-text="title"
        item-value="id"
        :label="$t('dice')"
        @change="onDiceChange"
        outlined
      ></v-select>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-text-field
        type="number"
        :value="throwScenario.modifier"
        :label="$t('modifier')"
        @change="onModifierChange"
        outlined
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { getDice } from "@/utils/dice";
import { Dice } from "@/API";

const ThrowScenarioProps = Vue.extend({
  props: {
    throwScenario: Object,
  },
});

@Component
export default class ThrowScenarioEditor extends ThrowScenarioProps {
  get dice() {
    return getDice(this.$i18n);
  }

  onIterationCountChange(newValue: number) {
    this.$emit("update:iterationCount", newValue);
  }
  onDiceChange(newValue: Dice) {
    this.$emit("update:dice", newValue);
  }
  onModifierChange(newValue: number) {
    this.$emit("update:modifier", newValue);
  }
}
</script>

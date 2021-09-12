<template>
  <v-row dense>
    <v-col cols="12" xs="12" sm="4">
      <v-text-field
        type="number"
        :value="iterationCount"
        :label="$t('iteration-count')"
        @input="$emit('update:iterationCount', parseInt($event))"
      ></v-text-field>
    </v-col>
    <v-col cols="12" xs="12" sm="4">
      <v-select
        :value="dice"
        :items="diceList"
        item-text="title"
        item-value="id"
        :label="$t('dice')"
        @input="$emit('update:dice', $event)"
      ></v-select>
    </v-col>
    <v-col cols="12" xs="12" sm="4">
      <v-text-field
        type="number"
        :value="modifier"
        :label="$t('modifier')"
        @input="$emit('update:modifier', parseInt($event))"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { DiceObject, getDice } from "@/utils/dice";

export default Vue.extend({
  name: "throw-scenario-editor",
  props: ["iterationCount", "dice", "modifier"],
  computed: {
    diceList(): DiceObject[] {
      return getDice(this.$i18n);
    },
  },
});
</script>

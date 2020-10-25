<template>
  <v-row>
    <v-col cols="12" sm="12" md="4">
      <v-text-field
        type="number"
        :value="iterationCount"
        :label="$t('iteration-count')"
        @input="$emit('update:iterationCount', parseInt($event))"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-select
        :value="dice"
        :items="diceList"
        item-text="title"
        item-value="id"
        :label="$t('dice')"
        @input="$emit('update:dice', $event)"
        outlined
      ></v-select>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-text-field
        type="number"
        :value="modifier"
        :label="$t('modifier')"
        @input="$emit('update:modifier', parseInt($event))"
        outlined
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { getDice } from "@/utils/dice";

export default Vue.extend({
  name: "throw-scenario-editor",
  props: ["iterationCount", "dice", "modifier"],
  computed: {
    diceList() {
      return getDice(this.$i18n);
    },
  },
});
</script>

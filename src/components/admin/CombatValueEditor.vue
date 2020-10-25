<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" lg="3">
      <v-text-field
        type="number"
        :value="combatValues.initiation"
        :label="$t('initiation-value')"
        @change="onInitiationChange"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="3">
      <v-text-field
        type="number"
        :value="combatValues.offence"
        :label="$t('offence-value')"
        @change="onOffenceChange"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="3">
      <v-text-field
        type="number"
        :value="combatValues.defence"
        :label="$t('defence-value')"
        @change="onDefenceChange"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="3">
      <v-text-field
        type="number"
        :value="combatValues.aiming"
        :label="$t('aiming-value')"
        @change="onAimingChange"
        outlined
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

const CombatValueProps = Vue.extend({
  props: {
    combatValues: Object,
  },
});

@Component
export default class CombatValueEditor extends CombatValueProps {
  onInitiationChange(newValue: number) {
    this.$emit("update:initiation", newValue);
  }
  onOffenceChange(newValue: number) {
    this.$emit("update:offence", newValue);
  }
  onDefenceChange(newValue: number) {
    this.$emit("update:defence", newValue);
  }
  onAimingChange(newValue: number) {
    this.$emit("update:aiming", newValue);
  }
}
</script>

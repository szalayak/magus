<template>
  <v-row dense>
    <v-col cols="12" xs="12" sm="6" md="3">
      <v-text-field
        type="number"
        :value="initiation"
        :label="$t('initiation-value')"
        @input="$emit('update:initiation', parseInt($event))"
      ></v-text-field>
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="3">
      <v-text-field
        type="number"
        :value="offence"
        :label="$t('offence-value')"
        @input="$emit('update:offence', parseInt($event))"
        :disabled="ranged"
      ></v-text-field>
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="3">
      <v-text-field
        type="number"
        :value="defence"
        :label="$t('defence-value')"
        @input="$emit('update:defence', parseInt($event))"
        :disabled="ranged"
      ></v-text-field>
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="3">
      <v-text-field
        type="number"
        :value="aiming"
        :label="$t('aiming-value')"
        @input="$emit('update:aiming', parseInt($event))"
        :disabled="!ranged"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["initiation", "offence", "defence", "aiming", "ranged"],
});
</script>

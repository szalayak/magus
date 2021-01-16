<template>
  <v-overlay :value="loading">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class Loading extends Vue {
  @Prop({ type: Boolean })
  loading: boolean | null | undefined;
}
</script>

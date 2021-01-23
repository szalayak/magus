<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="i in count" :key="i" cols="12" xs="12" sm="6" md="4" lg="3"
        ><v-skeleton-loader type="card"></v-skeleton-loader
      ></v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({ name: "skeleton-cards" })
export default class SkeletonCards extends Vue {
  @Prop({ type: Number, default: 4 })
  count!: number;
}
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"
        ><v-skeleton-loader type="card"></v-skeleton-loader
      ></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"
        ><v-skeleton-loader type="card"></v-skeleton-loader
      ></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"
        ><v-skeleton-loader type="card"></v-skeleton-loader
      ></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"
        ><v-skeleton-loader type="card"></v-skeleton-loader
      ></v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({ name: "skeleton-cards" })
export default class SkeletonCards extends Vue {}
</script>

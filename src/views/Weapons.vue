<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        Weapons
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "weapons",
  components: {},
})
export default class Weapons extends Vue {}
</script>

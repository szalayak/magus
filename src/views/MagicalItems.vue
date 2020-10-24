<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        Magical Items
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "magical-items",
  components: {},
})
export default class MagicalItems extends Vue {}
</script>

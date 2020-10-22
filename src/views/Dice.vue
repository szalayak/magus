<template>
  <v-container fluid>
    <v-row justify="center">
      <dice-table />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DiceTable from "../components/DiceTable.vue";

@Component({
  components: {
    "dice-table": DiceTable,
  },
})
export default class Dice extends Vue {}
</script>

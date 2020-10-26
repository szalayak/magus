<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <race-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RaceAdmin from "@/components/admin/RaceAdmin.vue";

@Component({
  name: "races",
  components: {
    "race-admin": RaceAdmin,
  },
})
export default class Races extends Vue {}
</script>

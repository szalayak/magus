<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <armour-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ArmourAdmin from "@/components/admin/ArmourAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "armours",
  components: {
    "armour-admin": ArmourAdmin,
  },
})
export default class Armours extends Vue {}
</script>

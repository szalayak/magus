<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <weapon-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import WeaponAdmin from "@/components/admin/WeaponAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "weapons",
  components: {
    "weapon-admin": WeaponAdmin,
  },
})
export default class Weapons extends Vue {}
</script>

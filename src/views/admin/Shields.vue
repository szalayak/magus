<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <shield-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ShieldAdmin from "@/components/admin/ShieldAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "shields",
  components: {
    "shield-admin": ShieldAdmin,
  },
})
export default class Shields extends Vue {}
</script>

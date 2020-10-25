<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <magical-item-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MagicalItemAdmin from "@/components/admin/MagicalItemAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "magical-items",
  components: {
    "magical-item-admin": MagicalItemAdmin,
  },
})
export default class MagicalItems extends Vue {}
</script>

<template>
  <v-list-group :value="open" @click="open = !open">
    <template v-slot:activator>
      <v-list-item-title>{{ $t("administration") }}</v-list-item-title>
    </template>
    <v-list-item to="/admin/seed-default-values">
      <v-list-item-icon>
        <v-icon>mdi-database-sync</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t("seed-default-values") }}
      </v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "dministration",
  data: () => ({
    open: false,
  }),
});
</script>

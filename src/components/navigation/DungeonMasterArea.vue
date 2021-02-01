<template>
  <v-list-group :value="open" @click="open = !open">
    <template v-slot:activator>
      <v-list-item-title>{{ $t("dungeon-master-area") }}</v-list-item-title>
    </template>
    <v-list-item
      v-for="dungeonMasterAreaRoute in dungeonMasterAreaRoutes"
      :key="dungeonMasterAreaRoute.name"
      :to="dungeonMasterAreaRoute.path"
    >
      <v-list-item-icon>
        <v-icon>{{ dungeonMasterAreaRoute.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t(dungeonMasterAreaRoute.title) }}
      </v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
import { dungeonMasterAreaRoutes } from "@/router/dungeonMasterArea";
export default Vue.extend({
  name: "dungeon-master-area",
  data: () => ({
    dungeonMasterAreaRoutes,
    open: true,
  }),
});
</script>

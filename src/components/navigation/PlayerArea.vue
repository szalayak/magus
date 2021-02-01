<template>
  <v-list-group :value="open" @click="open = !open">
    <template v-slot:activator>
      <v-list-item-title>{{ $t("player-area") }}</v-list-item-title>
    </template>
    <v-list-item
      v-for="playerAreaRoute in playerAreaRoutes"
      :key="playerAreaRoute.name"
      :to="playerAreaRoute.path"
    >
      <v-list-item-icon>
        <v-icon>{{ playerAreaRoute.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t(playerAreaRoute.title) }}
      </v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
import { playerAreaRoutes } from "@/router/playerArea";
export default Vue.extend({
  name: "player-area",
  data: () => ({
    playerAreaRoutes,
    open: true,
  }),
});
</script>

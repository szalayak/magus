<template>
  <v-navigation-drawer v-model="navDrawerOpen" absolute temporary app>
    <v-list nav dense>
      <v-subheader>{{ $t("general") }}</v-subheader>
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ $t("home") }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item to="/about">
        <v-list-item-icon>
          <v-icon>mdi-information</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ $t("about") }}
        </v-list-item-title>
      </v-list-item>
      <v-subheader>{{ $t("player-area") }}</v-subheader>
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
      <v-subheader>{{ $t("dungeon-master-area") }}</v-subheader>
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
      <template v-if="app.isAdmin">
        <v-subheader>{{ $t("administration") }}</v-subheader>
        <v-list-item
          v-for="adminRoute in adminRoutes"
          :key="adminRoute.name"
          :to="adminRoute.path"
        >
          <v-list-item-icon>
            <v-icon>{{ adminRoute.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t(adminRoute.title) }}
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import { adminRoutes } from "@/router/admin";
import { playerAreaRoutes } from "@/router/playerArea";
import { dungeonMasterAreaRoutes } from "@/router/dungeonMasterArea";
export default Vue.extend({
  data: () => ({
    adminRoutes,
    playerAreaRoutes,
    dungeonMasterAreaRoutes,
  }),
  computed: {
    ...mapState(["app"]),
    navDrawerOpen: {
      get() {
        return this.app.navDrawerOpen;
      },
      set(value) {
        this.toggleNavDrawer(value);
      },
    },
  },
  methods: mapMutations(["toggleNavDrawer"]),
});
</script>

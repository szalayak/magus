<template>
  <v-navigation-drawer
    v-if="isLoggedIn"
    :value="isNavDrawerOpen"
    @input="setNavDrawerOpen($event)"
    clipped
    floating
    app
  >
    <v-list nav dense>
      <slot name="navbar-items"></slot>
      <v-list-group :value="true">
        <template v-slot:activator>
          <v-list-item-title>{{ $t("general") }}</v-list-item-title>
        </template>
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
      </v-list-group>
      <v-list-group :value="true">
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
      <v-list-group :value="true">
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
      <v-list-group v-if="encyclopedia">
        <template v-slot:activator>
          <v-list-item-title class="pl-0">{{
            $t("encyclopedia")
          }}</v-list-item-title>
        </template>
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
      </v-list-group>
      <v-list-group v-if="isCurrentUserAdmin && administration">
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
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { adminRoutes } from "@/router/admin";
import { playerAreaRoutes } from "@/router/playerArea";
import { dungeonMasterAreaRoutes } from "@/router/dungeonMasterArea";
export default Vue.extend({
  name: "navigation-drawer",
  data: () => ({
    adminRoutes,
    playerAreaRoutes,
    dungeonMasterAreaRoutes,
  }),
  props: {
    encyclopedia: Boolean,
    administration: Boolean,
  },
  computed: {
    ...mapGetters([
      "isCurrentUserAdmin",
      "isCurrentUserEditor",
      "isLoggedIn",
      "isNavDrawerOpen",
    ]),
  },
  methods: {
    ...mapMutations(["setNavDrawerOpen"]),
  },
  created() {
    this.setNavDrawerOpen(!this.$vuetify.breakpoint.xs);
  },
});
</script>

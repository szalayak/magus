<template>
  <v-navigation-drawer
    v-if="isLoggedIn"
    :value="isNavDrawerOpen"
    @input="setNavDrawerOpen($event)"
    mobile-breakpoint="1000"
    clipped
    floating
    app
    :color="color"
  >
    <v-list nav dense>
      <general />
      <slot name="navbar-items"></slot>
      <player-area />
      <dungeon-master-area />
      <encyclopedia v-if="encyclopedia" />
      <administration v-if="isCurrentUserAdmin && administration" />
      <profile />
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { adminRoutes } from "@/router/admin";
import { playerAreaRoutes } from "@/router/playerArea";
import { dungeonMasterAreaRoutes } from "@/router/dungeonMasterArea";
import Administration from "./Administration.vue";
import Encyclopedia from "./Encyclopedia.vue";
import DungeonMasterArea from "./DungeonMasterArea.vue";
import PlayerArea from "./PlayerArea.vue";
import General from "./General.vue";
import Profile from "./Profile.vue";
export default Vue.extend({
  name: "navigation-drawer",
  components: {
    administration: Administration,
    encyclopedia: Encyclopedia,
    "dungeon-master-area": DungeonMasterArea,
    "player-area": PlayerArea,
    General,
    Profile,
  },
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
    color() {
      return this.$vuetify.theme.dark ? "#121212" : "white";
    },
  },
  methods: {
    ...mapMutations(["setNavDrawerOpen"]),
  },
  created() {
    this.setNavDrawerOpen(this.$vuetify.breakpoint.mdAndUp);
  },
});
</script>

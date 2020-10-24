<template>
  <v-navigation-drawer v-model="navDrawerOpen" absolute temporary>
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
      <template v-if="app.isAdmin">
        <v-subheader>{{ $t("administration") }}</v-subheader>
        <v-list-item to="/value-ranges">
          <v-list-item-icon>
            <v-icon>mdi-code-braces</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("value-ranges") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/races">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("races") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/classes">
          <v-list-item-icon>
            <v-icon>mdi-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("classes") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/psi-schools">
          <v-list-item-icon>
            <v-icon>mdi-head-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("psi-schools") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/armours">
          <v-list-item-icon>
            <v-icon>mdi-shield-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("armours") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/shields">
          <v-list-item-icon>
            <v-icon>mdi-shield</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("shields") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/weapons">
          <v-list-item-icon>
            <v-icon>mdi-sword-cross</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("weapons") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/skills">
          <v-list-item-icon>
            <v-icon>mdi-certificate</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("skills") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/magical-items">
          <v-list-item-icon>
            <v-icon>mdi-auto-fix</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("magical-items") }}
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
export default Vue.extend({
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

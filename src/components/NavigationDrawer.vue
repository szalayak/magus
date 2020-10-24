<template>
  <v-navigation-drawer v-model="navDrawerOpen" absolute temporary>
    <v-list nav dense>
      <v-subheader>General</v-subheader>
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
      <v-subheader>Admin</v-subheader>
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

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        v-if="app.isLoggedIn"
        @click="toggleNavDrawer(true)"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>M.A.G.U.S</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu offset-y v-if="app.isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            {{ app.user.attributes.name }}
            <v-icon class="ml-2">mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logoutUser()">
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <navigation-drawer />

    <v-main>
      <v-container v-if="!app.isLoggedIn" fluid fill-height>
        <v-row align="center" justify="center">
          <amplify-authenticator
            ><amplify-sign-in slot="sign-in" hide-sign-up
          /></amplify-authenticator>
        </v-row>
      </v-container>
      <router-view v-if="app.isLoggedIn" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  name: "App",

  components: {
    "navigation-drawer": NavigationDrawer,
  },

  computed: mapState(["app"]),
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.setAuthState(authState);
      this.loginUser(authData);
    });
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  methods: {
    ...mapMutations([
      "toggleNavDrawer",
      "setAuthState",
      "loginUser",
      "logoutUser",
    ]),
  },
});
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>M.A.G.U.S</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu v-if="user">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            {{ user.attributes.name }}
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="signOut">
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container v-if="authState !== 'signedin'" fluid fill-height>
        <v-row align="center" justify="center">
          <amplify-authenticator
            ><amplify-sign-in slot="sign-in" hide-sign-up
          /></amplify-authenticator>
        </v-row> </v-container
    ></v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { onAuthUIStateChange, AuthState } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";

type AppData = {
  user: object | undefined;
  authState: AuthState | undefined;
};

export default Vue.extend({
  name: "App",

  components: {},

  data() {
    const appData: AppData = {
      user: undefined,
      authState: undefined
    };
    return appData;
  },
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      console.log(authData); // TODO remove
    });
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  methods: {
    signOut() {
      Auth.signOut();
    }
  }
});
</script>

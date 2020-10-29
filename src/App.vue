<template>
  <v-app>
    <v-app-bar clipped-left app color="primary" dark>
      <v-app-bar-nav-icon
        v-if="app.isLoggedIn"
        @click="navDrawerOpen = !navDrawerOpen"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>M.A.G.U.S</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu offset-y v-if="app.isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on"
            ><div class="d-none d-sm-flex">{{ $t("throw-dice") }}</div>
            <v-icon class="ml-2">mdi-dice-5</v-icon></v-btn
          >
        </template>
        <v-list>
          <v-list-item
            v-for="diceObject in dice"
            :key="diceObject.id"
            @click="doThrow(diceObject)"
          >
            <v-list-item-title>{{ diceObject.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y v-if="app.isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <div class="d-none d-sm-flex">{{ app.user.attributes.name }}</div>
            <v-icon class="ml-2">mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item class="d-flex d-sm-none">
            <v-list-item-title>{{
              app.user.attributes.name
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-title>{{ $t("sign-out") }}</v-list-item-title>
          </v-list-item>
          <user-attributes />
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="navDrawerOpen" clipped app>
      <navigation-drawer />
    </v-navigation-drawer>
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
    <v-snackbar v-model="throwResultNotification" timeout="-1">
      {{ $t("result") }}: {{ throwResult }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="throwResultNotification = false">
          {{ $t("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import { DiceObject, getDice, throwDice } from "./utils/dice";
import { Auth } from "aws-amplify";
import UserAttributes from "./views/UserAttributes.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      dice: getDice(this.$i18n),
      throwResult: 0,
      throwResultNotification: false,
      navDrawerOpen: !this.$vuetify.breakpoint.mdAndDown,
    };
  },
  components: {
    "navigation-drawer": NavigationDrawer,
    "user-attributes": UserAttributes,
  },

  computed: mapState(["app"]),
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.setAuthState(authState);
      this.setUser(authData);
      if (this.app.isLoggedIn) {
        Auth.userAttributes(authData).then(attributes => {
          const locale = attributes
            .find(attribute => attribute.getName() === "locale")
            ?.getValue();
          if (locale) {
            this.$i18n.locale = locale;
            this.$root.$i18n.locale = locale;
            this.$vuetify.lang.current = locale;
          }
        });
      }
    });
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  methods: {
    ...mapMutations([
      "toggleNavDrawer",
      "setAuthState",
      "setUser",
      "logoutUser",
    ]),
    ...mapActions(["logout"]),
    doThrow(diceObject: DiceObject) {
      this.throwResult = throwDice(diceObject.id);
      this.throwResultNotification = true;
    },
  },
});
</script>

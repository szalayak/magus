<template>
  <v-app>
    <app-bar />
    <v-navigation-drawer
      v-if="isLoggedIn"
      :value="isNavDrawerOpen"
      @input="setNavDrawerOpen($event)"
      clipped
      app
    >
      <navigation-drawer />
    </v-navigation-drawer>
    <v-main>
      <v-container v-if="!isLoggedIn" fluid fill-height>
        <v-row align="center" justify="center">
          <amplify-authenticator
            ><amplify-sign-in slot="sign-in" hide-sign-up
          /></amplify-authenticator>
        </v-row>
      </v-container>
      <router-view v-if="isLoggedIn && userLoaded" />
      <v-snackbar
        :value="throwResultNotification"
        timeout="-1"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        {{ $t("result") }}: {{ throwResult }}
        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="
              $store.commit('setThrowResult', {
                throwResultNotification: false,
              })
            "
          >
            {{ $t("close") }}
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import { Auth } from "aws-amplify";
import AppBar from "./components/AppBar.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      userLoaded: false,
      navDrawerOpen: !this.$vuetify.breakpoint.lgAndDown,
    };
  },
  components: {
    "navigation-drawer": NavigationDrawer,
    "app-bar": AppBar,
  },

  computed: {
    ...mapState(["app"]),
    ...mapGetters([
      "isLoggedIn",
      "isNavDrawerOpen",
      "throwResultNotification",
      "throwResult",
    ]),
  },
  created() {
    this.setNavDrawerOpen(!this.$vuetify.breakpoint.lgAndDown);
    onAuthUIStateChange((authState, authData) => {
      this.setAuthState(authState);
      this.setUser(authData);
      if (this.isLoggedIn) {
        Auth.userAttributes(authData).then(attributes => {
          const locale = attributes
            .find(attribute => attribute.getName() === "locale")
            ?.getValue();
          if (locale) {
            this.$i18n.locale = locale;
            this.$root.$i18n.locale = locale;
            this.$vuetify.lang.current = locale;
          }
          this.userLoaded = true;
        });
      }
    });
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  methods: {
    ...mapMutations([
      "setAuthState",
      "setUser",
      "logoutUser",
      "setNavDrawerOpen",
    ]),
  },
});
</script>

<template>
  <v-app>
    <app-bar />
    <navigation-drawer />
    <v-main>
      <sign-in v-if="!isLoggedIn" fluid fill-height />
      <router-view v-if="isLoggedIn && userLoaded" />
    </v-main>
    <overlay-information
      :active="throwResultNotification"
      :text="String(throwResult)"
      @close="
        $store.commit('setThrowResult', {
          throwResultNotification: false,
        })
      "
    />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { mapGetters, mapMutations, mapState } from "vuex";
import { Auth } from "aws-amplify";
import SignIn from "./components/SignIn.vue";
import OverlayInformation from "./components/OverlayInformation.vue";
import AppBar from "./components/AppBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      userLoaded: false,
      navDrawerOpen: !this.$vuetify.breakpoint.lgAndDown,
    };
  },
  components: {
    "sign-in": SignIn,
    "overlay-information": OverlayInformation,
    "app-bar": AppBar,
    "navigation-drawer": NavigationDrawer,
  },
  computed: {
    ...mapState(["app"]),
    ...mapGetters(["isLoggedIn", "throwResultNotification", "throwResult"]),
  },
  created() {
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
    ...mapMutations(["setAuthState", "setUser"]),
  },
});
</script>

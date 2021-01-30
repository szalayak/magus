<template>
  <v-app>
    <sign-in v-if="!isLoggedIn" fluid fill-height />
    <router-view v-if="isLoggedIn && userLoaded" />
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

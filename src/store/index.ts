import Vue from "vue";
import Vuex from "vuex";
import { AuthState } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      navDrawerOpen: false,
      user: undefined as object | undefined,
      authState: undefined as AuthState | undefined,
      isLoggedIn: false
    }
  },
  mutations: {
    toggleNavDrawer(state, value: boolean) {
      state.app.navDrawerOpen = value;
    },
    setAuthState(state, authState: AuthState) {
      state.app.authState = authState;
      state.app.isLoggedIn = authState === "signedin";
    },
    loginUser(state, user: object) {
      state.app.user = user;
    },
    logoutUser(state) {
      state.app.user = undefined;
      Auth.signOut();
    }
  },
  actions: {},
  modules: {}
});

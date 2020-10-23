import Vue from "vue";
import Vuex from "vuex";
import { AuthState } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";
import race, { RaceState } from "./modules/race";
import { Locale } from "@/API";

Vue.use(Vuex);

export interface AppState {
  navDrawerOpen: boolean;
  user?: { [key: string]: unknown };
  authState?: AuthState;
  isLoggedIn: boolean;
}

export interface RootState {
  app: AppState;
  race?: RaceState;
}

export interface Description {
  locale: Locale;
  title: string;
  description?: string;
}

export interface Describable {
  descriptions: Description[];
  description?: Description;
}

export default new Vuex.Store<RootState>({
  state: {
    app: {
      navDrawerOpen: false,
      isLoggedIn: false,
    } as AppState,
  } as RootState,
  mutations: {
    toggleNavDrawer(state: RootState, value: boolean) {
      state.app.navDrawerOpen = value;
    },
    setAuthState(state, authState: AuthState) {
      state.app.authState = authState;
      state.app.isLoggedIn = authState === "signedin";
    },
    loginUser(state, user: { [key: string]: unknown }) {
      state.app.user = user;
    },
    logoutUser(state: RootState) {
      state.app.user = undefined;
      Auth.signOut();
    },
  },
  actions: {},
  modules: {
    race,
  },
});

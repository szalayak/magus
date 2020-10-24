import Vue from "vue";
import Vuex from "vuex";
import { AuthState } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";
import race, { RaceState } from "./modules/race";
import { Locale } from "@/API";

Vue.use(Vuex);

export interface User {
  signInUserSession?: {
    accessToken?: {
      payload?: { [key: string]: unknown };
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface AppState {
  navDrawerOpen: boolean;
  user?: User;
  authState?: AuthState;
  isLoggedIn: boolean;
  isAdmin?: boolean;
  isEditor?: boolean;
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
    setUser(state, user?: User) {
      state.app.user = user;
      const payload = user?.signInUserSession?.accessToken?.payload;
      const groups: string[] = payload
        ? (payload["cognito:groups"] as string[])
        : [];
      state.app.isAdmin = !!groups.find(group => group === "Admin");
      state.app.isEditor = !!groups.find(group => group === "Editor");
    },
  },
  actions: {
    async logout(context) {
      await Auth.signOut();
      context.commit("setUser");
    },
  },
  modules: {
    race,
  },
});

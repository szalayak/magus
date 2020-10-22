import Vue from "vue";
import Vuex from "vuex";
import { AuthState } from "@aws-amplify/ui-components";
import { API, Auth } from "aws-amplify";
import { DiceState } from "./modules/dice";
import { ListDiesQuery } from "@/API";
import { listDies } from "@/graphql/queries";

Vue.use(Vuex);

export interface AppState {
  navDrawerOpen: boolean;
  user?: { [key: string]: unknown };
  authState?: AuthState;
  isLoggedIn: boolean;
}

export interface RootState {
  app: AppState;
  dice: DiceState;
}

export default new Vuex.Store<RootState>({
  state: {
    app: {
      navDrawerOpen: false,
      isLoggedIn: false,
    } as AppState,
    dice: {},
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
  actions: {
    async loadDice() {
      const { data: result } = (await API.graphql({
        query: listDies,
      })) as { data: ListDiesQuery };
      this.state.dice = { result };
    },
  },
  modules: {},
});

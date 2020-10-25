import Vue from "vue";
import Vuex from "vuex";
import { AuthState } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";
import armour, { ArmourState } from "./modules/armour";
import classModule, { ClassState } from "./modules/class";
import magicalItem, { MagicalItemState } from "./modules/magicalItem";
import psiSchool, { PsiSchoolState } from "./modules/psiSchool";
import race, { RaceState } from "./modules/race";
import shield, { ShieldState } from "./modules/shield";
import skill, { SkillState } from "./modules/skill";
import valueRange, { ValueRangeState } from "./modules/valueRange";
import weapon, { WeaponState } from "./modules/weapon";

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
  armour?: ArmourState;
  class?: ClassState;
  magicalItem?: MagicalItemState;
  psiSchool: PsiSchoolState;
  race?: RaceState;
  shield?: ShieldState;
  skill?: SkillState;
  valueRange?: ValueRangeState;
  weapon?: WeaponState;
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
    armour,
    class: classModule,
    magicalItem,
    psiSchool,
    race,
    shield,
    skill,
    valueRange,
    weapon,
  },
});

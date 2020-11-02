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
import character, { CharacterState } from "./modules/character";

Vue.use(Vuex);

export interface User {
  username?: string;
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
  user?: User;
  authState?: AuthState;
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
  character?: CharacterState;
}

const isUserInGroup = (user?: User, group?: string) => {
  const payload = user?.signInUserSession?.accessToken?.payload;
  const groups: string[] = payload
    ? (payload["cognito:groups"] as string[])
    : [];
  return groups ? !!groups.find(g => g === group) : false;
};

export default new Vuex.Store<RootState>({
  state: {
    app: {
      user: {},
      authState: AuthState.Loading,
    } as AppState,
  } as RootState,
  getters: {
    currentUser(state) {
      return state.app?.user?.username;
    },
    isCurrentUserAdmin(state) {
      return isUserInGroup(state.app?.user, "Admin");
    },
    isCurrentUserEditor(state) {
      return isUserInGroup(state.app?.user, "Editor");
    },
    isLoggedIn(state) {
      return state.app.authState === "signedin";
    },
  },
  mutations: {
    setAuthState(state, authState: AuthState) {
      state.app.authState = authState;
    },
    setUser(state, user?: User) {
      state.app.user = user;
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
    character,
  },
});

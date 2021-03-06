import Vue from "vue";
import Vuex from "vuex";
import { AuthState } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";
import {
  valueRangeModule,
  ValueRangeState,
  classModule,
  ClassState,
  armourModule,
  ArmourState,
  MagicalItemState,
  magicalItemModule,
  psiSchoolModule,
  raceModule,
  shieldModule,
  skillModule,
  weaponModule,
  PsiSchoolState,
  RaceState,
  ShieldState,
  SkillState,
  WeaponState,
  characterModule,
  CharacterState,
} from "./modules";
import { listUsers } from "@/utils/users";
import { User } from "./types";

Vue.use(Vuex);

export interface AppState {
  user?: User;
  authState?: AuthState;
  users: User[];
  navDrawerOpen: boolean;
  title: string;
  throwResult: number | null;
  throwResultNotification: boolean;
}

export interface RootState {
  app: AppState;
  armour?: ArmourState;
  class?: ClassState;
  magicalItem?: MagicalItemState;
  psiSchool?: PsiSchoolState;
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

const store = new Vuex.Store<RootState>({
  state: (): RootState => ({
    app: {
      user: { username: undefined },
      authState: AuthState.Loading,
      users: [],
      navDrawerOpen: false,
      title: "M.A.G.U.S",
      throwResult: null,
      throwResultNotification: false,
    } as AppState,
  }),
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
    getUsers(state) {
      return state.app.users || [];
    },
    isNavDrawerOpen(state) {
      return state.app.navDrawerOpen;
    },
    title(state) {
      return state.app.title;
    },
    throwResult(state) {
      return state.app.throwResult;
    },
    throwResultNotification(state) {
      return state.app.throwResultNotification;
    },
  },
  mutations: {
    setAuthState(state, authState: AuthState) {
      state.app.authState = authState;
    },
    setUser(state, user?: User) {
      state.app.user = user;
    },
    setNavDrawerOpen(state, open?: boolean) {
      state.app.navDrawerOpen = !!open;
    },
    toggleNavDrawer(state) {
      state.app.navDrawerOpen = !state.app.navDrawerOpen;
    },
    setAppTitle(state, title: string) {
      state.app.title = title;
      window.document.title = title;
    },
    setThrowResult(
      state,
      result: { throwResultNotification: boolean; throwResult?: number }
    ) {
      state.app.throwResultNotification = result.throwResultNotification;
      state.app.throwResult = result.throwResult || null;
    },
  },
  actions: {
    async logout(context) {
      await Auth.signOut();
      context.commit("setUser");
    },
    async loadUsers({ state }) {
      if (state.app.users?.length < 1) {
        const results = await listUsers();
        state.app.users = results;
      }
    },
  },
  modules: {
    armour: armourModule,
    class: classModule,
    magicalItem: magicalItemModule,
    psiSchool: psiSchoolModule,
    race: raceModule,
    shield: shieldModule,
    skill: skillModule,
    valueRange: valueRangeModule,
    weapon: weaponModule,
    character: characterModule,
  },
});

export * from "./types";
export * from "./modules";
export * from "./utils";
export default store;

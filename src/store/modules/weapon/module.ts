import { RootState } from "@/store";
import {
  defaultActions,
  defaultGetters,
  defaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { WeaponState } from "./types";

export const weaponModule: Module<WeaponState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: defaultGetters,
  mutations: defaultMutations,
  actions: defaultActions(proxy.defaultActions),
};

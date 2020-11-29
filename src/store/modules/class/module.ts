import { RootState } from "@/store";
import {
  defaultActions,
  defaultGetters,
  defaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Class, ClassState } from "./types";

export const classModule: Module<ClassState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: {
    ...defaultGetters,
    getMagicUserClasses({ items }): Class[] {
      return items.filter(c => c?.magicUser);
    },
  },
  mutations: defaultMutations,
  actions: defaultActions(proxy.defaultActions),
};

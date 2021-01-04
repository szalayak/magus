import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultMutations,
  createGetters,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Class, ClassState } from "./types";

export const classModule: Module<ClassState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createGetters({
    additionalGetters: {
      getMagicUserClasses({ items }): Class[] {
        return items.filter((c: Class) => c?.magicUser);
      },
    },
  }),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

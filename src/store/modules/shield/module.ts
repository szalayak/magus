import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { ShieldState } from "./types";

export const shieldModule: Module<ShieldState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

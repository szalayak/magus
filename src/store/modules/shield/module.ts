import { RootState } from "@/store";
import {
  defaultActions,
  defaultGetters,
  defaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { ShieldState } from "./types";

export const shieldModule: Module<ShieldState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: defaultGetters,
  mutations: defaultMutations,
  actions: defaultActions(proxy.defaultActions),
};

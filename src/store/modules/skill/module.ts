import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { SkillState } from "./types";

export const skillModule: Module<SkillState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

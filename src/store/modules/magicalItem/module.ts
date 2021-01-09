import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { MagicalItemState } from "./types";

export const magicalItemModule: Module<MagicalItemState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

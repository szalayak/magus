import { RootState } from "@/store";
import {
  defaultActions,
  defaultGetters,
  defaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { MagicalItemState } from "./types";

export const magicalItemModule: Module<MagicalItemState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: defaultGetters,
  mutations: defaultMutations,
  actions: defaultActions(proxy.defaultActions),
};

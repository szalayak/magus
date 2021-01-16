import i18n from "@/i18n";
import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { localise } from "@/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Shield, ShieldState } from "./types";

export const shieldModule: Module<ShieldState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(
    (items: Shield[]) => localise(items, i18n.locale) as Shield[]
  ),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

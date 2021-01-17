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
import { Armour, ArmourState } from "./types";

export const armourModule: Module<ArmourState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(
    (items: Armour[]) => localise(items, i18n.locale) as Armour[]
  ),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

import { RootState } from "@/store";
import {
  defaultActions,
  defaultGetters,
  defaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Race, RaceState } from "./types";

export const raceModule: Module<RaceState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: {
    ...defaultGetters,
    getPlayableRaces({ items }): Race[] {
      return items.filter(({ playable }) => playable);
    },
  },
  mutations: defaultMutations,
  actions: defaultActions(proxy.defaultActions),
};

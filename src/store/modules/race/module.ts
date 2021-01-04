import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultMutations,
  createGetters,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Race, RaceState } from "./types";

export const raceModule: Module<RaceState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createGetters({
    additionalGetters: {
      getPlayableRaces({ items }): Race[] {
        return items.filter(({ playable }: Race) => playable);
      },
    },
  }),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

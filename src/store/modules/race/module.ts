import i18n from "@/i18n";
import { RootState } from "@/store";
import { MappingFunction } from "@/store/types";
import {
  createDefaultActions,
  createDefaultMutations,
  createGetters,
} from "@/store/utils";
import { localise } from "@/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Race, RaceState } from "./types";

const mappingFunction: MappingFunction = (items: Race[]) =>
  localise(items, i18n.locale) as Race[];

export const raceModule: Module<RaceState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createGetters({
    additionalGetters: {
      getPlayableRaces({ items }): Race[] {
        return mappingFunction(items.filter(({ playable }: Race) => playable));
      },
    },
    mappingFunction,
  }),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

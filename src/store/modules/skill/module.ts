import i18n from "@/i18n";
import { MappingFunction, RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { localiseItem } from "@/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Skill, SkillState } from "./types";

const mappingFunction: MappingFunction = (items: Skill[]) => {
  return items.map(
    item =>
      localiseItem(
        {
          ...item,
          skillGroup: localiseItem(item.skillGroup || {}, i18n.locale),
        } as Skill,
        i18n.locale
      ) as Skill
  );
};

export const skillModule: Module<SkillState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(mappingFunction),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

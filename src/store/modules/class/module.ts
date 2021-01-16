import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultMutations,
  createGetters,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { Class, ClassState } from "./types";
import i18n from "@/i18n";
import { localiseItem } from "@/utils";
import { MappingFunction } from "@/store/types";

const mappingFunction: MappingFunction = (items: Class[]) => {
  return items.map(
    item =>
      localiseItem(
        {
          ...item,
          mainClass: localiseItem(item.mainClass || {}, i18n.locale),
        } as Class,
        i18n.locale
      ) as Class
  );
};

export const classModule: Module<ClassState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createGetters({
    additionalGetters: {
      getMagicUserClasses({ items }): Class[] {
        return mappingFunction(items.filter((c: Class) => c?.magicUser));
      },
    },
    mappingFunction,
  }),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

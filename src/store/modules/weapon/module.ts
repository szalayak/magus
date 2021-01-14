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
import { Weapon, WeaponState } from "./types";

const mappingFunction: MappingFunction = (items: Weapon[]) => {
  return items.map(
    item =>
      localiseItem(
        {
          ...item,
          weaponType: localiseItem(item.weaponType || {}, i18n.locale),
        } as Weapon,
        i18n.locale
      ) as Weapon
  );
};

export const weaponModule: Module<WeaponState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(mappingFunction),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

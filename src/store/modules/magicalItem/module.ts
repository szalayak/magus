import i18n from "@/i18n";
import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { localiseItem } from "@/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { MagicalItem, MagicalItemState } from "./types";

export const magicalItemModule: Module<MagicalItemState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters((items: MagicalItem[]) => {
    return items.map(
      item =>
        localiseItem(
          {
            ...item,
            class: localiseItem(item.class || {}, i18n.locale),
          } as MagicalItem,
          i18n.locale
        ) as MagicalItem
    );
  }),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

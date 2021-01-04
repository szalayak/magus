import { RootState } from "@/store";
import {
  createActions,
  createDefaultMutations,
  createGetters,
  DefaultMutationKeys,
} from "@/store/utils";
import { Module } from "vuex";
import proxy, { ValueRangeType } from "./proxies";
import { ValueRange, ValueRangeState } from "./types";

export const valueRangeModule: Module<ValueRangeState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createGetters({
    additionalGetters: {
      getMainClasses({ items }): ValueRange[] {
        return items.filter((item: ValueRange) => {
          return item?.type === ValueRangeType.MAIN_CLASS;
        });
      },
      getPersonalities({ items }): ValueRange[] {
        return items.filter((item: ValueRange) => {
          return item?.type === ValueRangeType.PERSONALITY;
        });
      },
      getSkillGroups({ items }): ValueRange[] {
        return items.filter((item: ValueRange) => {
          return item.type === ValueRangeType.SKILL_GROUP;
        });
      },
      getWeaponTypes({ items }): ValueRange[] {
        return items.filter((item: ValueRange) => {
          return item.type === ValueRangeType.WEAPON_TYPE;
        });
      },
    },
  }),
  mutations: createDefaultMutations(),
  actions: createActions({
    defaultActions: proxy.defaultActions,
    additionalActions: {
      async loadByType(context, type: ValueRangeType) {
        if (
          context.getters.list.filter((v: ValueRange) => v.type === type)
            .length < 1
        ) {
          const result = await proxy.loadByTypeFunction(type);
          context.commit(DefaultMutationKeys.MERGE, result);
        }
      },
    },
  }),
};

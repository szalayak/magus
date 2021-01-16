import i18n from "@/i18n";
import { RootState } from "@/store";
import { MappingFunction } from "@/store/types";
import {
  createActions,
  createDefaultMutations,
  createGetters,
  DefaultMutationKeys,
} from "@/store/utils";
import { localise } from "@/utils";
import { Module } from "vuex";
import proxy, { ValueRangeType } from "./proxies";
import { ValueRange, ValueRangeState } from "./types";

const mappingFunction: MappingFunction = (items: ValueRange[]) =>
  localise(items, i18n.locale) as ValueRange[];

export const valueRangeModule: Module<ValueRangeState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createGetters({
    additionalGetters: {
      getMainClasses({ items }): ValueRange[] {
        return mappingFunction(
          items.filter((item: ValueRange) => {
            return item?.type === ValueRangeType.MAIN_CLASS;
          })
        );
      },
      getPersonalities({ items }): ValueRange[] {
        return mappingFunction(
          items.filter((item: ValueRange) => {
            return item?.type === ValueRangeType.PERSONALITY;
          })
        );
      },
      getSkillGroups({ items }): ValueRange[] {
        return mappingFunction(
          items.filter((item: ValueRange) => {
            return item.type === ValueRangeType.SKILL_GROUP;
          })
        );
      },
      getWeaponTypes({ items }): ValueRange[] {
        return mappingFunction(
          items.filter((item: ValueRange) => {
            return item.type === ValueRangeType.WEAPON_TYPE;
          })
        );
      },
    },
    mappingFunction,
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

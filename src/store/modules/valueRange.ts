import {
  CreateValueRangeValueMutation,
  ListValueRangeValuesByTypeQuery,
  ListValueRangeValuesQuery,
  UpdateValueRangeValueMutation,
  ValueRangeType,
} from "@/API";
import {
  createValueRangeValue,
  deleteValueRangeValue,
  updateValueRangeValue,
} from "@/graphql/mutations";
import {
  listValueRangeValues,
  listValueRangeValuesByType,
} from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { Describable } from "../types";

export interface ValueRange extends Describable {
  id: string;
  type?: ValueRangeType;
  typeTitle?: string;
}

export interface ValueRangeState {
  result?: ListValueRangeValuesQuery;
}

const race: Module<ValueRangeState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as ValueRangeState),
  getters: {
    getMainClasses(state) {
      return state.result?.listValueRangeValues?.items?.filter(item => {
        return item?.type === ValueRangeType.MAIN_CLASS;
      });
    },
    getPersonalities(state) {
      return state.result?.listValueRangeValues?.items?.filter(item => {
        return item?.type === ValueRangeType.PERSONALITY;
      });
    },
    getSkillGroups(state) {
      return state.result?.listValueRangeValues?.items?.filter(item => {
        return item?.type === ValueRangeType.SKILL_GROUP;
      });
    },
    getWeaponTypes(state) {
      return state.result?.listValueRangeValues?.items?.filter(item => {
        return item?.type === ValueRangeType.WEAPON_TYPE;
      });
    },
  },
  mutations: {
    set(state, result: ListValueRangeValuesQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listValueRangeValues?.items?.push(newItem);
    },
    merge(state, result: ListValueRangeValuesByTypeQuery) {
      if (state.result?.listValueRangeValues?.items) {
        const newItems = result.listValueRangeValuesByType?.items;
        if (newItems) {
          state.result?.listValueRangeValues?.items?.concat(newItems);
        }
      } else {
        const typeRes: ListValueRangeValuesQuery = {
          listValueRangeValues: result.listValueRangeValuesByType,
        };
        state.result = typeRes;
      }
    },
    change(state, updateItem) {
      const oldState = state.result?.listValueRangeValues?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listValueRangeValues?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listValueRangeValues?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listValueRangeValues?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({
        query: listValueRangeValues,
      })) as {
        data: ListValueRangeValuesQuery;
      };
      context.commit("set", result);
    },
    async loadByType(context, type: ValueRangeType) {
      const { data: result } = (await API.graphql({
        query: listValueRangeValuesByType,
        variables: { type },
      })) as {
        data: ListValueRangeValuesByTypeQuery;
      };
      context.commit("merge", result);
    },
    async create(context, item: ValueRange) {
      const {
        data: { createValueRangeValue: newItem },
      } = (await API.graphql({
        query: createValueRangeValue,
        variables: {
          input: {
            id: item.id.length > 0 ? item.id : null,
            type: item.type,
            descriptions: item.descriptions,
          },
        },
      })) as { data: CreateValueRangeValueMutation };
      context.commit("add", newItem);
    },
    async update(context, item: ValueRange) {
      const {
        data: { updateValueRangeValue: updatedItem },
      } = (await API.graphql({
        query: updateValueRangeValue,
        variables: {
          input: {
            id: item.id,
            type: item.type,
            descriptions: item.descriptions,
          },
        },
      })) as { data: UpdateValueRangeValueMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({
        query: deleteValueRangeValue,
        variables: { input: { id } },
      });
      context.commit("remove", id);
    },
  },
};

export default race;

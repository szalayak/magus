import {
  CreateMagicalItemMutation,
  ListMagicalItemsQuery,
  UpdateMagicalItemMutation,
} from "@/API";
import {
  createMagicalItem,
  deleteMagicalItem,
  updateMagicalItem,
} from "@/graphql/mutations";
import { listMagicalItems } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { Class } from "./class";
import { Editable } from "../types";

export interface MagicalItem extends Editable {
  class?: Class;
  manaCost?: number;
  duration?: string;
  price?: number;
}

export interface MagicalItemState {
  result?: ListMagicalItemsQuery;
}

const magicalItem: Module<MagicalItemState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as MagicalItemState),
  getters: {
    list(state): MagicalItem[] {
      return state.result?.listMagicalItems?.items as MagicalItem[];
    },
  },
  mutations: {
    set(state, result: ListMagicalItemsQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listMagicalItems?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listMagicalItems?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listMagicalItems?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listMagicalItems?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listMagicalItems?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({
        query: listMagicalItems,
      })) as {
        data: ListMagicalItemsQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: MagicalItem) {
      const {
        data: { createMagicalItem: newItem },
      } = (await API.graphql({
        query: createMagicalItem,
        variables: {
          input: {
            id: item.id && item.id.length > 0 ? item.id : null,
            descriptions: item.descriptions,
            magicalItemClassId: item.class?.id,
            price: item.price,
            duration: item.duration,
            manaCost: item.manaCost,
          },
        },
      })) as { data: CreateMagicalItemMutation };
      context.commit("add", newItem);
    },
    async update(context, item: MagicalItem) {
      const {
        data: { updateMagicalItem: updatedItem },
      } = (await API.graphql({
        query: updateMagicalItem,
        variables: {
          input: {
            id: item.id,
            descriptions: item.descriptions,
            magicalItemClassId: item.class?.id,
            price: item.price,
            duration: item.duration,
            manaCost: item.manaCost,
          },
        },
      })) as { data: UpdateMagicalItemMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({
        query: deleteMagicalItem,
        variables: { input: { id } },
      });
      context.commit("remove", id);
    },
  },
};

export default magicalItem;

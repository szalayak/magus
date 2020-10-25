import {
  CreateArmourMutation,
  ListArmoursQuery,
  UpdateArmourMutation,
} from "@/API";
import { createArmour, deleteArmour, updateArmour } from "@/graphql/mutations";
import { listArmours } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { Describable } from "../types";

export interface Armour extends Describable {
  id: string;
  weight?: string;
  movementPreventionValue: number;
  damageReductionValue: number;
  price?: number;
}

export interface ArmourState {
  result?: ListArmoursQuery;
}

const armour: Module<ArmourState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as ArmourState),
  mutations: {
    set(state, result: ListArmoursQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listArmours?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listArmours?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listArmours?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listArmours?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listArmours?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({ query: listArmours })) as {
        data: ListArmoursQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: Armour) {
      const {
        data: { createArmour: newItem },
      } = (await API.graphql({
        query: createArmour,
        variables: {
          input: {
            id: item.id.length > 0 ? item.id : null,
            descriptions: item.descriptions,
            weight: item.weight,
            movementPreventionValue: item.movementPreventionValue,
            damageReductionValue: item.damageReductionValue,
            price: item.price,
          },
        },
      })) as { data: CreateArmourMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Armour) {
      const {
        data: { updateArmour: updatedItem },
      } = (await API.graphql({
        query: updateArmour,
        variables: {
          input: {
            id: item.id,
            descriptions: item.descriptions,
            weight: item.weight,
            movementPreventionValue: item.movementPreventionValue,
            damageReductionValue: item.damageReductionValue,
            price: item.price,
          },
        },
      })) as { data: UpdateArmourMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({ query: deleteArmour, variables: { input: { id } } });
      context.commit("remove", id);
    },
  },
};

export default armour;

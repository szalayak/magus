import {
  CreateShieldMutation,
  ListShieldsQuery,
  UpdateShieldMutation,
} from "@/API";
import { createShield, deleteShield, updateShield } from "@/graphql/mutations";
import { listShields } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { CombatValues, Editable, ThrowScenario } from "../types";

export interface Shield extends Editable {
  combatValues?: CombatValues;
  damage?: ThrowScenario;
  movementPreventionValue?: number;
  weight?: string;
  price?: number;
}

export interface ShieldState {
  result?: ListShieldsQuery;
}

const shield: Module<ShieldState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as ShieldState),
  mutations: {
    set(state, result: ListShieldsQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listShields?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listShields?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listShields?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listShields?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listShields?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  getters: {
    list(state) {
      return state.result?.listShields?.items;
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({ query: listShields })) as {
        data: ListShieldsQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: Shield) {
      const {
        data: { createShield: newItem },
      } = (await API.graphql({
        query: createShield,
        variables: {
          input: {
            id: item.id.length > 0 ? item.id : null,
            descriptions: item.descriptions,
            combatValues: item.combatValues,
            damage: item.damage,
            movementPreventionValue: item.movementPreventionValue,
            weight: item.weight,
            price: item.price,
          },
        },
      })) as { data: CreateShieldMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Shield) {
      const {
        data: { updateShield: updatedItem },
      } = (await API.graphql({
        query: updateShield,
        variables: {
          input: {
            id: item.id,
            descriptions: item.descriptions,
            combatValues: item.combatValues,
            damage: item.damage,
            movementPreventionValue: item.movementPreventionValue,
            weight: item.weight,
            price: item.price,
          },
        },
      })) as { data: UpdateShieldMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({ query: deleteShield, variables: { input: { id } } });
      context.commit("remove", id);
    },
  },
};

export default shield;

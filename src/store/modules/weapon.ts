import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { ValueRange } from "./valueRange";
import { CombatValues, Editable, ThrowScenario } from "../types";
import {
  CreateWeaponMutation,
  ListWeaponsQuery,
  UpdateWeaponMutation,
} from "@/API";
import { listWeapons } from "@/graphql/queries";
import { createWeapon, deleteWeapon, updateWeapon } from "@/graphql/mutations";

export interface Weapon extends Editable {
  weaponType?: ValueRange;
  weight?: string;
  price?: number;
  attackRange?: number;
  combatValues: CombatValues;
  damage: ThrowScenario;
  attacksPerTurn: number;
  ranged?: boolean;
}

export interface WeaponState {
  result?: ListWeaponsQuery;
}

const weapon: Module<WeaponState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as WeaponState),
  getters: {
    list(state): Weapon[] {
      return state.result?.listWeapons?.items as Weapon[];
    },
  },
  mutations: {
    set(state, result: ListWeaponsQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listWeapons?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listWeapons?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listWeapons?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listWeapons?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listWeapons?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({ query: listWeapons })) as {
        data: ListWeaponsQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: Weapon) {
      const {
        data: { createWeapon: newItem },
      } = (await API.graphql({
        query: createWeapon,
        variables: {
          input: {
            id: item.id && item.id.length > 0 ? item.id : null,
            descriptions: item.descriptions,
            weaponTypeId: item.weaponType?.id,
            weight: item.weight,
            price: item.price,
            attackRange: item.attackRange,
            combatValues: item.combatValues,
            damage: item.damage,
            attacksPerTurn: item.attacksPerTurn,
            ranged: item.ranged,
          },
        },
      })) as { data: CreateWeaponMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Weapon) {
      const {
        data: { updateWeapon: updatedItem },
      } = (await API.graphql({
        query: updateWeapon,
        variables: {
          input: {
            id: item.id,
            descriptions: item.descriptions,
            weaponTypeId: item.weaponType?.id,
            weight: item.weight,
            price: item.price,
            attackRange: item.attackRange,
            combatValues: item.combatValues,
            damage: item.damage,
            attacksPerTurn: item.attacksPerTurn,
            ranged: item.ranged,
          },
        },
      })) as { data: UpdateWeaponMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({ query: deleteWeapon, variables: { input: { id } } });
      context.commit("remove", id);
    },
  },
};

export default weapon;

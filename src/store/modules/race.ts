import { CreateRaceMutation, ListRacesQuery, UpdateRaceMutation } from "@/API";
import { createRace, deleteRace, updateRace } from "@/graphql/mutations";
import { listRaces } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { Editable } from "../types";

export interface Race extends Editable {
  playable?: boolean;
}

export interface RaceState {
  result?: ListRacesQuery;
}

const race: Module<RaceState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as RaceState),
  getters: {
    list(state): Race[] {
      return state.result?.listRaces?.items as Race[];
    },
    getPlayableRaces(state): Race[] {
      return state.result?.listRaces?.items?.filter(
        race => race?.playable
      ) as Race[];
    },
  },
  mutations: {
    set(state, result: ListRacesQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listRaces?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listRaces?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listRaces?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listRaces?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listRaces?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({ query: listRaces })) as {
        data: ListRacesQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: Race) {
      const {
        data: { createRace: newItem },
      } = (await API.graphql({
        query: createRace,
        variables: {
          input: {
            id: item.id && item.id.length > 0 ? item.id : null,
            descriptions: item.descriptions,
            playable: item.playable,
          },
        },
      })) as { data: CreateRaceMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Race) {
      const {
        data: { updateRace: updatedItem },
      } = (await API.graphql({
        query: updateRace,
        variables: {
          input: {
            id: item.id,
            descriptions: item.descriptions,
            playable: item.playable,
          },
        },
      })) as { data: UpdateRaceMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({ query: deleteRace, variables: { input: { id } } });
      context.commit("remove", id);
    },
  },
};

export default race;

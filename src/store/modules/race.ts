import { CreateRaceMutation, ListRacesQuery, UpdateRaceMutation } from "@/API";
import { createRace, deleteRace, updateRace } from "@/graphql/mutations";
import { listRaces } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { Describable, RootState } from "..";

export interface Race extends Describable {
  id: string;
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
  mutations: {
    setResult(state, result: ListRacesQuery) {
      state.result = result;
    },
    addRaceFromResult(state, newRace) {
      state.result?.listRaces?.items?.push(newRace);
    },
    updateRaceFromResult(state, updatedRace) {
      const oldState = state.result?.listRaces?.items?.find(
        item => item?.id === updatedRace.id
      );
      if (oldState) {
        const items = state.result?.listRaces?.items;
        items?.splice(items.indexOf(oldState), 1, updatedRace);
      }
    },
    removeRace(state, id: string) {
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
    async loadRaces(context) {
      const { data: result } = (await API.graphql({ query: listRaces })) as {
        data: ListRacesQuery;
      };
      context.commit("setResult", result);
    },
    async createRace(context, race: Race) {
      const {
        data: { createRace: newRace },
      } = (await API.graphql({
        query: createRace,
        variables: {
          input: {
            id: race.id.length > 0 ? race.id : null,
            descriptions: race.descriptions,
          },
        },
      })) as { data: CreateRaceMutation };
      context.commit("addRaceFromResult", newRace);
    },
    async updateRace(context, race: Race) {
      const {
        data: { updateRace: updatedRace },
      } = (await API.graphql({
        query: updateRace,
        variables: {
          input: {
            id: race.id,
            descriptions: race.descriptions,
          },
        },
      })) as { data: UpdateRaceMutation };
      context.commit("updateRaceFromResult", updateRace);
    },
    async deleteRace(context, id: string) {
      await API.graphql({ query: deleteRace, variables: { input: { id } } });
      context.commit("removeRace", id);
    },
  },
};

export default race;

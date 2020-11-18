import {
  CreatePsiSchoolMutation,
  ListPsiSchoolsQuery,
  UpdatePsiSchoolMutation,
} from "@/API";
import {
  createPsiSchool,
  deletePsiSchool,
  updatePsiSchool,
} from "@/graphql/mutations";
import { listPsiSchools } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { Editable } from "../types";

export interface PsiSchool extends Editable {
  basePsiPoints: number;
  psiPointsPerLevel: number;
}

export interface PsiSchoolState {
  result?: ListPsiSchoolsQuery;
}

const psiSchool: Module<PsiSchoolState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as PsiSchoolState),
  getters: {
    list(state): PsiSchool[] {
      return state.result?.listPsiSchools?.items as PsiSchool[];
    },
  },
  mutations: {
    set(state, result: ListPsiSchoolsQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listPsiSchools?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listPsiSchools?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listPsiSchools?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listPsiSchools?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listPsiSchools?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      if (!context.getters.list) {
        const { data: result } = (await API.graphql({
          query: listPsiSchools,
        })) as {
          data: ListPsiSchoolsQuery;
        };
        context.commit("set", result);
      }
    },
    async create(context, item: PsiSchool) {
      const {
        data: { createPsiSchool: newItem },
      } = (await API.graphql({
        query: createPsiSchool,
        variables: {
          input: {
            id: item.id && item.id.length > 0 ? item.id : null,
            descriptions: item.descriptions,
            basePsiPoints: item.basePsiPoints,
            psiPointsPerLevel: item.psiPointsPerLevel,
          },
        },
      })) as { data: CreatePsiSchoolMutation };
      context.commit("add", newItem);
    },
    async update(context, item: PsiSchool) {
      const {
        data: { updatePsiSchool: updatedItem },
      } = (await API.graphql({
        query: updatePsiSchool,
        variables: {
          input: {
            id: item.id,
            descriptions: item.descriptions,
            basePsiPoints: item.basePsiPoints,
            psiPointsPerLevel: item.psiPointsPerLevel,
          },
        },
      })) as { data: UpdatePsiSchoolMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({
        query: deletePsiSchool,
        variables: { input: { id } },
      });
      context.commit("remove", id);
    },
  },
};

export default psiSchool;

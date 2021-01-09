import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { PsiSchoolState } from "./types";

export const psiSchoolModule: Module<PsiSchoolState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

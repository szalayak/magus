import { RootState } from "@/store";
import {
  defaultActions,
  defaultGetters,
  defaultMutations,
} from "@/store/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { PsiSchoolState } from "./types";

export const psiSchoolModule: Module<PsiSchoolState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: defaultGetters,
  mutations: defaultMutations,
  actions: defaultActions(proxy.defaultActions),
};

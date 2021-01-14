import i18n from "@/i18n";
import { RootState } from "@/store";
import {
  createDefaultActions,
  createDefaultGetters,
  createDefaultMutations,
} from "@/store/utils";
import { localise } from "@/utils";
import { Module } from "vuex";
import proxy from "./proxies";
import { PsiSchool, PsiSchoolState } from "./types";

export const psiSchoolModule: Module<PsiSchoolState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createDefaultGetters(
    (items: PsiSchool[]) => localise(items, i18n.locale) as PsiSchool[]
  ),
  mutations: createDefaultMutations(),
  actions: createDefaultActions(proxy.defaultActions),
};

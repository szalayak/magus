import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import { ValueRange } from "./valueRange";
import { Editable } from "../types";
import {
  CreateSkillMutation,
  ListSkillsQuery,
  UpdateSkillMutation,
} from "@/API";
import { listSkills } from "@/graphql/queries";
import { createSkill, deleteSkill, updateSkill } from "@/graphql/mutations";

export interface Skill extends Editable {
  skillGroup?: ValueRange;
  percentageSkill?: boolean;
  basicCost?: number;
  masterCost?: number;
}

export interface SkillState {
  result?: ListSkillsQuery;
}

const skill: Module<SkillState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as SkillState),
  getters: {
    list(state): Skill[] {
      return state.result?.listSkills?.items as Skill[];
    },
  },
  mutations: {
    set(state, result: ListSkillsQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listSkills?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listSkills?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listSkills?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listSkills?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listSkills?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({ query: listSkills })) as {
        data: ListSkillsQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: Skill) {
      const {
        data: { createSkill: newItem },
      } = (await API.graphql({
        query: createSkill,
        variables: {
          input: {
            id: item.id.length > 0 ? item.id : null,
            descriptions: item.descriptions,
            skillGroupId: item.skillGroup?.id,
            percentageSkill: item.percentageSkill,
            basicCost: item.percentageSkill ? undefined : item.basicCost,
            masterCost: item.percentageSkill ? undefined : item.masterCost,
          },
        },
      })) as { data: CreateSkillMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Skill) {
      const {
        data: { updateSkill: updatedItem },
      } = (await API.graphql({
        query: updateSkill,
        variables: {
          input: {
            id: item.id,
            descriptions: item.descriptions,
            skillGroupId: item.skillGroup?.id,
            percentageSkill: item.percentageSkill,
            basicCost: item.percentageSkill ? undefined : item.basicCost,
            masterCost: item.percentageSkill ? undefined : item.masterCost,
          },
        },
      })) as { data: UpdateSkillMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({ query: deleteSkill, variables: { input: { id } } });
      context.commit("remove", id);
    },
  },
};

export default skill;

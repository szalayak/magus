import {
  CreateClassMutation,
  ListClassesQuery,
  UpdateClassMutation,
} from "@/API";
import { createClass, deleteClass, updateClass } from "@/graphql/mutations";
import { listClasses } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { Describable, RootState } from "..";
import { ValueRange } from "./valueRange";

export interface Class extends Describable {
  id: string;
  mainClass?: ValueRange;
  magicUser?: boolean;
}

export interface ClassState {
  result?: ListClassesQuery;
}

const classModule: Module<ClassState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as ClassState),
  mutations: {
    set(state, result: ListClassesQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listClasses?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listClasses?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listClasses?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listClasses?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listClasses?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({ query: listClasses })) as {
        data: ListClassesQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: Class) {
      const {
        data: { createClass: newItem },
      } = (await API.graphql({
        query: createClass,
        variables: {
          input: {
            id: item.id.length > 0 ? item.id : null,
            mainClassId: item.mainClass?.id,
            magicUser: item.magicUser,
            descriptions: item.descriptions,
          },
        },
      })) as { data: CreateClassMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Class) {
      const {
        data: { updateClass: updatedItem },
      } = (await API.graphql({
        query: updateClass,
        variables: {
          input: {
            mainClassId: item.mainClass?.id,
            magicUser: item.magicUser,
            descriptions: item.descriptions,
          },
        },
      })) as { data: UpdateClassMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({ query: deleteClass, variables: { input: { id } } });
      context.commit("remove", id);
    },
  },
};

export default classModule;

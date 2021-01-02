import { ActionTree, GetterTree, MutationTree } from "vuex";
import { RootState } from ".";
import { ActionProps, Identifiable, PageableState } from "./types";

export const defaultGetters: GetterTree<PageableState, RootState> = {
  list({ items }) {
    return items;
  },
};

export enum DefaultMutationKeys {
  SET = "set",
  MERGE = "merge",
  ADD = "add",
  CHANGE = "change",
  REMOVE = "remove",
}

export const defaultMutations: MutationTree<PageableState> = {
  set(state, result: PageableState) {
    state.items = result.items;
    state.nextToken = result.nextToken;
  },
  merge({ items }, result: PageableState) {
    if (items.length < 1) items.concat(result.items);
    else {
      result.items.forEach(newItem => {
        const item = items.find(i => i.id === newItem.id);
        if (item) items.splice(items.indexOf(item), 1, newItem);
        else items.push(newItem);
      });
    }
  },
  add({ items }, newItem: Identifiable) {
    items.push(newItem);
  },
  change({ items }, updateItem: Identifiable) {
    const oldState = items?.find(item => item?.id === updateItem.id);
    if (oldState) {
      items.splice(items.indexOf(oldState), 1, updateItem);
    }
  },
  remove({ items }, id: string) {
    const oldState = items.find(item => item?.id === id);
    if (oldState) {
      items.splice(items.indexOf(oldState), 1);
    }
  },
};

export enum DefaultActionKeys {
  LOAD = "load",
  LOAD_ITEM = "loadItem",
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
}

export const defaultActions = ({
  loadFunction,
  getFunction,
  createFunction,
  updateFunction,
  deleteFunction,
}: ActionProps): ActionTree<PageableState, RootState> => {
  return {
    async load(context) {
      if (context.getters.list.length < 1) {
        const result = await loadFunction();
        context.commit(DefaultMutationKeys.SET, result);
      }
    },
    async loadItem(context, id: string) {
      const result = await getFunction(id);
      context.commit(DefaultMutationKeys.MERGE, result);
    },
    async create(context, item: Identifiable) {
      const result = await createFunction(item);
      context.commit(DefaultMutationKeys.ADD, result);
    },
    async update(context, item: Identifiable) {
      const result = await updateFunction(item);
      context.commit(DefaultMutationKeys.CHANGE, result);
    },
    async delete(context, id: string) {
      await deleteFunction(id);
      context.commit(DefaultMutationKeys.REMOVE, id);
    },
  };
};

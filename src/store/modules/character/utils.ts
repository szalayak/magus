import { ActionProps, Identifiable, PageableState, RootState } from "@/store";
import { ActionTree } from "vuex";
import { Character, CharacterCore, CharacterQueryResult } from ".";
import { Assignment } from "./types";

export const mapCharacterResult = (item: CharacterQueryResult): Character => {
  const core = item as CharacterCore;
  return {
    ...core,
    weapons: item.weapons?.items,
    skills: item.skills?.items,
    companions: item.companions?.items,
    magicalItems: item.magicalItems?.items,
  };
};

export const findById = (items?: Identifiable[], id?: string) => {
  return items?.find((item: Identifiable) => item.id === id);
};

export const removeAssignment = (items?: Identifiable[], id?: string) => {
  const existing = findById(items, id);
  if (items && existing) items.splice(items.indexOf(existing), 1);
};

export const updateAssignment = (
  items: Assignment[],
  assignment: Assignment
) => {
  const existing = findById(items, assignment.id);
  if (existing) Object.assign(existing, assignment);
  else items.push(assignment);
};

export const createAssignmentActions = ({
  actions: { createFunction, updateFunction, deleteFunction },
  merge,
  remove,
}: {
  actions: ActionProps;
  merge: string;
  remove: string;
}): ActionTree<PageableState, RootState> => {
  return {
    async create(context, assignment: Assignment) {
      const result = await createFunction(assignment);
      context.commit(merge, result);
    },
    async update(context, assignment: Assignment) {
      const result = await updateFunction(assignment);
      context.commit(merge, result);
    },
    async delete(context, assignment: Assignment) {
      if (assignment.id) {
        await deleteFunction(assignment.id);
        context.commit(remove, assignment);
      }
    },
  };
};

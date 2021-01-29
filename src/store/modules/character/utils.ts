import i18n from "@/i18n";
import { ActionProps, Identifiable, PageableState, RootState } from "@/store";
import { localiseItem } from "@/utils";
import { ActionTree } from "vuex";
import { Character, CharacterCore, CharacterQueryResult } from ".";
import { Assignment } from "./types";

export const mapCharacterResult = (item: CharacterQueryResult): Character => {
  const core = item as CharacterCore;
  return {
    ...core,
    weapons: item.weapons?.items.map(i => ({
      ...i,
      weapon: localiseItem(i.weapon, i18n.locale),
    })),
    skills: item.skills?.items.map(i => ({
      ...i,
      skill: localiseItem(i.skill, i18n.locale),
    })),
    companions: item.companions?.items,
    magicalItems: item.magicalItems?.items.map(i => ({
      ...i,
      magicalItem: localiseItem(i.magicalItem, i18n.locale),
    })),
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

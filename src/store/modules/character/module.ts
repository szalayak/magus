import { RootState } from "@/store";
import { DefaultActionKeys, DefaultMutationKeys } from "@/store";
import {
  createActions,
  createDefaultMutations,
  createGetters,
  createMutations,
} from "@/store/utils";
import { Module } from "vuex";
import { Character, CharacterState } from ".";
import proxy from "./proxies";
import {
  Assignment,
  CharacterQueryResult,
  CharacterResults,
  MagicalItemAssignment,
  SkillAssignment,
  WeaponAssignment,
} from "./types";
import {
  createAssignmentActions,
  findById,
  mapCharacterResult,
  removeAssignment,
  updateAssignment,
} from "./utils";
import { Subscription } from "rxjs";
import { localiseItem } from "@/utils";
import i18n from "@/i18n";

const weaponAssignmentActions = createAssignmentActions({
  actions: proxy.weaponAssignmentActions,
  merge: "mergeWeaponAssignment",
  remove: "removeWeaponAssignment",
});
const skillAssignmentActions = createAssignmentActions({
  actions: proxy.skillAssignmentActions,
  merge: "mergeSkillAssignment",
  remove: "removeSkillAssignment",
});
const magicalItemAssignmentActions = createAssignmentActions({
  actions: proxy.magicalItemAssignmentActions,
  merge: "mergeMagicalItemAssignment",
  remove: "removeMagicalItemAssignment",
});
const characterCompanionActions = createAssignmentActions({
  actions: proxy.characterCompanionActions,
  merge: "mergeCharacterCompanion",
  remove: "removeCharacterCompanion",
});

const defaultMutations = createDefaultMutations();

export const characterModule: Module<CharacterState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: createGetters({
    additionalGetters: {
      playerCharactersAsPlayer(
        _state,
        getters,
        _rootState,
        rootGetters
      ): Character[] {
        return getters.list.filter((item: Character) => {
          return (
            item?.owner === rootGetters.currentUser && item.playerCharacter
          );
        });
      },
      playerCharactersAsDM(
        _state,
        getters,
        _rootState,
        rootGetters
      ): Character[] {
        return getters.list.filter((item: Character) => {
          return (
            (item?.dungeonMaster === rootGetters.currentUser ||
              rootGetters.isCurrentUserAdmin) &&
            item.playerCharacter
          );
        });
      },
      nonPlayerCharactersAsDM(
        _state,
        getters,
        _rootState,
        rootGetters
      ): Character[] {
        return getters.list.filter((item: Character) => {
          return (
            (item.owner === rootGetters.currentUser ||
              rootGetters.isCurrentUserAdmin) &&
            !item.playerCharacter
          );
        });
      },
    },
  }),
  mutations: createMutations({
    additionalMutations: {
      set(state, result: CharacterResults) {
        const mappedResult: CharacterState = {
          items: result.items.map(r => mapCharacterResult(r)),
          nextToken: result.nextToken,
        };
        defaultMutations.set(state, mappedResult);
      },
      merge(state, result: CharacterResults) {
        const mappedResult: CharacterState = {
          items: result.items.map(r => mapCharacterResult(r)),
          nextToken: result.nextToken,
        };
        defaultMutations.merge(state, mappedResult);
      },
      mergeWeaponAssignment({ items }, assignment: WeaponAssignment) {
        const character = findById(items, assignment.characterId) as Character;
        if (character) {
          if (!character.weapons) character.weapons = [assignment];
          else
            updateAssignment(character.weapons, {
              ...assignment,
              weapon: localiseItem(assignment.weapon, i18n.locale),
            } as WeaponAssignment);
        }
      },
      removeWeaponAssignment({ items }, { id, characterId }: Assignment) {
        removeAssignment(
          (findById(items, characterId) as Character).weapons,
          id
        );
      },
      mergeSkillAssignment({ items }, assignment: SkillAssignment) {
        const character = findById(items, assignment.characterId) as Character;
        if (character) {
          if (!character.skills) character.skills = [assignment];
          else
            updateAssignment(character.skills, {
              ...assignment,
              skill: localiseItem(assignment.skill, i18n.locale),
            } as SkillAssignment);
        }
      },
      removeSkillAssignment({ items }, { id, characterId }: Assignment) {
        removeAssignment(
          (findById(items, characterId) as Character).skills,
          id
        );
      },
      mergeMagicalItemAssignment({ items }, assignment: MagicalItemAssignment) {
        const character = findById(items, assignment.characterId) as Character;
        if (character) {
          if (!character.magicalItems) character.magicalItems = [assignment];
          else
            updateAssignment(character.magicalItems, {
              ...assignment,
              magicalItem: localiseItem(assignment.magicalItem, i18n.locale),
            } as MagicalItemAssignment);
        }
      },
      removeMagicalItemAssignment({ items }, { id, characterId }: Assignment) {
        removeAssignment(
          (findById(items, characterId) as Character).magicalItems,
          id
        );
      },
      mergeCharacterCompanion({ items }, assignment: Assignment) {
        const character = findById(items, assignment.characterId) as Character;
        if (character) {
          if (!character.companions) character.companions = [assignment];
          else updateAssignment(character.companions, assignment);
        }
      },
      removeCharacterCompanionAssignment(
        { items },
        { id, characterId }: Assignment
      ) {
        removeAssignment(
          (findById(items, characterId) as Character).companions,
          id
        );
      },
    },
  }),
  actions: createActions({
    defaultActions: proxy.defaultActions,
    additionalActions: {
      createWeaponAssignment: weaponAssignmentActions.create,
      updateWeaponAssignment: weaponAssignmentActions.update,
      deleteWeaponAssignment: weaponAssignmentActions.delete,
      createSkillAssignment: skillAssignmentActions.create,
      updateSkillAssignment: skillAssignmentActions.update,
      deleteSkillAssignment: skillAssignmentActions.delete,
      createMagicalItemAssignment: magicalItemAssignmentActions.create,
      updateMagicalItemAssignment: magicalItemAssignmentActions.update,
      deleteMagicalItemAssignment: magicalItemAssignmentActions.delete,
      createCharacterCompanion: characterCompanionActions.create,
      updateCharacterCompanion: characterCompanionActions.update,
      deleteCharacterCompanion: characterCompanionActions.delete,
      async loadByOwner(context, owner: string) {
        const result = await proxy.additionalActions.loadByOwner(owner);
        context.commit(DefaultMutationKeys.MERGE, result);
      },
      async loadByDungeonMaster(context, dungeonMaster: string) {
        const result = await proxy.additionalActions.loadByDungeonMaster(
          dungeonMaster
        );
        context.commit(DefaultMutationKeys.MERGE, result);
      },
      async revert(context, id: string) {
        context.dispatch(DefaultActionKeys.LOAD_ITEM, id);
      },
      async save(context, id: string) {
        const character = findById(context.getters.list, id);
        if (character) {
          context.dispatch(DefaultActionKeys.UPDATE, character);
        }
      },
      async update(context, item: Character) {
        const result = await proxy.defaultActions.updateFunction(item);
        context.commit(DefaultMutationKeys.CHANGE, mapCharacterResult(result));
      },
      async delete(context, id: string) {
        const character = findById(context.getters.list, id) as Character;
        if (character) {
          const weapons =
            character?.weapons?.map(w =>
              context.dispatch("deleteWeaponAssignment", w)
            ) || [];
          const skills =
            character?.skills?.map(s =>
              context.dispatch("deleteSkillAssignment", s)
            ) || [];
          const magicalItems =
            character?.magicalItems?.map(m =>
              context.dispatch("deleteMagicalItemAssignment", m)
            ) || [];
          const companions =
            character?.companions?.map(c =>
              context.dispatch("deleteCompanionAssignment", c)
            ) || [];
          await Promise.all([
            ...weapons,
            ...skills,
            ...magicalItems,
            ...companions,
          ]);

          await proxy.defaultActions.deleteFunction(id);
          context.commit(DefaultMutationKeys.REMOVE, id);
        }
      },
      async subscribeToUpdate(context, item: Character) {
        const state = context.state as CharacterState;
        if (!state.subscription) {
          const callback = (
            result: CharacterQueryResult,
            subscription: Subscription
          ): void => {
            state.subscription = subscription;
            context.commit(
              DefaultMutationKeys.CHANGE,
              mapCharacterResult(result)
            );
          };

          await proxy.additionalActions.subscribeToUpdate(callback, item);
        }
      },
    },
  }),
};

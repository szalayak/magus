import { RootState } from "@/store";
import {
  DefaultActionKeys,
  defaultActions,
  defaultGetters,
  DefaultMutationKeys,
  defaultMutations,
} from "@/store";
import { Module } from "vuex";
import { Character, CharacterState } from ".";
import proxy from "./proxies";

// const weaponAssignmentActions = defaultActions(proxy.weaponAssignmentActions);
// const skillAssignmentActions = defaultActions(proxy.skillAssignmentActions);
// const magicalItemAssignmentActions = defaultActions(proxy.magicalItemAssignmentActions);
// const characterCompanionActions = defaultActions(proxy.magicalItemAssignmentActions);

const findById = (items: Character[], id: string) => {
  return items.find((item: Character) => item.id === id);
};

export const characterModule: Module<CharacterState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  getters: {
    ...defaultGetters,
    playerCharactersAsPlayer(
      _state,
      getters,
      _rootState,
      rootGetters
    ): Character[] {
      return getters.list.filter((item: Character) => {
        return item?.owner === rootGetters.currentUser && item.playerCharacter;
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
  mutations: { ...defaultMutations },
  actions: {
    ...defaultActions(proxy.defaultActions),
    // createWeaponAssignment: weaponAssignmentActions.create,
    // updateWeaponAssignment: weaponAssignmentActions.update,
    // deleteWeaponAssignment: weaponAssignmentActions.delete,
    // createSkillAssignment: skillAssignmentActions.create,
    // updateSkillAssignment: skillAssignmentActions.update,
    // deleteSkillAssignment: skillAssignmentActions.delete,
    // createMagicalItemAssignment: magicalItemAssignmentActions.create,
    // updateMagicalItemAssignment: magicalItemAssignmentActions.update,
    // deleteMagicalItemAssignment: magicalItemAssignmentActions.delete,
    // createCharacterCompanion: characterCompanionActions.create,
    // updateCharacterCompanion: characterCompanionActions.update,
    // deleteCharacterCompanion: characterCompanionActions.delete,
    async revert(context, id: string) {
      context.dispatch(DefaultActionKeys.LOAD_ITEM, id);
    },
    async save(context, id: string) {
      const character = findById(context.getters.list, id);
      if (character) {
        context.dispatch(
          id ? DefaultActionKeys.UPDATE : DefaultActionKeys.CREATE
        );
      }
    },
    async delete(context, id: string) {
      const character = findById(context.getters.list, id);
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
  },
};

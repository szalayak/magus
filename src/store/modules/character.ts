import {
  CompanionType,
  CreateCharacterCompanionMutation,
  CreateCharacterMutation,
  CreateMagicalItemAssignmentMutation,
  CreateSkillAssignmentMutation,
  CreateWeaponAssignmentMutation,
  GetCharacterQuery,
  ListCharactersByDungeonMasterQuery,
  ListCharactersByOwnerQuery,
  ListCharactersQuery,
  Mastery,
  UpdateCharacterCompanionMutation,
  UpdateCharacterMutation,
  UpdateMagicalItemAssignmentMutation,
  UpdateSkillAssignmentMutation,
  UpdateWeaponAssignmentMutation,
} from "@/API";
import {
  createCharacter,
  createCharacterCompanion,
  createMagicalItemAssignment,
  createSkillAssignment,
  createWeaponAssignment,
  deleteCharacter,
  deleteCharacterCompanion,
  deleteMagicalItemAssignment,
  deleteSkillAssignment,
  deleteWeaponAssignment,
  updateCharacter,
  updateCharacterCompanion,
  updateMagicalItemAssignment,
  updateSkillAssignment,
  updateWeaponAssignment,
} from "@/graphql/mutations";
import {
  getCharacter,
  listCharacters,
  listCharactersByDungeonMaster,
  listCharactersByOwner,
} from "@/graphql/queries";
import { purgeUndefined } from "@/utils/mapping";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import {
  Abilities,
  CharacterBasicInfo,
  CharacterLevel,
  CombatValues,
  HealthInformation,
  Identifiable,
  InventoryItem,
  LanguageAbility,
  MagicalAbility,
  MutablePointValue,
  Poison,
  SkillPoints,
  SpellResistance,
  ThrowScenario,
  Wallet,
} from "../types";
import { Armour } from "./armour";
import { Class } from "./class";
import { MagicalItem } from "./magicalItem";
import { PsiSchool } from "./psiSchool";
import { Race } from "./race";
import { Shield } from "./shield";
import { Skill } from "./skill";
import { ValueRange } from "./valueRange";
import { Weapon } from "./weapon";

export interface WeaponAssignment extends Identifiable {
  characterId: string;
  weapon?: Weapon;
  mastery?: Mastery;
  inHand?: boolean;
  breakWeapon?: Mastery;
  disarm?: Mastery;
  arrowCount?: number;
  specialProjectileCount?: number;
  aim?: Mastery;
  horseback?: Mastery;
}

export interface SkillAssignment extends Identifiable {
  characterId: string;
  skill?: Skill;
  mastery?: Mastery;
  percentageValue?: number;
  skillPointsUsed?: number;
}

export interface CharacterCompanion extends Identifiable {
  characterId: string;
  name: string;
  type?: CompanionType;
  health?: HealthInformation;
  combatValues?: CombatValues;
  damage?: ThrowScenario;
  weapon?: Weapon;
  attacksPerTurn?: number;
  maxDistance?: string;
  maxLoad?: string;
  badHabit?: string;
  specialAbilities?: string;
}

export interface MagicalItemAssignment extends Identifiable {
  characterId: string;
  magicalItem?: MagicalItem;
  location?: string;
}

export interface CharacterCore extends Identifiable {
  name: string;
  playerCharacter?: boolean;
  startDate?: string;
  dungeonMaster?: string;
  dungeonMasterName?: string;
  owner?: string;
  basicInfo?: CharacterBasicInfo;
  abilities?: Abilities;
  health?: HealthInformation;
  class?: Class;
  subclass?: string;
  specialisation?: string;
  race?: Race;
  personality?: ValueRange;
  level?: CharacterLevel;
  psiUser?: boolean;
  psiSchool?: PsiSchool;
  psiLevel?: number;
  psiPoints?: MutablePointValue;
  spellResistance?: SpellResistance;
  magicUser?: boolean;
  magicalAbility?: MagicalAbility;
  baseCombatValues?: CombatValues;
  spentCombatValueModifiers?: CombatValues;
  otherCombatValueModifiers?: CombatValues;
  combatValueModifiersPerLevel?: number;
  mandatoryCombatValueModifierDistribution?: string;
  wallet?: Wallet;
  skillPoints?: SkillPoints;
  languages?: LanguageAbility[];
  inventory?: InventoryItem[];
  poisons?: Poison[];
  notes?: string;
  armour?: Armour;
  shield?: Shield;
  createdAt?: string;
  updatedAt?: string;
}

export interface Character extends CharacterCore {
  weapons?: WeaponAssignment[];
  skills?: SkillAssignment[];
  companions?: CharacterCompanion[];
  magicalItems?: MagicalItemAssignment[];
}

export interface CharacterResults {
  items?: Character[];
  nextToken?: string;
}

interface CharacterQueryResults {
  items?: CharacterQueryResult[];
  nextToken?: string;
}

interface WeaponAssignmentQueryResults {
  items?: WeaponAssignment[];
  nextToken?: string;
}

interface SkillAssignmentQueryResults {
  items?: SkillAssignment[];
  nextToken?: string;
}

interface CharacterCompanionQueryResults {
  items?: CharacterCompanion[];
  nextToken?: string;
}

interface MagicalItemAssignmentQueryResults {
  items?: MagicalItemAssignment[];
  nextToken?: string;
}

interface CharacterQueryResult extends CharacterCore {
  weapons?: WeaponAssignmentQueryResults;
  skills?: SkillAssignmentQueryResults;
  companions?: CharacterCompanionQueryResults;
  magicalItems?: MagicalItemAssignmentQueryResults;
}

export interface CharacterState {
  result: CharacterResults;
  transient: Character[];
}

const mapCharacterResult = (item: CharacterQueryResult): Character => {
  const core = item as CharacterCore;
  return {
    ...core,
    weapons: item.weapons?.items,
    skills: item.skills?.items,
    companions: item.companions?.items,
    magicalItems: item.magicalItems?.items,
  };
};

const findPersistent = (state: CharacterState, id?: string) => {
  return state.result.items?.find(ex => ex.id === id);
};

const findTransient = (state: CharacterState, id?: string) => {
  return state.transient?.find(ex => ex.id === id);
};

const mergeTransient = (state: CharacterState, item: Character) => {
  const transient = findTransient(state, item.id);
  if (transient)
    state.transient.splice(
      state.transient.indexOf(transient),
      1,
      JSON.parse(JSON.stringify(item)) // deep copy
    );
  else state.transient.push(JSON.parse(JSON.stringify(item))); // deep copy
};

const mergePersistent = (state: CharacterState, item: CharacterQueryResult) => {
  const character = mapCharacterResult(item);
  const existing = findPersistent(state, character.id);
  if (existing) Object.assign(existing, character);
  else state.result.items?.push(character);
  mergeTransient(state, character);
};

const character: Module<CharacterState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {
        items: [],
      },
      transient: [],
    } as CharacterState),
  getters: {
    list(state): Character[] {
      return state.result?.items || [];
    },
    listTransient(state): Character[] {
      return state.transient || [];
    },
    playerCharactersAsPlayer(
      _state,
      getters,
      _rootState,
      rootGetters
    ): Character[] {
      return getters.listTransient.filter((character: Character) => {
        return (
          (character.owner === rootGetters.currentUser ||
            rootGetters.isCurrentUserAdmin) &&
          character.playerCharacter
        );
      });
    },
    playerCharactersAsDM(
      _state,
      getters,
      _rootState,
      rootGetters
    ): Character[] {
      return getters.listTransient.filter((character: Character) => {
        return (
          character.dungeonMaster === rootGetters.currentUser &&
          character.playerCharacter
        );
      });
    },
    nonPlayerCharactersAsDM(
      _state,
      getters,
      _rootState,
      rootGetters
    ): Character[] {
      return getters.listTransient.filter((character: Character) => {
        return (
          (character.owner === rootGetters.currentUser ||
            rootGetters.isCurrentUserAdmin) &&
          !character.playerCharacter
        );
      });
    },
  },
  mutations: {
    set(state, result: CharacterQueryResults) {
      state.result.nextToken = result.nextToken;
      result.items?.forEach(item => mergePersistent(state, item));
    },
    mergeTransient(state, item: Character) {
      mergeTransient(state, item);
    },
    merge(state, item: CharacterQueryResult) {
      mergePersistent(state, item);
    },
    mergeQueryResult(state, result: CharacterQueryResults) {
      result.items?.forEach(item => mergePersistent(state, item));
    },
    add(state, newItem) {
      mergePersistent(state, newItem);
    },
    change(state, updateItem) {
      mergePersistent(state, updateItem);
    },
    remove(state, id: string) {
      const oldState = findPersistent(state, id);
      if (oldState) {
        const items = state.result?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
      const existing = findTransient(state, id);
      if (existing) {
        state.transient?.splice(state.transient.indexOf(existing), 1);
      }
    },
    revert(state, id: string) {
      const existing = findPersistent(state, id);
      if (existing) mergeTransient(state, existing);
    },
    mergeWeaponAssignment(state, assignment: WeaponAssignment) {
      const character = findPersistent(state, assignment.characterId);
      if (character) {
        if (!character.weapons) character.weapons = [assignment];
        else {
          const existing = character.weapons?.find(w => w.id === assignment.id);
          if (existing) Object.assign(existing, assignment);
          else character.weapons?.push(assignment);
        }
        mergeTransient(state, character);
      }
    },
    removeWeaponAssignment(state, assignment: WeaponAssignment) {
      const character = findPersistent(state, assignment.characterId);
      const existing = character?.weapons?.find(w => w.id === assignment.id);
      if (character && existing) {
        character?.weapons?.splice(character.weapons.indexOf(existing), 1);
        mergeTransient(state, character);
      }
    },
    mergeSkillAssignment(state, assignment: SkillAssignment) {
      const character = findPersistent(state, assignment.characterId);
      if (character) {
        if (!character.skills) character.skills = [assignment];
        else {
          const existing = character.skills?.find(s => s.id === assignment.id);
          if (existing) Object.assign(existing, assignment);
          else character.skills?.push(assignment);
        }
        mergeTransient(state, character);
      }
    },
    removeSkillAssignment(state, assignment: SkillAssignment) {
      const character = findPersistent(state, assignment.characterId);
      const existing = character?.skills?.find(s => s.id === assignment.id);
      if (character && existing) {
        character?.skills?.splice(character.skills.indexOf(existing), 1);
        mergeTransient(state, character);
      }
    },
    mergeMagicalItemAssignment(state, assignment: MagicalItemAssignment) {
      const character = findPersistent(state, assignment.characterId);
      if (character) {
        if (!character.magicalItems) character.magicalItems = [assignment];
        else {
          const existing = character.magicalItems?.find(
            i => i.id === assignment.id
          );
          if (existing) Object.assign(existing, assignment);
          else character.magicalItems?.push(assignment);
        }
        mergeTransient(state, character);
      }
    },
    removeMagicalItemAssignment(state, assignment: MagicalItemAssignment) {
      const character = findPersistent(state, assignment.characterId);
      const existing = character?.magicalItems?.find(
        i => i.id === assignment.id
      );
      if (character && existing) {
        character?.magicalItems?.splice(
          character.magicalItems.indexOf(existing),
          1
        );
        mergeTransient(state, character);
      }
    },
    mergeCharacterCompanion(state, assignment: CharacterCompanion) {
      const character = findPersistent(state, assignment.characterId);
      if (character) {
        if (!character.companions) character.companions = [assignment];
        else {
          const existing = character.companions?.find(
            i => i.id === assignment.id
          );
          if (existing) Object.assign(existing, assignment);
          else character.companions?.push(assignment);
        }
        mergeTransient(state, character);
      }
    },
    removeCharacterCompanion(state, assignment: CharacterCompanion) {
      const character = findPersistent(state, assignment.characterId);
      const existing = character?.companions?.find(i => i.id === assignment.id);
      if (character && existing) {
        character?.companions?.splice(
          character.companions.indexOf(existing),
          1
        );
        mergeTransient(state, character);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({
        query: listCharacters,
      })) as {
        data: ListCharactersQuery;
      };
      context.commit("set", result.listCharacters);
    },
    async loadItem({ commit }, id: string) {
      const { data: result } = (await API.graphql({
        query: getCharacter,
        variables: { id },
      })) as { data: GetCharacterQuery };
      commit("merge", result.getCharacter);
    },
    async loadByOwner(context, owner: string) {
      const { data: result } = (await API.graphql({
        query: listCharactersByOwner,
        variables: { owner },
      })) as {
        data: ListCharactersByOwnerQuery;
      };
      context.commit("mergeQueryResult", result.listCharactersByOwner);
    },
    async loadByDungeonMaster(context, dungeonMaster: string) {
      const { data: result } = (await API.graphql({
        query: listCharactersByDungeonMaster,
        variables: {
          dungeonMaster,
        },
      })) as {
        data: ListCharactersByDungeonMasterQuery;
      };
      context.commit("mergeQueryResult", result.listCharactersByDungeonMaster);
    },
    async create(context, item: Character) {
      const character = item;
      const {
        data: { createCharacter: newItem },
      } = (await API.graphql({
        query: createCharacter,
        variables: {
          input: {
            name: character.name,
            playerCharacter: character.playerCharacter,
            startDate: character.startDate,
            dungeonMaster: character.dungeonMaster,
            basicInfo: character.basicInfo,
            abilities: character.abilities,
            health: character.health,
            characterClassId: character.class?.id,
            subclass: character.subclass,
            specialisation: character.specialisation,
            characterRaceId: character.race?.id,
            characterPersonalityId: character.personality?.id,
            level: character.level,
            psiUser: character.psiUser,
            characterPsiSchoolId: character.psiSchool?.id,
            psiLevel: character.psiLevel,
            psiPoints: character.psiPoints,
            spellResistance: character.spellResistance,
            magicUser: character.magicUser,
            magicalAbility: character.magicalAbility,
            baseCombatValues: character.baseCombatValues,
            spentCombatValueModifiers: character.spentCombatValueModifiers,
            otherCombatValueModifiers: character.otherCombatValueModifiers,
            combatValueModifiersPerLevel:
              character.combatValueModifiersPerLevel,
            mandatoryCombatValueModifierDistribution:
              character.mandatoryCombatValueModifierDistribution,
            wallet: character.wallet,
            languages: character.languages,
            inventory: character.inventory,
            poisons: character.poisons,
            notes: character.notes,
            characterArmourId: character.armour?.id,
            characterShieldId: character.shield?.id,
          },
        },
      })) as { data: CreateCharacterMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Character) {
      const character = item;
      const {
        data: { updateCharacter: updatedItem },
      } = (await API.graphql({
        query: updateCharacter,
        variables: {
          input: {
            id: character.id,
            name: character.name,
            playerCharacter: character.playerCharacter,
            startDate: character.startDate,
            dungeonMaster: character.dungeonMaster,
            basicInfo: character.basicInfo,
            abilities: character.abilities,
            health: character.health,
            characterClassId: character.class?.id,
            subclass: character.subclass,
            specialisation: character.specialisation,
            characterRaceId: character.race?.id,
            characterPersonalityId: character.personality?.id,
            level: character.level,
            psiUser: character.psiUser,
            characterPsiSchoolId: character.psiSchool?.id,
            psiLevel: character.psiLevel,
            psiPoints: character.psiPoints,
            spellResistance: character.spellResistance,
            magicUser: character.magicUser,
            magicalAbility: character.magicalAbility,
            baseCombatValues: character.baseCombatValues,
            spentCombatValueModifiers: character.spentCombatValueModifiers,
            otherCombatValueModifiers: character.otherCombatValueModifiers,
            combatValueModifiersPerLevel:
              character.combatValueModifiersPerLevel,
            mandatoryCombatValueModifierDistribution:
              character.mandatoryCombatValueModifierDistribution,
            wallet: character.wallet,
            languages: character.languages,
            inventory: character.inventory,
            poisons: character.poisons,
            notes: character.notes,
            characterArmourId: character.armour?.id,
            characterShieldId: character.shield?.id,
          },
        },
      })) as { data: UpdateCharacterMutation };
      context.commit("merge", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({
        query: deleteCharacter,
        variables: { input: { id } },
      });
      context.commit("remove", id);
    },

    async createWeaponAssignment(context, assignment: WeaponAssignment) {
      const {
        data: { createWeaponAssignment: createdAssignment },
      } = (await API.graphql({
        query: createWeaponAssignment,
        variables: {
          input: {
            characterId: assignment.characterId,
            weaponAssignmentWeaponId: assignment.weapon?.id,
            mastery: assignment.mastery,
            inHand: assignment.inHand,
            breakWeapon: assignment.breakWeapon,
            disarm: assignment.disarm,
            arrowCount: assignment.arrowCount,
            specialProjectileCount: assignment.specialProjectileCount,
            aim: assignment.aim,
            horseback: assignment.horseback,
          },
        },
      })) as { data: CreateWeaponAssignmentMutation };
      context.commit("mergeWeaponAssignment", createdAssignment);
    },
    async updateWeaponAssignment(context, assignment: WeaponAssignment) {
      const {
        data: { updateWeaponAssignment: updatedAssignment },
      } = (await API.graphql({
        query: updateWeaponAssignment,
        variables: {
          input: {
            id: assignment.id,
            mastery: assignment.mastery,
            inHand: assignment.inHand,
            breakWeapon: assignment.breakWeapon,
            disarm: assignment.disarm,
          },
        },
      })) as { data: UpdateWeaponAssignmentMutation };
      context.commit("mergeWeaponAssignment", updatedAssignment);
    },
    async deleteWeaponAssignment(context, assignment: WeaponAssignment) {
      await API.graphql({
        query: deleteWeaponAssignment,
        variables: {
          input: {
            id: assignment.id,
          },
        },
      });
      context.commit("removeWeaponAssignment", assignment);
    },

    async createSkillAssignment(context, assignment: SkillAssignment) {
      const {
        data: { createSkillAssignment: createdAssignment },
      } = (await API.graphql({
        query: createSkillAssignment,
        variables: {
          input: {
            characterId: assignment.characterId,
            skillAssignmentSkillId: assignment.skill?.id,
            mastery: assignment.mastery,
            percentageValue: assignment.percentageValue,
            skillPointsUsed: assignment.skillPointsUsed,
          },
        },
      })) as { data: CreateSkillAssignmentMutation };
      context.commit("mergeSkillAssignment", createdAssignment);
    },

    async updateSkillAssignment(context, assignment: SkillAssignment) {
      const {
        data: { updateSkillAssignment: updatedAssignment },
      } = (await API.graphql({
        query: updateSkillAssignment,
        variables: {
          input: {
            id: assignment.id,
            skillAssignmentSkillId: assignment.skill?.id,
            mastery: assignment.mastery,
            percentageValue: assignment.percentageValue,
            skillPointsUsed: assignment.skillPointsUsed,
          },
        },
      })) as { data: UpdateSkillAssignmentMutation };
      context.commit("mergeSkillAssignment", updatedAssignment);
    },

    async deleteSkillAssignment(context, assignment: SkillAssignment) {
      await API.graphql({
        query: deleteSkillAssignment,
        variables: {
          input: {
            id: assignment.id,
          },
        },
      });
      context.commit("removeSkillAssignment", assignment);
    },

    async createMagicalItemAssignment(
      context,
      assignment: MagicalItemAssignment
    ) {
      const {
        data: { createMagicalItemAssignment: createdAssignment },
      } = (await API.graphql({
        query: createMagicalItemAssignment,
        variables: {
          input: {
            characterId: assignment.characterId,
            magicalItemId: assignment.magicalItem?.id,
            location: assignment.location,
          },
        },
      })) as { data: CreateMagicalItemAssignmentMutation };
      context.commit("mergeMagicalItemAssignment", createdAssignment);
    },

    async updateMagicalItemAssignment(
      context,
      assignment: MagicalItemAssignment
    ) {
      const {
        data: { updateMagicalItemAssignment: updatedAssignment },
      } = (await API.graphql({
        query: updateMagicalItemAssignment,
        variables: {
          input: {
            id: assignment.id,
            magicalItemId: assignment.magicalItem?.id,
            location: assignment.location,
          },
        },
      })) as { data: UpdateMagicalItemAssignmentMutation };
      context.commit("mergeMagicalItemAssignment", updatedAssignment);
    },

    async deleteMagicalItemAssignment(
      context,
      assignment: MagicalItemAssignment
    ) {
      await API.graphql({
        query: deleteMagicalItemAssignment,
        variables: {
          input: {
            id: assignment.id,
          },
        },
      });
      context.commit("removeMagicalItemAssignment", assignment);
    },

    async createCharacterCompanion(context, assignment: CharacterCompanion) {
      const companion = assignment;
      const {
        data: { createCharacterCompanion: createdAssignment },
      } = (await API.graphql({
        query: createCharacterCompanion,
        variables: {
          input: {
            characterId: companion.characterId,
            name: companion.name,
            type: companion.type,
            health: companion.health,
            combatValues: companion.combatValues,
            damage: companion.damage,
            characterCompanionWeaponId: companion.weapon?.id,
            attacksPerTurn: companion.attacksPerTurn,
            maxDistance: companion.maxDistance,
            maxLoad: companion.maxLoad,
            badHabit: companion.badHabit,
            specialAbilities: companion.specialAbilities,
          },
        },
      })) as { data: CreateCharacterCompanionMutation };
      context.commit("mergeCharacterCompanion", createdAssignment);
    },

    async updateCharacterCompanion(context, assignment: CharacterCompanion) {
      const companion = assignment;
      const {
        data: { updateCharacterCompanion: updatedAssignment },
      } = (await API.graphql({
        query: updateCharacterCompanion,
        variables: {
          input: {
            id: companion.id,
            name: companion.name,
            type: companion.type,
            health: companion.health,
            combatValues: companion.combatValues,
            damage: companion.damage,
            characterCompanionWeaponId: companion.weapon?.id,
            attacksPerTurn: companion.attacksPerTurn,
            maxDistance: companion.maxDistance,
            maxLoad: companion.maxLoad,
            badHabit: companion.badHabit,
            specialAbilities: companion.specialAbilities,
          },
        },
      })) as { data: UpdateCharacterCompanionMutation };
      context.commit("mergeCharacterCompanion", updatedAssignment);
    },

    async deleteCharacterCompanion(context, assignment: CharacterCompanion) {
      await API.graphql({
        query: deleteCharacterCompanion,
        variables: {
          input: {
            id: assignment.id,
            name: assignment.name,
            type: assignment.type,
            health: assignment.health,
            combatValues: assignment.combatValues,
            damage: assignment.damage,
            characterCompanionWeaponId: assignment.weapon?.id,
            attacksPerTurn: assignment.attacksPerTurn,
            maxDistance: assignment.maxDistance,
            maxLoad: assignment.maxLoad,
            badHabit: assignment.badHabit,
            specialAbilities: assignment.specialAbilities,
          },
        },
      });
      context.commit("removeCharacterCompanion", assignment);
    },
  },
};

export default character;

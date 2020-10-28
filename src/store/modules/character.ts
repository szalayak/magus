import {
  CompanionType,
  CreateCharacterMutation,
  GetCharacterQuery,
  ListCharactersByDungeonMasterQuery,
  ListCharactersByOwnerQuery,
  ListCharactersQuery,
  Mastery,
  UpdateCharacterMutation,
} from "@/API";
import {
  createCharacter,
  deleteCharacter,
  updateCharacter,
} from "@/graphql/mutations";
import {
  getCharacter,
  listCharacters,
  listCharactersByDungeonMaster,
  listCharactersByOwner,
} from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import {
  Abilities,
  CharacterBasicInfo,
  CharacterLevel,
  CombatValues,
  Description,
  HealthInformation,
  Identifiable,
  InventoryItem,
  LanguageAbility,
  MagicalAbility,
  MutablePointValue,
  Poison,
  SpellResistance,
  ThrowScenario,
  Wallet,
} from "../types";
import { Class } from "./class";
import { MagicalItem } from "./magicalItem";
import { PsiSchool } from "./psiSchool";
import { Race } from "./race";
import { Skill } from "./skill";
import { ValueRange } from "./valueRange";
import { Weapon } from "./weapon";

export interface WeaponAssignment extends Identifiable {
  custom?: boolean;
  weapon?: Weapon;
  descriptions?: Description[];
  weight?: string;
  price?: number;
  attackRange?: number;
  combatValues?: CombatValues;
  damage?: ThrowScenario;
  attacksPerTurn?: number;
  ranged?: boolean;
}

export interface SkillAssignment extends Identifiable {
  skill: Skill;
  mastery?: Mastery;
  percentageValue?: number;
  skillPointsUsed?: number;
}

export interface CharacterCompanion extends Identifiable {
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
  magicalItem?: MagicalItem;
  location?: string;
}

export interface Character extends Identifiable {
  name: string;
  playerCharacter?: boolean;
  startDate?: string;
  dungeonMaster?: string;
  dungeonMasterName?: string;
  owner?: string;
  basicInfo?: CharacterBasicInfo;
  abilities?: Abilities;
  currentAbilities?: Abilities;
  health?: HealthInformation;
  class?: Class;
  subclass?: string;
  specialisation?: string;
  race?: Race;
  personality?: ValueRange;
  level?: CharacterLevel;
  psiUser?: boolean;
  psiSchool?: PsiSchool;
  psiMastery?: Mastery;
  psiPoints?: MutablePointValue;
  spellResistance?: SpellResistance;
  magicUser?: boolean;
  magicalAbility?: MagicalAbility;
  baseCombatValues?: CombatValues;
  spentCombatValueModifiers?: CombatValues;
  otherCombatValueModifiers?: CombatValues;
  temporaryCombatValueModifiers?: CombatValues;
  combatValueModifiersPerLevel?: number;
  mandatoryCombatValueModifierDistribution?: string;
  wallet?: Wallet;
  languages?: LanguageAbility[];
  inventory?: InventoryItem[];
  poisons?: Poison[];
  notes?: string[];
  weapons?: WeaponAssignment[];
  skills?: SkillAssignment[];
  companions?: CharacterCompanion[];
  magicalItems?: MagicalItemAssignment[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CharacterResult {
  items?: Character[];
  nextToken?: string;
}

export interface CharacterState {
  result: CharacterResult;
  transient: Character[];
}

const mergeTransient = (state: CharacterState, item: Character) => {
  const transient = state.transient.find(tr => tr.id === item.id);
  if (transient)
    state.transient.splice(
      state.transient.indexOf(transient),
      1,
      JSON.parse(JSON.stringify(item))
    );
  // deep copy
  else state.transient.push(JSON.parse(JSON.stringify(item))); // deep copy
};

const mergePersistent = (state: CharacterState, item: Character) => {
  const existing = state.result.items?.find(ex => ex.id === item.id);
  if (existing) Object.assign(existing, item);
  else state.result.items?.push(item);
  mergeTransient(state, item);
};

const weapon: Module<CharacterState, RootState> = {
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
  },
  mutations: {
    set(state, result: CharacterResult) {
      state.result.nextToken = result.nextToken;
      result.items?.forEach(item => mergePersistent(state, item));
    },
    mergeTransient(state, item: Character) {
      mergeTransient(state, item);
    },
    merge(state, item: Character) {
      mergePersistent(state, item);
    },
    mergeQueryResult(state, result: CharacterResult) {
      result.items?.forEach(item => mergePersistent(state, item));
    },
    add(state, newItem) {
      state.result?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.items?.find(item => item?.id === id);
      if (oldState) {
        const items = state.result?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
    revert(state, id: string) {
      const existing = state.result.items?.find(ex => ex.id === id);
      if (existing) mergeTransient(state, existing);
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
      const {
        data: { createCharacter: newItem },
      } = (await API.graphql({
        query: createCharacter,
        variables: {
          input: {
            name: item.name,
            playerCharacter: item.playerCharacter,
            startDate: item.startDate,
            dungeonMaster: item.dungeonMaster,
            basicInfo: item.basicInfo,
            abilities: item.abilities,
            currentAbilities: item.currentAbilities,
            health: item.health,
            characterClassId: item.class?.id,
            subclass: item.subclass,
            specialisation: item.specialisation,
            characterRaceId: item.race?.id,
            characterPersonalityId: item.personality?.id,
            level: item.level,
            psiUser: item.psiUser,
            characterPsiSchoolId: item.psiSchool?.id,
            psiMastery: item.psiMastery,
            psiPoints: item.psiPoints,
            spellResistance: item.spellResistance,
            magicUser: item.class?.magicUser || item.magicUser,
            magicalAbility: item.magicalAbility,
            baseCombatValues: item.baseCombatValues,
            spentCombatValueModifiers: item.spentCombatValueModifiers,
            otherCombatValueModifiers: item.otherCombatValueModifiers,
            temporaryCombatValueModifiers: item.temporaryCombatValueModifiers,
            combatValueModifiersPerLevel: item.combatValueModifiersPerLevel,
            mandatoryCombatValueModifierDistribution:
              item.mandatoryCombatValueModifierDistribution,
            wallet: item.wallet,
            languages: item.languages,
            inventory: item.inventory,
            poisons: item.poisons,
            notes: item.notes,
          },
        },
      })) as { data: CreateCharacterMutation };
      context.commit("add", newItem);
    },
    async update(context, item: Character) {
      const {
        data: { updateCharacter: updatedItem },
      } = (await API.graphql({
        query: updateCharacter,
        variables: {
          input: {
            id: item.id,
            name: item.name,
            playerCharacter: item.playerCharacter,
            startDate: item.startDate,
            dungeonMaster: item.dungeonMaster,
            basicInfo: item.basicInfo,
            abilities: item.abilities,
            currentAbilities: item.currentAbilities,
            health: item.health,
            characterClassId: item.class?.id,
            subclass: item.subclass,
            specialisation: item.specialisation,
            characterRaceId: item.race?.id,
            characterPersonalityId: item.personality?.id,
            level: item.level,
            psiUser: item.psiUser,
            characterPsiSchoolId: item.psiSchool?.id,
            psiMastery: item.psiMastery,
            psiPoints: item.psiPoints,
            spellResistance: item.spellResistance,
            magicUser: item.magicUser,
            magicalAbility: item.magicalAbility,
            baseCombatValues: item.baseCombatValues,
            spentCombatValueModifiers: item.spentCombatValueModifiers,
            otherCombatValueModifiers: item.otherCombatValueModifiers,
            temporaryCombatValueModifiers: item.temporaryCombatValueModifiers,
            combatValueModifiersPerLevel: item.combatValueModifiersPerLevel,
            mandatoryCombatValueModifierDistribution:
              item.mandatoryCombatValueModifierDistribution,
            wallet: item.wallet,
            languages: item.languages,
            inventory: item.inventory,
            poisons: item.poisons,
            notes: item.notes,
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
  },
};

export default weapon;

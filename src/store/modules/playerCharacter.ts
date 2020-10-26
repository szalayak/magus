import {
  CreatePlayerCharacterMutation,
  ListPlayerCharactersQuery,
  Mastery,
  UpdatePlayerCharacterMutation,
} from "@/API";
import {
  createPlayerCharacter,
  deletePlayerCharacter,
  updatePlayerCharacter,
} from "@/graphql/mutations";
import { listPlayerCharacters } from "@/graphql/queries";
import { API } from "aws-amplify";
import { Module } from "vuex";
import { RootState } from "..";
import {
  Abilities,
  CharacterBasicInfo,
  CharacterCompanion,
  CharacterLevel,
  CombatValues,
  HealthInformation,
  Identifiable,
  InventoryItem,
  LanguageAbility,
  MagicalAbility,
  MagicalItemAssignment,
  MutablePointValue,
  Poison,
  SkillAssignment,
  SpellResistance,
  Wallet,
  WeaponAssignment,
} from "../types";
import { Class } from "./class";
import { PsiSchool } from "./psiSchool";
import { Race } from "./race";
import { ValueRange } from "./valueRange";

export interface PlayerCharacter extends Identifiable {
  name: string;
  startDate: string;
  dungeonMasters?: string[];
  owner?: string;
  basicInfo?: CharacterBasicInfo;
  abilities?: Abilities;
  currentAbilities?: Abilities;
  health?: HealthInformation;
  class: Class;
  subclass?: string;
  specialisation?: string;
  race?: Race;
  personality?: ValueRange;
  level: CharacterLevel;
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
  temporaryCombatValuesModifiers?: CombatValues;
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
}

export interface PlayerCharacterState {
  result?: ListPlayerCharactersQuery;
}

const weapon: Module<PlayerCharacterState, RootState> = {
  namespaced: true,
  state: () =>
    ({
      result: {},
    } as PlayerCharacterState),
  getters: {
    list(state): PlayerCharacter[] {
      return (state.result?.listPlayerCharacters
        ?.items as unknown) as PlayerCharacter[];
    },
  },
  mutations: {
    set(state, result: ListPlayerCharactersQuery) {
      state.result = result;
    },
    add(state, newItem) {
      state.result?.listPlayerCharacters?.items?.push(newItem);
    },
    change(state, updateItem) {
      const oldState = state.result?.listPlayerCharacters?.items?.find(
        item => item?.id === updateItem.id
      );
      if (oldState) {
        const items = state.result?.listPlayerCharacters?.items;
        items?.splice(items.indexOf(oldState), 1, updateItem);
      }
    },
    remove(state, id: string) {
      const oldState = state.result?.listPlayerCharacters?.items?.find(
        item => item?.id === id
      );
      if (oldState) {
        const items = state.result?.listPlayerCharacters?.items;
        items?.splice(items.indexOf(oldState), 1);
      }
    },
  },
  actions: {
    async load(context) {
      const { data: result } = (await API.graphql({
        query: listPlayerCharacters,
      })) as {
        data: ListPlayerCharactersQuery;
      };
      context.commit("set", result);
    },
    async create(context, item: PlayerCharacter) {
      const {
        data: { createPlayerCharacter: newItem },
      } = (await API.graphql({
        query: createPlayerCharacter,
        variables: {
          input: {
            name: item.name,
          },
        },
      })) as { data: CreatePlayerCharacterMutation };
      context.commit("add", newItem);
    },
    async update(context, item: PlayerCharacter) {
      const {
        data: { updatePlayerCharacter: updatedItem },
      } = (await API.graphql({
        query: updatePlayerCharacter,
        variables: {
          input: {
            id: item.id,
          },
        },
      })) as { data: UpdatePlayerCharacterMutation };
      context.commit("change", updatedItem);
    },
    async delete(context, id: string) {
      await API.graphql({
        query: deletePlayerCharacter,
        variables: { input: { id } },
      });
      context.commit("remove", id);
    },
  },
};

export default weapon;

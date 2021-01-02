import {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  createWeaponAssignment,
  updateWeaponAssignment,
  deleteWeaponAssignment,
  createSkillAssignment,
  updateSkillAssignment,
  deleteSkillAssignment,
  createCharacterCompanion,
  updateCharacterCompanion,
  deleteCharacterCompanion,
  createMagicalItemAssignment,
  updateMagicalItemAssignment,
  deleteMagicalItemAssignment,
} from "@/graphql/mutations";
import {
  getCharacter,
  getCharacterCompanion,
  getMagicalItemAssignment,
  getSkillAssignment,
  getWeaponAssignment,
  listCharacterCompanions,
  listCharacters,
  listMagicalItemAssignments,
  listSkillAssignments,
  listWeaponAssignments,
} from "@/graphql/queries";
import { LooseObject } from "@/store";
import { createDefaultActions } from "@/store/amplify/utils";
import { Character } from "../..";
import {
  CharacterCompanion,
  MagicalItemAssignment,
  SkillAssignment,
  WeaponAssignment,
} from "../../types";

const defaultActions = createDefaultActions({
  actions: {
    list: listCharacters,
    read: getCharacter,
    create: createCharacter,
    update: updateCharacter,
    delete: deleteCharacter,
  },
  mappingFunction: (item: Character): LooseObject => ({
    id: item.id && item.id.length > 0 ? item.id : null,
    name: item.name,
    playerCharacter: item.playerCharacter,
    startDate: item.startDate,
    dungeonMaster: item.dungeonMaster,
    basicInfo: item.basicInfo,
    abilities: item.abilities,
    health: item.health,
    characterClassId: item.class?.id,
    subclass: item.subclass,
    specialisation: item.specialisation,
    characterRaceId: item.race?.id,
    characterPersonalityId: item.personality?.id,
    level: item.level,
    psiUser: item.psiUser,
    characterPsiSchoolId: item.psiSchool?.id,
    psiLevel: item.psiLevel,
    psiPoints: item.psiPoints,
    spellResistance: item.spellResistance,
    magicUser: item.magicUser,
    magicalAbility: item.magicalAbility,
    baseCombatValues: item.baseCombatValues,
    spentCombatValueModifiers: item.spentCombatValueModifiers,
    otherCombatValueModifiers: item.otherCombatValueModifiers,
    combatValueModifiersPerLevel: item.combatValueModifiersPerLevel,
    mandatoryCombatValueModifierDistribution:
      item.mandatoryCombatValueModifierDistribution,
    wallet: item.wallet,
    languages: item.languages,
    inventory: item.inventory,
    poisons: item.poisons,
    notes: item.notes,
    characterArmourId: item.armour?.id,
    characterShieldId: item.shield?.id,
    armourMastery: item.armourMastery,
    shieldMastery: item.shieldMastery,
    skillPoints: item.skillPoints,
  }),
});

const weaponAssignmentActions = createDefaultActions({
  actions: {
    list: listWeaponAssignments,
    read: getWeaponAssignment,
    create: createWeaponAssignment,
    update: updateWeaponAssignment,
    delete: deleteWeaponAssignment,
  },
  mappingFunction: (item: WeaponAssignment): LooseObject => ({
    id: item.id && item.id.length > 0 ? item.id : null,
    characterId: item.characterId,
    weaponAssignmentWeaponId: item.weapon?.id,
    mastery: item.mastery,
    inHand: item.inHand,
    breakWeapon: item.breakWeapon,
    disarm: item.disarm,
    arrowCount: item.arrowCount,
    specialProjectileCount: item.specialProjectileCount,
    aim: item.aim,
    horseback: item.horseback,
    notes: item.notes,
  }),
});

const skillAssignmentActions = createDefaultActions({
  actions: {
    list: listSkillAssignments,
    read: getSkillAssignment,
    create: createSkillAssignment,
    update: updateSkillAssignment,
    delete: deleteSkillAssignment,
  },
  mappingFunction: (item: SkillAssignment): LooseObject => ({
    id: item.id && item.id.length > 0 ? item.id : null,
    characterId: item.characterId,
    skillAssignmentSkillId: item.skill?.id,
    mastery: item.mastery,
    percentageValue: item.percentageValue,
    skillPointsUsed: item.skillPointsUsed,
    notes: item.notes,
  }),
});

const magicalItemAssignmentActions = createDefaultActions({
  actions: {
    list: listMagicalItemAssignments,
    read: getMagicalItemAssignment,
    create: createMagicalItemAssignment,
    update: updateMagicalItemAssignment,
    delete: deleteMagicalItemAssignment,
  },
  mappingFunction: (item: MagicalItemAssignment): LooseObject => ({
    id: item.id && item.id.length > 0 ? item.id : null,
    characterId: item.characterId,
    magicalItemId: item.magicalItem?.id,
    location: item.location,
    notes: item.notes,
  }),
});

const characterCompanionActions = createDefaultActions({
  actions: {
    list: listCharacterCompanions,
    read: getCharacterCompanion,
    create: createCharacterCompanion,
    update: updateCharacterCompanion,
    delete: deleteCharacterCompanion,
  },
  mappingFunction: (item: CharacterCompanion): LooseObject => ({
    id: item.id && item.id.length > 0 ? item.id : null,
    characterId: item.characterId,
    name: item.name,
    type: item.type,
    health: item.health,
    combatValues: item.combatValues,
    damage: item.damage,
    characterCompanionWeaponId: item.weapon?.id,
    attacksPerTurn: item.attacksPerTurn,
    maxDistance: item.maxDistance,
    maxLoad: item.maxLoad,
    badHabit: item.badHabit,
    specialAbilities: item.specialAbilities,
    notes: item.notes,
  }),
});

const proxy = {
  defaultActions,
  weaponAssignmentActions,
  skillAssignmentActions,
  magicalItemAssignmentActions,
  characterCompanionActions,
};

export default proxy;

export * from "./types";

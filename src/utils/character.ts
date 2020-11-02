import { Armour } from "@/store/modules/armour";
import { Character } from "@/store/modules/character";
import { Shield } from "@/store/modules/shield";

const calculateTotal = (
  base?: number,
  spentModifier?: number,
  otherModifier?: number,
  abilityModifier?: number
) => {
  return (
    (base || 0) +
    (spentModifier || 0) +
    (otherModifier || 0) +
    (abilityModifier || 0)
  );
};

const calculateAbilityModifier = (
  abilities: Array<{ value?: number; modifier?: number }>
): number => {
  const values = abilities.map(({ value, modifier }) => {
    const result = (value || 0) - 10 - (modifier || 0);
    return result > 0 ? result : 0;
  });
  return values.reduce((acc, value) => acc + value);
};

export const movementPreventionValueTotal = (
  armour?: Armour,
  shield?: Shield
): number => {
  return (
    (armour?.movementPreventionValue || 0) +
    (shield?.movementPreventionValue || 0)
  );
};

const calculateInitiationAbilityModifier = (
  character: Character,
  inArmour = false
): number => {
  const mpv = movementPreventionValueTotal(character.armour, character.shield);
  return calculateAbilityModifier([
    { value: character.abilities?.agility, modifier: inArmour ? mpv : 0 },
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const initiationTotal = (
  character: Character,
  inArmour = false
): number => {
  return calculateTotal(
    character.baseCombatValues?.initiation,
    character.spentCombatValueModifiers?.initiation,
    character.otherCombatValueModifiers?.initiation,
    calculateInitiationAbilityModifier(character, inArmour)
  );
};

const calculateStrengthAbilityModifier = (
  character: Character,
  inArmour?: boolean
): number => {
  const mpv = movementPreventionValueTotal(character.armour, character.shield);
  return calculateAbilityModifier([
    { value: character.abilities?.strength },
    { value: character.abilities?.agility, modifier: inArmour ? mpv : 0 },
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const offenceTotal = (
  character: Character,
  inArmour?: boolean
): number => {
  return calculateTotal(
    character.baseCombatValues?.offence,
    character.spentCombatValueModifiers?.offence,
    character.otherCombatValueModifiers?.offence,
    calculateStrengthAbilityModifier(character, inArmour)
  );
};

const calculateDefenceAbilityModifier = (
  character: Character,
  inArmour?: boolean
): number => {
  const mpv = movementPreventionValueTotal(character.armour, character.shield);
  return calculateAbilityModifier([
    { value: character.abilities?.agility, modifier: inArmour ? mpv : 0 },
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const defenceTotal = (
  character: Character,
  inArmour?: boolean,
  withShield?: boolean
): number => {
  const total = calculateTotal(
    character.baseCombatValues?.defence,
    character.spentCombatValueModifiers?.defence,
    character.otherCombatValueModifiers?.defence,
    calculateDefenceAbilityModifier(character, inArmour)
  );
  return withShield
    ? total + (character.shield?.combatValues?.defence || 0)
    : total;
};

const calculateAimingAbilityModifier = (
  character: Character,
  inArmour?: boolean
): number => {
  const mpv = movementPreventionValueTotal(character.armour, character.shield);
  return calculateAbilityModifier([
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const aimingTotal = (
  character: Character,
  inArmour?: boolean
): number => {
  return calculateTotal(
    character.baseCombatValues?.aiming,
    character.spentCombatValueModifiers?.aiming,
    character.otherCombatValueModifiers?.aiming,
    calculateAimingAbilityModifier(character, inArmour)
  );
};

export const isCharacterMovementRestricted = (
  character: Character
): boolean => {
  return movementPreventionValueTotal(character.armour, character.shield) > 0;
};

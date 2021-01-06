import { Mastery } from "@/API";
import { Armour } from "@/store/modules/armour";
import { Character } from "@/store/modules/character";
import { Shield } from "@/store/modules/shield";
import { Weapon } from "@/store/modules/weapon";
import { CombatValues, SpellResistanceValues } from "@/store/types";
import {
  applyMasterSkillToCombatValues,
  applyUnskilledPenaltyToCombatValues,
} from "./combatValues";

export const abilityValueAbove10 = (ability?: number): number => {
  const base = (ability || 0) - 10;
  return base > 0 ? base : 0;
};

const calculateCombatValueTotal = (
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

const calculateCombatValueAbilityModifier = (
  abilities: Array<{ value?: number; modifier?: number }>
): number => {
  const values = abilities.map(({ value, modifier }) => {
    const result = (value || 0) - 10 - (modifier || 0);
    return result > 0 ? result : 0;
  });
  return values.reduce((acc, value) => acc + value);
};

type MovementPreventionFunction = (params: {
  armour?: Armour;
  armourMastery?: Mastery;
  shield?: Shield;
  shieldMastery?: Mastery;
}) => number;

export const movementPreventionValueTotal: MovementPreventionFunction = ({
  armour,
  armourMastery,
  shield,
  shieldMastery,
}) => {
  return (
    (armourMastery === Mastery.MASTER
      ? 0
      : armour?.movementPreventionValue || 0) +
    (shieldMastery === Mastery.MASTER
      ? 0
      : shield?.movementPreventionValue || 0)
  );
};

const calculateInitiationAbilityModifier = (
  character: Character,
  inArmour = false
): number => {
  const mpv = movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    { value: character.abilities?.agility, modifier: inArmour ? mpv : 0 },
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const initiationTotal = (
  character: Character,
  inArmour = false
): number => {
  return calculateCombatValueTotal(
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
  const mpv = movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    { value: character.abilities?.strength },
    { value: character.abilities?.agility, modifier: inArmour ? mpv : 0 },
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const offenceTotal = (
  character: Character,
  inArmour?: boolean
): number => {
  return calculateCombatValueTotal(
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
  const mpv = movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    { value: character.abilities?.agility, modifier: inArmour ? mpv : 0 },
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const defenceTotal = (
  character: Character,
  inArmour?: boolean,
  withShield?: boolean
): number => {
  const total = calculateCombatValueTotal(
    character.baseCombatValues?.defence,
    character.spentCombatValueModifiers?.defence,
    character.otherCombatValueModifiers?.defence,
    calculateDefenceAbilityModifier(character, inArmour)
  );
  return withShield && character.shieldInHand
    ? total + (character.shield?.combatValues?.defence || 0)
    : total;
};

const calculateAimingAbilityModifier = (
  character: Character,
  inArmour?: boolean
): number => {
  const mpv = movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    { value: character.abilities?.dexterity, modifier: inArmour ? mpv : 0 },
  ]);
};

export const aimingTotal = (
  character: Character,
  inArmour?: boolean
): number => {
  return calculateCombatValueTotal(
    character.baseCombatValues?.aiming,
    character.spentCombatValueModifiers?.aiming,
    character.otherCombatValueModifiers?.aiming,
    calculateAimingAbilityModifier(character, inArmour)
  );
};

export const isCharacterMovementRestricted = (
  character: Character
): boolean => {
  return movementPreventionValueTotal(character) > 0;
};

type CombatValuesWithWeaponInput = {
  character: Character;
  weapon?: Weapon;
  mastery?: Mastery;
  inArmour?: boolean;
  withShield?: boolean;
};

export const combatValuesWithWeapon = ({
  character,
  weapon,
  mastery,
  inArmour,
  withShield,
}: CombatValuesWithWeaponInput) => {
  const base: CombatValues = {
    initiation: calculateCombatValueTotal(
      initiationTotal(character, inArmour),
      weapon?.combatValues?.initiation
    ),
    offence: calculateCombatValueTotal(
      offenceTotal(character, inArmour),
      weapon?.combatValues?.offence
    ),
    defence: calculateCombatValueTotal(
      defenceTotal(character, inArmour, withShield && character.shieldInHand),
      weapon?.combatValues?.defence
    ),
    aiming: calculateCombatValueTotal(
      aimingTotal(character, inArmour),
      weapon?.combatValues?.aiming
    ),
  };

  if (!mastery) return applyUnskilledPenaltyToCombatValues(base);
  else if (mastery === Mastery.MASTER)
    return applyMasterSkillToCombatValues(base);
  else return base;
};

export const calculateSpellResistanceTotal = (
  values?: SpellResistanceValues
): number => {
  const staticShield = values?.staticShield || 0;
  const dynamicShield = values?.dynamicShield || 0;
  const innate = values?.innate || 0;
  const magical = values?.magical || 0;

  return staticShield + dynamicShield + innate + magical;
};

export const calculateInnateSpellResistance = (ability?: number): number => {
  return abilityValueAbove10(ability);
};

export const characterToLink = (
  character: Character,
  page?: number,
  selector?: string
): string => {
  const type = character.playerCharacter
    ? "player-characters"
    : "non-player-characters";
  const link = `/${type}/${character.id}`;
  if (page)
    if (selector) return `${link}/${page.toString()}#${selector}`;
    else return `${link}/${page.toString()}`;
  else return link;
};

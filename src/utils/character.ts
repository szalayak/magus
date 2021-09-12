import {
  Character,
  Shield,
  Weapon,
  Armour,
  CombatValues,
  Mastery,
  SpellResistanceValues,
  SpellResistance,
} from "@/store";
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
): number => {
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
  armourActive?: boolean;
  shield?: Shield;
  shieldMastery?: Mastery;
  shieldInHand?: boolean;
}) => number;

export const movementPreventionValueTotal: MovementPreventionFunction = ({
  armour,
  armourMastery,
  armourActive,
  shield,
  shieldMastery,
  shieldInHand,
}) => {
  return (
    (!armour || !armourActive || armourMastery === Mastery.MASTER
      ? 0
      : armour?.movementPreventionValue || 0) +
    (!shield || !shieldInHand || shieldMastery === Mastery.MASTER
      ? 0
      : shield?.movementPreventionValue || 0)
  );
};

const calculateInitiationAbilityModifier = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  const mpv = ignoreMovementPrevention
    ? 0
    : movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    {
      value: character.abilities?.agility,
      modifier: mpv,
    },
    {
      value: character.abilities?.dexterity,
      modifier: mpv,
    },
  ]);
};

export const initiationTotal = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  return calculateCombatValueTotal(
    character.baseCombatValues?.initiation,
    character.spentCombatValueModifiers?.initiation,
    character.otherCombatValueModifiers?.initiation,
    calculateInitiationAbilityModifier(character, ignoreMovementPrevention)
  );
};

const calculateStrengthAbilityModifier = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  const mpv = ignoreMovementPrevention
    ? 0
    : movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    { value: character.abilities?.strength },
    {
      value: character.abilities?.agility,
      modifier: mpv,
    },
    {
      value: character.abilities?.dexterity,
      modifier: mpv,
    },
  ]);
};

export const offenceTotal = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  return calculateCombatValueTotal(
    character.baseCombatValues?.offence,
    character.spentCombatValueModifiers?.offence,
    character.otherCombatValueModifiers?.offence,
    calculateStrengthAbilityModifier(character, ignoreMovementPrevention)
  );
};

const calculateDefenceAbilityModifier = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  const mpv = ignoreMovementPrevention
    ? 0
    : movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    {
      value: character.abilities?.agility,
      modifier: mpv,
    },
    {
      value: character.abilities?.dexterity,
      modifier: mpv,
    },
  ]);
};

export const defenceTotal = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  const total = calculateCombatValueTotal(
    character.baseCombatValues?.defence,
    character.spentCombatValueModifiers?.defence,
    character.otherCombatValueModifiers?.defence,
    calculateDefenceAbilityModifier(character, ignoreMovementPrevention)
  );
  return !!character.shield && character.shieldInHand
    ? total + (character.shield?.combatValues?.defence || 0)
    : total;
};

const calculateAimingAbilityModifier = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  const mpv = ignoreMovementPrevention
    ? 0
    : movementPreventionValueTotal(character);
  return calculateCombatValueAbilityModifier([
    {
      value: character.abilities?.dexterity,
      modifier: mpv,
    },
  ]);
};

export const aimingTotal = (
  character: Character,
  ignoreMovementPrevention?: boolean
): number => {
  return calculateCombatValueTotal(
    character.baseCombatValues?.aiming,
    character.spentCombatValueModifiers?.aiming,
    character.otherCombatValueModifiers?.aiming,
    calculateAimingAbilityModifier(character, ignoreMovementPrevention)
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
};

export const combatValuesWithWeapon = ({
  character,
  weapon,
  mastery,
}: CombatValuesWithWeaponInput): CombatValues => {
  const base: CombatValues = {
    initiation: calculateCombatValueTotal(
      initiationTotal(character),
      weapon?.combatValues?.initiation
    ),
    offence: calculateCombatValueTotal(
      offenceTotal(character),
      weapon?.combatValues?.offence
    ),
    defence: calculateCombatValueTotal(
      defenceTotal(character),
      weapon?.combatValues?.defence
    ),
    aiming: calculateCombatValueTotal(
      aimingTotal(character),
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
  selector?: string,
  details?: boolean
): string => {
  const type = character.playerCharacter
    ? "player-characters"
    : "non-player-characters";
  const link = details
    ? `/${type}/${character.id}/details`
    : `/${type}/${character.id}`;
  if (selector) return `${link}#${selector}`;
  else return link;
};

export const copySpellResistance = (
  spellResistance?: SpellResistance,
  astral?: number,
  willpower?: number
): SpellResistance => ({
  astral: {
    staticShield: spellResistance?.astral?.staticShield,
    dynamicShield: spellResistance?.astral?.dynamicShield,
    innate:
      spellResistance?.astral?.innate || calculateInnateSpellResistance(astral),
    magical: spellResistance?.astral?.magical,
    modifier: spellResistance?.astral?.modifier,
  },
  mental: {
    staticShield: spellResistance?.mental?.staticShield,
    dynamicShield: spellResistance?.mental?.dynamicShield,
    innate:
      spellResistance?.mental?.innate ||
      calculateInnateSpellResistance(willpower),
    magical: spellResistance?.mental?.magical,
    modifier: spellResistance?.mental?.modifier,
  },
});

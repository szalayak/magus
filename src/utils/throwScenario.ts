import { Dice } from "@/API";
import i18n from "@/i18n";
import { SkillAssignment, WeaponAssignment } from "@/store";
import { ThrowScenario } from "@/store/types";
import { abilityValueAbove10 } from "./character";
import { throwDice } from "./dice";

export interface ThrowResult {
  dice: Dice;
  result: number;
}
export interface ThrowScenarioResult {
  throwScenario: ThrowScenario;
  throwResults: ThrowResult[];
  throwModifier?: number;
  modifier?: number;
  total: number;
}

export interface AbilityCheckResult {
  result: ThrowScenarioResult;
  abilityName?: string;
  abilityValue: number;
  success?: boolean;
}

export interface SkillCheckResult {
  result: ThrowScenarioResult;
  skill: SkillAssignment;
  success?: boolean;
}

export interface CombatValueThrowResult {
  result: ThrowScenarioResult;
  name?: string;
  value?: number;
  id?: string;
  weapon?: WeaponAssignment;
  damageBonus?: number;
}

export interface SpellResistanceThrowResult {
  result: ThrowScenarioResult;
  name?: string;
  value?: number;
}

export const getThrowScenarioString = (scenario: ThrowScenario = {}) => {
  const iterationCount =
    scenario?.iterationCount && scenario?.iterationCount > 1
      ? scenario.iterationCount.toString()
      : "";
  return `${iterationCount}${scenario?.dice ? i18n.t(scenario.dice) : ""}${
    scenario?.modifier ? "+" + scenario.modifier : ""
  }`;
};

export const parseThrowScenarioString = (value: string): ThrowScenario => {
  const iterationCount = value.match(/^[0-9]+/g)?.join("") || "";
  const dice = value
    .match(/[A-Z][0-9]+/g)
    ?.join("")
    .replace(/[A-Z]/g, "D") as Dice;
  const modifier = value
    .match(/\+[0-9]+/g)
    ?.join("")
    .slice(1);
  return {
    iterationCount: iterationCount ? parseInt(iterationCount) : undefined,
    dice,
    modifier: modifier ? parseInt(modifier) : undefined,
  };
};

export const executeThrowScenario = (
  throwScenario: ThrowScenario,
  modifier?: number
): ThrowScenarioResult => {
  const throwResults: ThrowResult[] = [];

  if (throwScenario.dice)
    for (let i = 0; i < (throwScenario.iterationCount || 1); i++) {
      throwResults.push({
        dice: throwScenario.dice,
        result: throwDice(throwScenario.dice),
      });
    }

  return {
    throwScenario,
    throwResults,
    throwModifier: throwScenario.modifier,
    modifier,
    total:
      throwResults.reduce(
        (acc: number, curr: ThrowResult) => (acc += curr.result),
        0
      ) +
      (throwScenario.modifier || 0) +
      (modifier || 0),
  };
};

export const abilityCheck = ({
  result,
  abilityName,
  abilityValue,
}: {
  result: ThrowScenarioResult;
  abilityName?: string;
  abilityValue: number;
}): AbilityCheckResult => {
  return {
    result,
    abilityName,
    abilityValue,
    success:
      result.total < abilityValueAbove10(abilityValue) + (result.modifier || 0),
  };
};

export const skillCheck = ({
  result,
  skill,
}: {
  result: ThrowScenarioResult;
  skill: SkillAssignment;
}) => {
  return {
    result,
    skill,
    success:
      result.total < (skill.percentageValue || 0) + (result.modifier || 0),
  };
};

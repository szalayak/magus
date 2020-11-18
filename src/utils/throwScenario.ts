import { Dice } from "@/API";
import { ThrowScenario } from "@/store/types";
import VueI18n from "vue-i18n";

export const getThrowScenarioString = (
  scenario: ThrowScenario,
  i18n: VueI18n
) => {
  const iterationCount =
    scenario.iterationCount && scenario.iterationCount > 1
      ? scenario.iterationCount.toString()
      : "";
  return `${iterationCount}${scenario.dice ? i18n.t(scenario.dice) : ""}${
    scenario.modifier ? "+" + scenario.modifier : ""
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

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

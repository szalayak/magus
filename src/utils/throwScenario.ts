import { ThrowScenario } from "@/store/types";
import VueI18n from "vue-i18n";

export const getThrowScenarioString = (
  scenario: ThrowScenario,
  i18n: VueI18n
) => {
  return `${scenario.iterationCount?.toString() || ""}${
    scenario.dice ? i18n.t(scenario.dice) : ""
  }${scenario.modifier ? "+" + scenario.modifier : ""}`;
};

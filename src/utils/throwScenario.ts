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

// export const parseThrowScenarioString = (value: string): ThrowScenario => {
//   const iterationCount = parseInt(value.match(/^[0-9]+/g)?.join("") || "1");
//   // const dice = "D" + value.match(/[A-Z][0-9]+/g)?.join("");
//   // const modifier = parseInt(value.match(/(?<=\+)[0-9]+/g)?.join("") || "0");
//   return {
//     iterationCount,
//   };
// };

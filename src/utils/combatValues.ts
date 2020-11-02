import { CombatValues } from "@/store/types";
import { a } from "aws-amplify";
import VueI18n from "vue-i18n";

export const combatValuesToString = (
  combatValues: CombatValues,
  i18n: VueI18n
): string => {
  const initiationValueString = combatValues.initiation
    ? `${i18n.t("ip")}: ${combatValues.initiation.toString()}`
    : "";
  const offenceValueString = combatValues.offence
    ? `${i18n.t("ip")}: ${combatValues.offence.toString()}`
    : "";
  const defenceValueString = combatValues.defence
    ? `${i18n.t("ip")}: ${combatValues.defence.toString()}`
    : "";
  const aimingValueString = combatValues.aiming
    ? `${i18n.t("ip")}: ${combatValues.aiming.toString()}`
    : "";
  return `${initiationValueString}${offenceValueString}${defenceValueString}${aimingValueString}`;
};

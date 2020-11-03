import { CombatValues } from "@/store/types";
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

export const applyMasterSkillToCombatValues = (
  combatValues?: CombatValues
): CombatValues => {
  const { initiation, offence, defence, aiming } = combatValues || {};
  return {
    initiation: (initiation || 0) + 5,
    offence: (offence || 0) + 10,
    defence: (defence || 0) + 10,
    aiming: (aiming || 0) + 5,
  };
};

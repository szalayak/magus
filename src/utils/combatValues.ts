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

export enum MasterSkillCombatValueModifiers {
  initiation = 5,
  offence = 10,
  defence = 10,
  aiming = 5,
}

export const applyMasterSkillToCombatValues = (
  combatValues?: CombatValues
): CombatValues => {
  const { initiation, offence, defence, aiming } = combatValues || {};
  return {
    initiation: (initiation || 0) + MasterSkillCombatValueModifiers.initiation,
    offence: (offence || 0) + MasterSkillCombatValueModifiers.offence,
    defence: (defence || 0) + MasterSkillCombatValueModifiers.defence,
    aiming: (aiming || 0) + MasterSkillCombatValueModifiers.aiming,
  };
};

export enum UnskilledCombatValueModifiers {
  initiation = -10,
  offence = -25,
  defence = -20,
  aiming = -30,
}

export const applyUnskilledPenaltyToCombatValues = (
  combatValues?: CombatValues
): CombatValues => {
  let { initiation, offence, defence, aiming } = combatValues || {};
  initiation = (initiation || 0) + UnskilledCombatValueModifiers.initiation;
  offence = (offence || 0) + UnskilledCombatValueModifiers.offence;
  defence = (defence || 0) + UnskilledCombatValueModifiers.defence;
  aiming = (aiming || 0) + UnskilledCombatValueModifiers.aiming;

  return {
    initiation: initiation > 0 ? initiation : 0,
    offence: offence > 0 ? offence : 0,
    defence: defence > 0 ? defence : 0,
    aiming: aiming > 0 ? aiming : 0,
  };
};

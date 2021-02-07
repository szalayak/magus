import { Dice } from "@/API";
import {
  AbilityCheckResult,
  movementPreventionValueTotal,
  ThrowScenarioResult,
  abilityCheck,
  executeThrowScenario,
  parseThrowScenarioString,
} from "@/utils";
import CharacterQuickView from "./CharacterQuickView";

export default class CharacterAbilitiesQuickViewBase extends CharacterQuickView {
  abilityCheckResult: AbilityCheckResult | null = null;

  get abilities() {
    return this.character.abilities || {};
  }

  get abilityCheckStatus() {
    return {
      show: !!this.abilityCheckResult,
      type:
        this.abilityCheckResult && this.abilityCheckResult.success
          ? "success"
          : "error",
    };
  }

  get agilityInArmour() {
    return this.abilities.agility
      ? this.abilities.agility - movementPreventionValueTotal(this.character)
      : 0;
  }

  get dexterityInArmour() {
    return this.abilities.dexterity
      ? this.abilities.dexterity - movementPreventionValueTotal(this.character)
      : 0;
  }

  onCheckResult(
    result: ThrowScenarioResult,
    abilityName: string,
    abilityValue: number
  ) {
    this.abilityCheckResult = abilityCheck({
      result,
      abilityName,
      abilityValue,
    });
  }

  created() {
    if (this.bus) {
      this.bus.$on("ability-check", (ability: string, modifier: number) => {
        this.abilityCheckResult = abilityCheck({
          result: {
            ...executeThrowScenario(parseThrowScenarioString(Dice.D10)),
            modifier,
          },
          abilityName: ability,
          abilityValue: this.abilities[ability] || 0,
        });
      });
    }
  }
}

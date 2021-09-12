import { Dice } from "@/API";
import { Abilities } from "@/store";
import {
  AbilityCheckResult,
  movementPreventionValueTotal,
  ThrowScenarioResult,
  abilityCheck,
  executeThrowScenario,
  parseThrowScenarioString,
} from "@/utils";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";

interface AbilityCheckStatus {
  show: boolean;
  type: string;
}
@Component({})
export default class CharacterAbilitiesQuickViewBase extends CharacterQuickView {
  abilityCheckResult: AbilityCheckResult | null = null;

  get abilities(): Abilities {
    return this.character.abilities || {};
  }

  get abilityCheckStatus(): AbilityCheckStatus {
    return {
      show: !!this.abilityCheckResult,
      type:
        this.abilityCheckResult && this.abilityCheckResult.success
          ? "success"
          : "error",
    };
  }

  get agilityInArmour(): number {
    return this.abilities.agility
      ? this.abilities.agility - movementPreventionValueTotal(this.character)
      : 0;
  }

  get dexterityInArmour(): number {
    return this.abilities.dexterity
      ? this.abilities.dexterity - movementPreventionValueTotal(this.character)
      : 0;
  }

  onCheckResult(
    result: ThrowScenarioResult,
    abilityName: string,
    abilityValue: number
  ): void {
    this.abilityCheckResult = abilityCheck({
      result,
      abilityName,
      abilityValue,
    });
  }

  created(): void {
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

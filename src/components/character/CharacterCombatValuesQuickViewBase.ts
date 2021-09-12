import { Mastery, Dice } from "@/API";
import {
  WeaponAssignment,
  CombatValues,
  ThrowScenario,
  Armour,
  Weapon,
} from "@/store";
import {
  aimingTotal,
  combatValuesWithWeapon,
  CombatValueThrowResult,
  defenceTotal,
  executeThrowScenario,
  getThrowScenarioString,
  initiationTotal,
  localiseItem,
  MasterSkillCombatValueModifiers,
  offenceTotal,
  parseThrowScenarioString,
  ThrowScenarioResult,
  UnskilledCombatValueModifiers,
} from "@/utils";
import Component from "vue-class-component";
import { TranslateResult } from "vue-i18n";
import CharacterQuickView from "./CharacterQuickView";

interface ThrowStatus {
  show: boolean;
}

interface CombatValuesWithWeapon {
  id?: string;
  weapon?: Weapon;
  mastery?: Mastery;
  combatValues: CombatValues;
}

@Component({})
export default class CharacterCombatValuesQuickViewBase extends CharacterQuickView {
  combatValueThrowResult: CombatValueThrowResult | null = null;

  get damageBonus(): number {
    return this.character.abilities?.strength &&
      this.character.abilities?.strength > 16
      ? this.character.abilities.strength - 16
      : 0;
  }

  get combatValueThrowStatus(): ThrowStatus {
    return { show: !!this.combatValueThrowResult };
  }

  get combatValueThrowResults(): number[] {
    return (
      this.combatValueThrowResult?.result.throwResults.map(r => r.result) || []
    );
  }

  get combatValueThrowResultWeapon(): string | undefined {
    return this.combatValueThrowResult?.weapon?.weapon?.description?.title;
  }

  get weapons(): WeaponAssignment[] {
    return this.character.weapons
      ?.filter(w => w.inHand)
      .map(w => ({
        ...w,
        weapon: w.weapon ? localiseItem(w.weapon, this.$i18n.locale) : w.weapon,
      })) as WeaponAssignment[];
  }

  get armour(): Armour {
    return this.character.armour || {};
  }

  get combatValuesWithWeapons(): CombatValuesWithWeapon[] {
    return this.weapons?.map(w => {
      return {
        id: w.id,
        weapon: w.weapon,
        mastery: w.mastery,
        combatValues: combatValuesWithWeapon({
          character: this.character,
          weapon: w.weapon,
          mastery: w.mastery,
        }),
      };
    });
  }

  get combatValuesWithoutWeapon(): CombatValues {
    return {
      initiation: initiationTotal(this.character),
      offence: offenceTotal(this.character),
      defence: defenceTotal(this.character),
      aiming: aimingTotal(this.character),
    };
  }

  damageToString(damage: ThrowScenario): string {
    return getThrowScenarioString(damage);
  }

  masteryToString(mastery: Mastery): TranslateResult | undefined {
    return this.$t(mastery);
  }

  get mastery(): typeof Mastery {
    return Mastery;
  }

  get masterSkillCombatValueModifiers(): typeof MasterSkillCombatValueModifiers {
    return MasterSkillCombatValueModifiers;
  }

  get unskilledCombatValueModifiers(): typeof UnskilledCombatValueModifiers {
    return UnskilledCombatValueModifiers;
  }

  onThrowResult(
    result: ThrowScenarioResult,
    name: string,
    value?: number,
    id?: string,
    weapon?: WeaponAssignment,
    damageBonus?: number
  ): void {
    const hasDamageBonus =
      damageBonus && damageBonus > 0 && !weapon?.weapon?.ranged;
    const damageBonusValue = hasDamageBonus ? damageBonus || 0 : 0;
    this.combatValueThrowResult = {
      result: hasDamageBonus
        ? {
            ...result,
            total: result.total + damageBonusValue,
            modifier: (result.modifier || 0) + damageBonusValue,
          }
        : result,
      name,
      value,
      id,
      weapon,
      damageBonus: damageBonusValue,
    };
  }

  async toggleShieldInHand(): Promise<void> {
    this.loading = true;
    const shieldInHand = this.character.shieldInHand ? false : true;
    try {
      await this.$store.dispatch("character/update", {
        id: this.character.id,
        shieldInHand,
      });
    } catch (error) {
      this.throwError(error);
    }
    this.loading = false;
  }

  created(): void {
    if (this.bus) {
      const weapon =
        this.combatValuesWithWeapons.length > 0
          ? this.combatValuesWithWeapons[0]
          : undefined;
      const combatValues = weapon
        ? weapon.combatValues
        : this.combatValuesWithoutWeapon;

      this.bus.$on("initiation", () => {
        this.combatValueThrowResult = {
          result: executeThrowScenario(parseThrowScenarioString(Dice.D10)),
          name: this.$t("initiation").toString(),
          value: combatValues.initiation,
          id: "initiation",
          weapon,
        };
      });

      this.bus.$on("offence", () => {
        this.combatValueThrowResult = {
          result: executeThrowScenario(parseThrowScenarioString(Dice.D100)),
          name: this.$t("offence").toString(),
          value: combatValues.offence,
          id: "offence",
          weapon,
        };
      });
    }
  }
}

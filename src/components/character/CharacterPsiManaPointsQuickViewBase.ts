import { MutablePointValue, MagicalAbility } from "@/store";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";

@Component({})
export default class CharacterPsiManaPointsQuickViewBase extends CharacterQuickView {
  get psiPoints(): MutablePointValue {
    return this.character.psiPoints || {};
  }

  get manaPoints(): MutablePointValue {
    return this.character.magicalAbility?.manaPoints || {};
  }

  get magicalAbility(): MagicalAbility {
    return this.character.magicalAbility || {};
  }

  async onCurrentPsiPointsChanged(newValue: number): Promise<void> {
    this.loading = true;
    const psiPoints: MutablePointValue = { ...this.character.psiPoints } || {};
    psiPoints.current = newValue;
    try {
      await this.$store.dispatch("character/update", {
        id: this.character.id,
        psiPoints,
      });
    } catch (error) {
      this.throwError(error);
    }
    this.loading = false;
  }

  async onCurrentManaPointsChanged(newValue: number): Promise<void> {
    this.loading = true;
    const magicalAbility: MagicalAbility = {
      ...this.character.magicalAbility,
    } || { manaPoints: {} };
    if (magicalAbility.manaPoints) magicalAbility.manaPoints.current = newValue;
    try {
      await this.$store.dispatch("character/update", {
        id: this.character.id,
        magicalAbility,
      });
    } catch (error) {
      this.throwError(error);
    }
    this.loading = false;
  }
}

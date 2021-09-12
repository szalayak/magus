import { SpellResistance } from "@/store";
import { calculateSpellResistanceTotal, copySpellResistance } from "@/utils";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";

@Component({})
export default class CharacterSpellResistanceQuickViewBase extends CharacterQuickView {
  get astralSpellResistanceTotal(): number {
    return calculateSpellResistanceTotal(this.spellResistance.astral);
  }

  get mentalSpellResistanceTotal(): number {
    return calculateSpellResistanceTotal(this.spellResistance.mental);
  }

  get spellResistance(): SpellResistance {
    return copySpellResistance(
      this.character.spellResistance,
      this.character.abilities?.astral,
      this.character.abilities?.willpower
    );
  }
}

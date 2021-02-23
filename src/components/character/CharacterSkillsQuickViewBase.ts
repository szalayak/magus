import { Mastery } from "@/API";
import { localiseItem } from "@/utils";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";

@Component({})
export default class CharacterSkillsQuickViewBase extends CharacterQuickView {
  masteryToString(mastery: Mastery) {
    return this.$t(mastery);
  }

  get skills() {
    return this.character.skills
      ?.filter(s => !s.skill?.percentageSkill)
      .map(s => ({
        ...s,
        skill: s.skill ? localiseItem(s.skill, this.$i18n.locale) : s.skill,
      }));
  }
}

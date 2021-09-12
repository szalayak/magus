import { Mastery } from "@/API";
import { SkillAssignment } from "@/store";
import { localiseItem } from "@/utils";
import Component from "vue-class-component";
import { TranslateResult } from "vue-i18n";
import CharacterQuickView from "./CharacterQuickView";

@Component({})
export default class CharacterSkillsQuickViewBase extends CharacterQuickView {
  masteryToString(mastery: Mastery): TranslateResult | undefined {
    return this.$t(mastery);
  }

  get skills(): SkillAssignment[] | undefined {
    return this.character.skills
      ?.filter(s => !s.skill?.percentageSkill)
      .map(s => ({
        ...s,
        skill: s.skill ? localiseItem(s.skill, this.$i18n.locale) : s.skill,
      }));
  }
}

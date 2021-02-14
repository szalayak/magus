import { SkillAssignment } from "@/store";
import {
  SkillCheckResult,
  localiseItem,
  ThrowScenarioResult,
  skillCheck,
} from "@/utils";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";

@Component({})
export default class CharacterPercentageSkillsQuickViewBase extends CharacterQuickView {
  skillCheckResult: SkillCheckResult | null = null;

  get skillCheckStatus() {
    return {
      show: !!this.skillCheckResult,
      type:
        this.skillCheckResult && this.skillCheckResult.success
          ? "success"
          : "error",
    };
  }

  get skills() {
    return this.character.skills
      ?.filter(s => s.skill?.percentageSkill)
      .map(s => ({
        ...s,
        skill: s.skill ? localiseItem(s.skill, this.$i18n.locale) : s.skill,
      }));
  }

  onCheckResult(result: ThrowScenarioResult, skill: SkillAssignment) {
    this.skillCheckResult = skillCheck({ result, skill });
  }
}

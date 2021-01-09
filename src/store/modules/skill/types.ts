import { Editable, ValueRange } from "@/store";
import { PageableState } from "@/store/types";

export interface Skill extends Editable {
  skillGroup?: ValueRange;
  percentageSkill?: boolean;
  basicCost?: number;
  masterCost?: number;
}

export interface SkillState extends PageableState {
  items: Skill[];
}

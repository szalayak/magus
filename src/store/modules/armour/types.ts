import { Editable } from "@/store";
import { PageableState } from "@/store/types";

export interface Armour extends Editable {
  weight?: string;
  movementPreventionValue?: number;
  damageReductionValue?: number;
  price?: number;
}

export interface ArmourState extends PageableState {
  items: Armour[];
}

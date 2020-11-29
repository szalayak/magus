import { Editable } from "@/store";
import { CombatValues, PageableState, ThrowScenario } from "@/store/types";

export interface Shield extends Editable {
  combatValues?: CombatValues;
  damage?: ThrowScenario;
  movementPreventionValue?: number;
  weight?: string;
  price?: number;
  attacksPerTurn?: number;
}

export interface ShieldState extends PageableState {
  items: Shield[];
}

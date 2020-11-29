import { Editable, ValueRange } from "@/store";
import { CombatValues, PageableState, ThrowScenario } from "@/store/types";

export interface Weapon extends Editable {
  weaponType?: ValueRange;
  weight?: string;
  price?: number;
  attackRange?: number;
  combatValues?: CombatValues;
  damage?: ThrowScenario;
  attacksPerTurn?: number;
  ranged?: boolean;
}

export interface WeaponState extends PageableState {
  items: Weapon[];
}

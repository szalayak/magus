import { Dice, Locale } from "@/API";

export interface Description {
  locale: Locale;
  title: string;
  description?: string;
}

export interface Describable {
  descriptions?: Description[];
  description?: Description;
}

export interface Identifiable {
  id: string;
}

export interface Editable extends Identifiable, Describable {}

export interface ThrowScenario {
  dice?: Dice;
  iterationCount?: number;
  modifier?: number;
}

export interface CombatValues {
  initiation?: number;
  offence?: number;
  defence?: number;
  aiming?: number;
}

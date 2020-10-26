import {
  CompanionType,
  Dice,
  LanguageLevel,
  Locale,
  Mastery,
  Sex,
} from "@/API";
import { MagicalItem } from "./modules/magicalItem";
import { Skill } from "./modules/skill";
import { Weapon } from "./modules/weapon";

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

export interface S3Object {
  bucket: string;
  region: string;
  key: string;
}

export interface CharacterBasicInfo {
  image?: S3Object;
  sex?: Sex;
  height?: string;
  weight?: string;
  hair?: string;
  eyes?: string;
  age?: number;
  visibleAge?: number;
  family?: string;
  attire?: string;
  personalityTraits?: string;
  specialAbilities?: string;
  likes?: string;
  dislikes?: string;
  fears?: string;
  companions?: string;
  fame?: number;
  religion?: string;
  country?: string;
  school?: string;
  holySymbol?: S3Object;
  coatOfArms?: S3Object;
}

export interface CharacterLevel {
  currentLevel: number;
  currentExperience?: number;
  experienceForNextLevel?: number;
}

export interface Abilities {
  strength?: number;
  agility?: number;
  dexterity?: number;
  stamina?: number;
  health?: number;
  beauty?: number;
  intelligence?: number;
  willpower?: number;
  astral?: number;
}

export interface MutablePointValue {
  current?: number;
  max?: number;
}

export interface HealthInformation {
  vitality?: MutablePointValue;
  baseVitality?: number;
  hitPoints?: MutablePointValue;
  baseHitPoints?: number;
  hitPointsPerLevel?: string;
}

export interface SpellResistanceValues {
  staticShield?: number;
  dynamicShield?: number;
  innate?: number;
  magical?: number;
  modifier?: number;
}

export interface SpellResistance {
  astral?: SpellResistanceValues;
  mental?: SpellResistanceValues;
}

export interface MagicalAbility {
  manaPoints?: MutablePointValue;
  manaPointsPerLevel?: string;
  modifiers?: string;
  manaPointsStoredElsehwere?: string;
  rechargingMethod?: string;
}

export interface LanguageAbility {
  language?: string;
  level?: LanguageLevel;
}

export interface InventoryItem {
  name?: string;
  amount?: string;
  location?: string;
}

export interface Poison {
  name?: string;
  amount?: number;
}

export interface Wallet {
  money?: number;
  mithrill?: string;
  gemstones?: string;
  misc?: string;
}

export interface WeaponAssignment extends Identifiable {
  custom?: boolean;
  weapon?: Weapon;
  descriptions?: Description[];
  weight?: string;
  price?: number;
  attackRange?: number;
  combatValues?: CombatValues;
  damage?: ThrowScenario;
  attacksPerTurn?: number;
  ranged?: boolean;
}

export interface SkillAssignment extends Identifiable {
  skill: Skill;
  mastery?: Mastery;
  percentageValue?: number;
  skillPointsUsed?: number;
}

export interface CharacterCompanion extends Identifiable {
  name: string;
  type?: CompanionType;
  health?: HealthInformation;
  combatValues?: CombatValues;
  damage?: ThrowScenario;
  weapon?: Weapon;
  attacksPerTurn?: number;
  maxDistance?: string;
  maxLoad?: string;
  badHabit?: string;
  specialAbilities?: string;
}

export interface MagicalItemAssignment extends Identifiable {
  magicalItem?: MagicalItem;
  location?: string;
}

import {
  Abilities,
  Armour,
  CharacterBasicInfo,
  CharacterLevel,
  Class,
  CombatValues,
  HealthInformation,
  Identifiable,
  InventoryItem,
  LanguageAbility,
  MagicalAbility,
  MagicalItem,
  MutablePointValue,
  PageableState,
  Poison,
  PsiSchool,
  Race,
  Shield,
  Skill,
  SkillPoints,
  SpellResistance,
  ThrowScenario,
  ValueRange,
  Wallet,
  Weapon,
} from "@/store";
import { Observable, Subscription } from "rxjs";
import { CompanionType, Mastery } from "./proxies";

export { CompanionType, Mastery } from "./proxies";

export interface Assignment extends Identifiable {
  characterId?: string;
}

export interface WeaponAssignment extends Assignment {
  weapon?: Weapon;
  mastery?: Mastery;
  inHand?: boolean;
  breakWeapon?: Mastery;
  disarm?: Mastery;
  arrowCount?: number;
  specialProjectileCount?: number;
  aim?: Mastery;
  horseback?: Mastery;
  notes?: string;
}

export interface SkillAssignment extends Assignment {
  skill?: Skill;
  mastery?: Mastery;
  percentageValue?: number;
  skillPointsUsed?: number;
  notes?: string;
}

export interface CharacterCompanion extends Assignment {
  name?: string;
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
  notes?: string;
}

export interface MagicalItemAssignment extends Assignment {
  magicalItem?: MagicalItem;
  location?: string;
  notes?: string;
}

export interface CharacterCore extends Identifiable {
  name?: string;
  playerCharacter?: boolean;
  startDate?: string;
  dungeonMaster?: string;
  dungeonMasterName?: string;
  owner?: string;
  basicInfo?: CharacterBasicInfo;
  abilities?: Abilities;
  health?: HealthInformation;
  class?: Class;
  subclass?: string;
  specialisation?: string;
  race?: Race;
  personality?: ValueRange;
  level?: CharacterLevel;
  psiUser?: boolean;
  psiSchool?: PsiSchool;
  psiLevel?: number;
  psiPoints?: MutablePointValue;
  spellResistance?: SpellResistance;
  magicUser?: boolean;
  magicalAbility?: MagicalAbility;
  baseCombatValues?: CombatValues;
  spentCombatValueModifiers?: CombatValues;
  otherCombatValueModifiers?: CombatValues;
  combatValueModifiersPerLevel?: number;
  mandatoryCombatValueModifierDistribution?: string;
  wallet?: Wallet;
  skillPoints?: SkillPoints;
  languages?: LanguageAbility[];
  inventory?: InventoryItem[];
  poisons?: Poison[];
  notes?: string;
  armour?: Armour;
  armourMastery?: Mastery;
  armourCurrentDamageReductionValue?: number;
  shield?: Shield;
  shieldMastery?: Mastery;
  shieldInHand?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Character extends CharacterCore {
  weapons?: WeaponAssignment[];
  skills?: SkillAssignment[];
  companions?: CharacterCompanion[];
  magicalItems?: MagicalItemAssignment[];
}

export interface CharacterResults extends PageableState {
  items: CharacterQueryResult[];
  nextToken?: string;
}

export interface WeaponAssignmentQueryResults extends PageableState {
  items: WeaponAssignment[];
  nextToken?: string;
}

export interface SkillAssignmentQueryResults extends PageableState {
  items: SkillAssignment[];
  nextToken?: string;
}

export interface CharacterCompanionQueryResults extends PageableState {
  items: CharacterCompanion[];
  nextToken?: string;
}

export interface MagicalItemAssignmentQueryResults extends PageableState {
  items: MagicalItemAssignment[];
  nextToken?: string;
}

export interface CharacterQueryResult extends CharacterCore {
  weapons?: WeaponAssignmentQueryResults;
  skills?: SkillAssignmentQueryResults;
  companions?: CharacterCompanionQueryResults;
  magicalItems?: MagicalItemAssignmentQueryResults;
}

export interface CharacterState extends PageableState {
  items: Character[];
  subscription?: Subscription;
}

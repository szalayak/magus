/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateValueRangeValueInput = {
  id?: string | null,
  type: ValueRangeType,
  descriptions: Array< DescriptionInput >,
};

export enum ValueRangeType {
  MAIN_CLASS = "MAIN_CLASS",
  PERSONALITY = "PERSONALITY",
  WEAPON_TYPE = "WEAPON_TYPE",
  SKILL_GROUP = "SKILL_GROUP",
}


export type DescriptionInput = {
  locale: Locale,
  title: string,
  description?: string | null,
};

export enum Locale {
  en = "en",
  hu = "hu",
}


export type ModelValueRangeValueConditionInput = {
  type?: ModelValueRangeTypeInput | null,
  and?: Array< ModelValueRangeValueConditionInput | null > | null,
  or?: Array< ModelValueRangeValueConditionInput | null > | null,
  not?: ModelValueRangeValueConditionInput | null,
};

export type ModelValueRangeTypeInput = {
  eq?: ValueRangeType | null,
  ne?: ValueRangeType | null,
};

export type UpdateValueRangeValueInput = {
  id: string,
  type?: ValueRangeType | null,
  descriptions?: Array< DescriptionInput > | null,
};

export type DeleteValueRangeValueInput = {
  id?: string | null,
};

export type CreateClassInput = {
  id?: string | null,
  mainClassId: string,
  descriptions: Array< DescriptionInput >,
  magicUser?: boolean | null,
};

export type ModelClassConditionInput = {
  mainClassId?: ModelIDInput | null,
  magicUser?: ModelBooleanInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateClassInput = {
  id: string,
  mainClassId?: string | null,
  descriptions?: Array< DescriptionInput > | null,
  magicUser?: boolean | null,
};

export type DeleteClassInput = {
  id?: string | null,
};

export type CreateRaceInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  playable?: boolean | null,
};

export type ModelRaceConditionInput = {
  playable?: ModelBooleanInput | null,
  and?: Array< ModelRaceConditionInput | null > | null,
  or?: Array< ModelRaceConditionInput | null > | null,
  not?: ModelRaceConditionInput | null,
};

export type UpdateRaceInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  playable?: boolean | null,
};

export type DeleteRaceInput = {
  id?: string | null,
};

export type CreatePsiSchoolInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  basePsiPoints: number,
  psiPointsPerLevel: number,
};

export type ModelPsiSchoolConditionInput = {
  basePsiPoints?: ModelIntInput | null,
  psiPointsPerLevel?: ModelIntInput | null,
  and?: Array< ModelPsiSchoolConditionInput | null > | null,
  or?: Array< ModelPsiSchoolConditionInput | null > | null,
  not?: ModelPsiSchoolConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePsiSchoolInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  basePsiPoints?: number | null,
  psiPointsPerLevel?: number | null,
};

export type DeletePsiSchoolInput = {
  id?: string | null,
};

export type CreateArmourInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  weight?: string | null,
  movementPreventionValue: number,
  damageReductionValue: number,
  price?: number | null,
};

export type ModelArmourConditionInput = {
  weight?: ModelStringInput | null,
  movementPreventionValue?: ModelIntInput | null,
  damageReductionValue?: ModelIntInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelArmourConditionInput | null > | null,
  or?: Array< ModelArmourConditionInput | null > | null,
  not?: ModelArmourConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateArmourInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  weight?: string | null,
  movementPreventionValue?: number | null,
  damageReductionValue?: number | null,
  price?: number | null,
};

export type DeleteArmourInput = {
  id?: string | null,
};

export type CreateShieldInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  combatValues?: CombatValuesInput | null,
  movementPreventionValue?: number | null,
  weight?: string | null,
  price?: number | null,
  damage?: ThrowScenarioInput | null,
  attacksPerTurn: number,
};

export type CombatValuesInput = {
  initiation?: number | null,
  offence?: number | null,
  defence?: number | null,
  aiming?: number | null,
};

export type ThrowScenarioInput = {
  dice?: Dice | null,
  iterationCount?: number | null,
  modifier?: number | null,
};

export enum Dice {
  D1 = "D1",
  D2 = "D2",
  D3 = "D3",
  D4 = "D4",
  D5 = "D5",
  D6 = "D6",
  D8 = "D8",
  D10 = "D10",
  D100 = "D100",
}


export type ModelShieldConditionInput = {
  movementPreventionValue?: ModelIntInput | null,
  weight?: ModelStringInput | null,
  price?: ModelIntInput | null,
  attacksPerTurn?: ModelFloatInput | null,
  and?: Array< ModelShieldConditionInput | null > | null,
  or?: Array< ModelShieldConditionInput | null > | null,
  not?: ModelShieldConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateShieldInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  combatValues?: CombatValuesInput | null,
  movementPreventionValue?: number | null,
  weight?: string | null,
  price?: number | null,
  damage?: ThrowScenarioInput | null,
  attacksPerTurn?: number | null,
};

export type DeleteShieldInput = {
  id?: string | null,
};

export type CreateWeaponInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  weaponTypeId: string,
  weight?: string | null,
  price?: number | null,
  attackRange?: number | null,
  combatValues: CombatValuesInput,
  damage: ThrowScenarioInput,
  attacksPerTurn: number,
  ranged?: boolean | null,
};

export type ModelWeaponConditionInput = {
  weaponTypeId?: ModelIDInput | null,
  weight?: ModelStringInput | null,
  price?: ModelIntInput | null,
  attackRange?: ModelIntInput | null,
  attacksPerTurn?: ModelFloatInput | null,
  ranged?: ModelBooleanInput | null,
  and?: Array< ModelWeaponConditionInput | null > | null,
  or?: Array< ModelWeaponConditionInput | null > | null,
  not?: ModelWeaponConditionInput | null,
};

export type UpdateWeaponInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  weaponTypeId?: string | null,
  weight?: string | null,
  price?: number | null,
  attackRange?: number | null,
  combatValues?: CombatValuesInput | null,
  damage?: ThrowScenarioInput | null,
  attacksPerTurn?: number | null,
  ranged?: boolean | null,
};

export type DeleteWeaponInput = {
  id?: string | null,
};

export type CreateSkillInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  percentageSkill?: boolean | null,
  skillGroupId: string,
  basicCost?: number | null,
  masterCost?: number | null,
};

export type ModelSkillConditionInput = {
  percentageSkill?: ModelBooleanInput | null,
  skillGroupId?: ModelIDInput | null,
  basicCost?: ModelIntInput | null,
  masterCost?: ModelIntInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type UpdateSkillInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  percentageSkill?: boolean | null,
  skillGroupId?: string | null,
  basicCost?: number | null,
  masterCost?: number | null,
};

export type DeleteSkillInput = {
  id?: string | null,
};

export type CreateMagicalItemInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  manaCost: number,
  duration: string,
  price: number,
  magicalItemClassId: string,
};

export type ModelMagicalItemConditionInput = {
  manaCost?: ModelIntInput | null,
  duration?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelMagicalItemConditionInput | null > | null,
  or?: Array< ModelMagicalItemConditionInput | null > | null,
  not?: ModelMagicalItemConditionInput | null,
};

export type UpdateMagicalItemInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  manaCost?: number | null,
  duration?: string | null,
  price?: number | null,
  magicalItemClassId?: string | null,
};

export type DeleteMagicalItemInput = {
  id?: string | null,
};

export type CreateThrowInput = {
  id?: string | null,
  throwScenario?: ThrowScenarioInput | null,
  throwResults: Array< number >,
  throwSum: number,
  total: number,
  owner?: string | null,
};

export type ModelThrowConditionInput = {
  throwResults?: ModelIntInput | null,
  throwSum?: ModelIntInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelThrowConditionInput | null > | null,
  or?: Array< ModelThrowConditionInput | null > | null,
  not?: ModelThrowConditionInput | null,
};

export type UpdateThrowInput = {
  id: string,
  throwScenario?: ThrowScenarioInput | null,
  throwResults?: Array< number > | null,
  throwSum?: number | null,
  total?: number | null,
  owner?: string | null,
};

export type DeleteThrowInput = {
  id?: string | null,
};

export type CreateCharacterInput = {
  id?: string | null,
  name: string,
  playerCharacter?: boolean | null,
  startDate?: string | null,
  dungeonMaster?: string | null,
  owner?: string | null,
  basicInfo?: CharacterBasicInfoInput | null,
  abilities?: AbilitiesInput | null,
  health?: HealthInformationInput | null,
  subclass?: string | null,
  specialisation?: string | null,
  level?: CharacterLevelInput | null,
  psiUser?: boolean | null,
  psiLevel?: number | null,
  psiPoints?: MutablePointValueInput | null,
  spellResistance?: SpellResistanceInput | null,
  magicUser?: boolean | null,
  magicalAbility?: MagicalAbilityInput | null,
  baseCombatValues?: CombatValuesInput | null,
  spentCombatValueModifiers?: CombatValuesInput | null,
  otherCombatValueModifiers?: CombatValuesInput | null,
  combatValueModifiersPerLevel?: number | null,
  mandatoryCombatValueModifierDistribution?: string | null,
  wallet?: WalletInput | null,
  skillPoints?: SkillPointsInput | null,
  languages?: Array< LanguageAbilityInput > | null,
  inventory?: Array< InventoryItemInput > | null,
  poisons?: Array< PoisonInput > | null,
  notes?: string | null,
  characterClassId?: string | null,
  characterRaceId?: string | null,
  characterPersonalityId?: string | null,
  characterPsiSchoolId?: string | null,
  characterArmourId?: string | null,
  characterShieldId?: string | null,
};

export type CharacterBasicInfoInput = {
  image?: S3ObjectInput | null,
  sex?: Sex | null,
  height?: string | null,
  weight?: string | null,
  hair?: string | null,
  eyes?: string | null,
  age?: number | null,
  visibleAge?: number | null,
  identifier?: string | null,
  family?: string | null,
  attire?: string | null,
  personalityTraits?: string | null,
  specialAbilities?: string | null,
  likes?: string | null,
  dislikes?: string | null,
  fears?: string | null,
  companions?: string | null,
  fame?: number | null,
  religion?: string | null,
  country?: string | null,
  school?: string | null,
  holySymbol?: S3ObjectInput | null,
  coatOfArms?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket?: string | null,
  region?: string | null,
  key?: string | null,
};

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}


export type AbilitiesInput = {
  strength?: number | null,
  agility?: number | null,
  dexterity?: number | null,
  stamina?: number | null,
  health?: number | null,
  beauty?: number | null,
  intelligence?: number | null,
  willpower?: number | null,
  astral?: number | null,
};

export type HealthInformationInput = {
  vitality?: MutablePointValueInput | null,
  baseVitality?: number | null,
  vitalityModifier?: number | null,
  hitPoints?: MutablePointValueInput | null,
  baseHitPoints?: number | null,
  hitPointModifier?: number | null,
  hitPointsPerLevel?: ThrowScenarioInput | null,
};

export type MutablePointValueInput = {
  current?: number | null,
  max?: number | null,
};

export type CharacterLevelInput = {
  currentLevel?: number | null,
  currentExperience?: number | null,
  experienceForNextLevel?: number | null,
};

export type SpellResistanceInput = {
  astral?: SpellResistanceValuesInput | null,
  mental?: SpellResistanceValuesInput | null,
};

export type SpellResistanceValuesInput = {
  staticShield?: number | null,
  dynamicShield?: number | null,
  innate?: number | null,
  magical?: number | null,
  modifier?: number | null,
};

export type MagicalAbilityInput = {
  notes?: string | null,
  manaPoints?: MutablePointValueInput | null,
  manaPointsPerLevel?: string | null,
  modifiers?: string | null,
  manaPointsStoredElsehwere?: string | null,
  rechargingMethod?: string | null,
};

export type WalletInput = {
  money?: number | null,
  mithrill?: string | null,
  gemstones?: string | null,
  misc?: string | null,
};

export type SkillPointsInput = {
  base?: number | null,
  current?: number | null,
  perLevel?: number | null,
  intelligence?: number | null,
  dexterity?: number | null,
};

export type LanguageAbilityInput = {
  language?: string | null,
  level?: LanguageLevel | null,
};

export enum LanguageLevel {
  LL1 = "LL1",
  LL2 = "LL2",
  LL3 = "LL3",
  LL4 = "LL4",
  LL5 = "LL5",
  LLM = "LLM",
}


export type InventoryItemInput = {
  name?: string | null,
  amount?: string | null,
  location?: string | null,
};

export type PoisonInput = {
  name: string,
  amount: number,
};

export type ModelCharacterConditionInput = {
  name?: ModelStringInput | null,
  playerCharacter?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  subclass?: ModelStringInput | null,
  specialisation?: ModelStringInput | null,
  psiUser?: ModelBooleanInput | null,
  psiLevel?: ModelIntInput | null,
  magicUser?: ModelBooleanInput | null,
  combatValueModifiersPerLevel?: ModelIntInput | null,
  mandatoryCombatValueModifierDistribution?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
};

export enum Mastery {
  BASIC = "BASIC",
  MASTER = "MASTER",
}


export enum CompanionType {
  MOUNT = "MOUNT",
  ANIMAL = "ANIMAL",
  SERVANT = "SERVANT",
}


export type UpdateCharacterInput = {
  id: string,
  name?: string | null,
  playerCharacter?: boolean | null,
  startDate?: string | null,
  dungeonMaster?: string | null,
  owner?: string | null,
  basicInfo?: CharacterBasicInfoInput | null,
  abilities?: AbilitiesInput | null,
  health?: HealthInformationInput | null,
  subclass?: string | null,
  specialisation?: string | null,
  level?: CharacterLevelInput | null,
  psiUser?: boolean | null,
  psiLevel?: number | null,
  psiPoints?: MutablePointValueInput | null,
  spellResistance?: SpellResistanceInput | null,
  magicUser?: boolean | null,
  magicalAbility?: MagicalAbilityInput | null,
  baseCombatValues?: CombatValuesInput | null,
  spentCombatValueModifiers?: CombatValuesInput | null,
  otherCombatValueModifiers?: CombatValuesInput | null,
  combatValueModifiersPerLevel?: number | null,
  mandatoryCombatValueModifierDistribution?: string | null,
  wallet?: WalletInput | null,
  skillPoints?: SkillPointsInput | null,
  languages?: Array< LanguageAbilityInput > | null,
  inventory?: Array< InventoryItemInput > | null,
  poisons?: Array< PoisonInput > | null,
  notes?: string | null,
  characterClassId?: string | null,
  characterRaceId?: string | null,
  characterPersonalityId?: string | null,
  characterPsiSchoolId?: string | null,
  characterArmourId?: string | null,
  characterShieldId?: string | null,
};

export type DeleteCharacterInput = {
  id?: string | null,
};

export type CreateWeaponAssignmentInput = {
  id?: string | null,
  characterId: string,
  mastery?: Mastery | null,
  inHand?: boolean | null,
  breakWeapon?: Mastery | null,
  disarm?: Mastery | null,
  arrowCount?: number | null,
  specialProjectileCount?: number | null,
  aim?: Mastery | null,
  horseback?: Mastery | null,
  weaponAssignmentWeaponId?: string | null,
};

export type ModelWeaponAssignmentConditionInput = {
  characterId?: ModelIDInput | null,
  mastery?: ModelMasteryInput | null,
  inHand?: ModelBooleanInput | null,
  breakWeapon?: ModelMasteryInput | null,
  disarm?: ModelMasteryInput | null,
  arrowCount?: ModelIntInput | null,
  specialProjectileCount?: ModelIntInput | null,
  aim?: ModelMasteryInput | null,
  horseback?: ModelMasteryInput | null,
  and?: Array< ModelWeaponAssignmentConditionInput | null > | null,
  or?: Array< ModelWeaponAssignmentConditionInput | null > | null,
  not?: ModelWeaponAssignmentConditionInput | null,
};

export type ModelMasteryInput = {
  eq?: Mastery | null,
  ne?: Mastery | null,
};

export type UpdateWeaponAssignmentInput = {
  id: string,
  characterId?: string | null,
  mastery?: Mastery | null,
  inHand?: boolean | null,
  breakWeapon?: Mastery | null,
  disarm?: Mastery | null,
  arrowCount?: number | null,
  specialProjectileCount?: number | null,
  aim?: Mastery | null,
  horseback?: Mastery | null,
  weaponAssignmentWeaponId?: string | null,
};

export type DeleteWeaponAssignmentInput = {
  id?: string | null,
};

export type CreateSkillAssignmentInput = {
  id?: string | null,
  characterId: string,
  mastery?: Mastery | null,
  percentageValue?: number | null,
  skillPointsUsed?: number | null,
  skillAssignmentSkillId?: string | null,
};

export type ModelSkillAssignmentConditionInput = {
  characterId?: ModelIDInput | null,
  mastery?: ModelMasteryInput | null,
  percentageValue?: ModelIntInput | null,
  skillPointsUsed?: ModelIntInput | null,
  and?: Array< ModelSkillAssignmentConditionInput | null > | null,
  or?: Array< ModelSkillAssignmentConditionInput | null > | null,
  not?: ModelSkillAssignmentConditionInput | null,
};

export type UpdateSkillAssignmentInput = {
  id: string,
  characterId?: string | null,
  mastery?: Mastery | null,
  percentageValue?: number | null,
  skillPointsUsed?: number | null,
  skillAssignmentSkillId?: string | null,
};

export type DeleteSkillAssignmentInput = {
  id?: string | null,
};

export type CreateCharacterCompanionInput = {
  id?: string | null,
  characterId: string,
  name: string,
  type: CompanionType,
  health?: HealthInformationInput | null,
  combatValues?: CombatValuesInput | null,
  damage?: ThrowScenarioInput | null,
  attacksPerTurn?: number | null,
  maxDistance?: string | null,
  maxLoad?: string | null,
  badHabit?: string | null,
  specialAbilities?: string | null,
  characterCompanionWeaponId?: string | null,
};

export type ModelCharacterCompanionConditionInput = {
  characterId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelCompanionTypeInput | null,
  attacksPerTurn?: ModelFloatInput | null,
  maxDistance?: ModelStringInput | null,
  maxLoad?: ModelStringInput | null,
  badHabit?: ModelStringInput | null,
  specialAbilities?: ModelStringInput | null,
  and?: Array< ModelCharacterCompanionConditionInput | null > | null,
  or?: Array< ModelCharacterCompanionConditionInput | null > | null,
  not?: ModelCharacterCompanionConditionInput | null,
};

export type ModelCompanionTypeInput = {
  eq?: CompanionType | null,
  ne?: CompanionType | null,
};

export type UpdateCharacterCompanionInput = {
  id: string,
  characterId?: string | null,
  name?: string | null,
  type?: CompanionType | null,
  health?: HealthInformationInput | null,
  combatValues?: CombatValuesInput | null,
  damage?: ThrowScenarioInput | null,
  attacksPerTurn?: number | null,
  maxDistance?: string | null,
  maxLoad?: string | null,
  badHabit?: string | null,
  specialAbilities?: string | null,
  characterCompanionWeaponId?: string | null,
};

export type DeleteCharacterCompanionInput = {
  id?: string | null,
};

export type CreateMagicalItemAssignmentInput = {
  id?: string | null,
  characterId: string,
  magicalItemId: string,
  location?: string | null,
};

export type ModelMagicalItemAssignmentConditionInput = {
  characterId?: ModelIDInput | null,
  magicalItemId?: ModelIDInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelMagicalItemAssignmentConditionInput | null > | null,
  or?: Array< ModelMagicalItemAssignmentConditionInput | null > | null,
  not?: ModelMagicalItemAssignmentConditionInput | null,
};

export type UpdateMagicalItemAssignmentInput = {
  id: string,
  characterId?: string | null,
  magicalItemId?: string | null,
  location?: string | null,
};

export type DeleteMagicalItemAssignmentInput = {
  id?: string | null,
};

export type ModelValueRangeValueFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelValueRangeTypeInput | null,
  and?: Array< ModelValueRangeValueFilterInput | null > | null,
  or?: Array< ModelValueRangeValueFilterInput | null > | null,
  not?: ModelValueRangeValueFilterInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  mainClassId?: ModelIDInput | null,
  magicUser?: ModelBooleanInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelRaceFilterInput = {
  id?: ModelIDInput | null,
  playable?: ModelBooleanInput | null,
  and?: Array< ModelRaceFilterInput | null > | null,
  or?: Array< ModelRaceFilterInput | null > | null,
  not?: ModelRaceFilterInput | null,
};

export type ModelPsiSchoolFilterInput = {
  id?: ModelIDInput | null,
  basePsiPoints?: ModelIntInput | null,
  psiPointsPerLevel?: ModelIntInput | null,
  and?: Array< ModelPsiSchoolFilterInput | null > | null,
  or?: Array< ModelPsiSchoolFilterInput | null > | null,
  not?: ModelPsiSchoolFilterInput | null,
};

export type ModelArmourFilterInput = {
  id?: ModelIDInput | null,
  weight?: ModelStringInput | null,
  movementPreventionValue?: ModelIntInput | null,
  damageReductionValue?: ModelIntInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelArmourFilterInput | null > | null,
  or?: Array< ModelArmourFilterInput | null > | null,
  not?: ModelArmourFilterInput | null,
};

export type ModelShieldFilterInput = {
  id?: ModelIDInput | null,
  movementPreventionValue?: ModelIntInput | null,
  weight?: ModelStringInput | null,
  price?: ModelIntInput | null,
  attacksPerTurn?: ModelFloatInput | null,
  and?: Array< ModelShieldFilterInput | null > | null,
  or?: Array< ModelShieldFilterInput | null > | null,
  not?: ModelShieldFilterInput | null,
};

export type ModelWeaponFilterInput = {
  id?: ModelIDInput | null,
  weaponTypeId?: ModelIDInput | null,
  weight?: ModelStringInput | null,
  price?: ModelIntInput | null,
  attackRange?: ModelIntInput | null,
  attacksPerTurn?: ModelFloatInput | null,
  ranged?: ModelBooleanInput | null,
  and?: Array< ModelWeaponFilterInput | null > | null,
  or?: Array< ModelWeaponFilterInput | null > | null,
  not?: ModelWeaponFilterInput | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  percentageSkill?: ModelBooleanInput | null,
  skillGroupId?: ModelIDInput | null,
  basicCost?: ModelIntInput | null,
  masterCost?: ModelIntInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelMagicalItemFilterInput = {
  id?: ModelIDInput | null,
  manaCost?: ModelIntInput | null,
  duration?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelMagicalItemFilterInput | null > | null,
  or?: Array< ModelMagicalItemFilterInput | null > | null,
  not?: ModelMagicalItemFilterInput | null,
};

export type ModelThrowFilterInput = {
  id?: ModelIDInput | null,
  throwResults?: ModelIntInput | null,
  throwSum?: ModelIntInput | null,
  total?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelThrowFilterInput | null > | null,
  or?: Array< ModelThrowFilterInput | null > | null,
  not?: ModelThrowFilterInput | null,
};

export type ModelCharacterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  playerCharacter?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  dungeonMaster?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  subclass?: ModelStringInput | null,
  specialisation?: ModelStringInput | null,
  psiUser?: ModelBooleanInput | null,
  psiLevel?: ModelIntInput | null,
  magicUser?: ModelBooleanInput | null,
  combatValueModifiersPerLevel?: ModelIntInput | null,
  mandatoryCombatValueModifierDistribution?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
};

export type ModelWeaponAssignmentFilterInput = {
  id?: ModelIDInput | null,
  characterId?: ModelIDInput | null,
  mastery?: ModelMasteryInput | null,
  inHand?: ModelBooleanInput | null,
  breakWeapon?: ModelMasteryInput | null,
  disarm?: ModelMasteryInput | null,
  arrowCount?: ModelIntInput | null,
  specialProjectileCount?: ModelIntInput | null,
  aim?: ModelMasteryInput | null,
  horseback?: ModelMasteryInput | null,
  and?: Array< ModelWeaponAssignmentFilterInput | null > | null,
  or?: Array< ModelWeaponAssignmentFilterInput | null > | null,
  not?: ModelWeaponAssignmentFilterInput | null,
};

export type ModelSkillAssignmentFilterInput = {
  id?: ModelIDInput | null,
  characterId?: ModelIDInput | null,
  mastery?: ModelMasteryInput | null,
  percentageValue?: ModelIntInput | null,
  skillPointsUsed?: ModelIntInput | null,
  and?: Array< ModelSkillAssignmentFilterInput | null > | null,
  or?: Array< ModelSkillAssignmentFilterInput | null > | null,
  not?: ModelSkillAssignmentFilterInput | null,
};

export type ModelCharacterCompanionFilterInput = {
  id?: ModelIDInput | null,
  characterId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelCompanionTypeInput | null,
  attacksPerTurn?: ModelFloatInput | null,
  maxDistance?: ModelStringInput | null,
  maxLoad?: ModelStringInput | null,
  badHabit?: ModelStringInput | null,
  specialAbilities?: ModelStringInput | null,
  and?: Array< ModelCharacterCompanionFilterInput | null > | null,
  or?: Array< ModelCharacterCompanionFilterInput | null > | null,
  not?: ModelCharacterCompanionFilterInput | null,
};

export type ModelMagicalItemAssignmentFilterInput = {
  id?: ModelIDInput | null,
  characterId?: ModelIDInput | null,
  magicalItemId?: ModelIDInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelMagicalItemAssignmentFilterInput | null > | null,
  or?: Array< ModelMagicalItemAssignmentFilterInput | null > | null,
  not?: ModelMagicalItemAssignmentFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateValueRangeValueMutationVariables = {
  input: CreateValueRangeValueInput,
  condition?: ModelValueRangeValueConditionInput | null,
};

export type CreateValueRangeValueMutation = {
  createValueRangeValue:  {
    __typename: "ValueRangeValue",
    id: string,
    type: ValueRangeType,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateValueRangeValueMutationVariables = {
  input: UpdateValueRangeValueInput,
  condition?: ModelValueRangeValueConditionInput | null,
};

export type UpdateValueRangeValueMutation = {
  updateValueRangeValue:  {
    __typename: "ValueRangeValue",
    id: string,
    type: ValueRangeType,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteValueRangeValueMutationVariables = {
  input: DeleteValueRangeValueInput,
  condition?: ModelValueRangeValueConditionInput | null,
};

export type DeleteValueRangeValueMutation = {
  deleteValueRangeValue:  {
    __typename: "ValueRangeValue",
    id: string,
    type: ValueRangeType,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    magicUser: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    magicUser: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    magicUser: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRaceMutationVariables = {
  input: CreateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type CreateRaceMutation = {
  createRace:  {
    __typename: "Race",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    playable: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRaceMutationVariables = {
  input: UpdateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type UpdateRaceMutation = {
  updateRace:  {
    __typename: "Race",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    playable: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRaceMutationVariables = {
  input: DeleteRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type DeleteRaceMutation = {
  deleteRace:  {
    __typename: "Race",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    playable: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePsiSchoolMutationVariables = {
  input: CreatePsiSchoolInput,
  condition?: ModelPsiSchoolConditionInput | null,
};

export type CreatePsiSchoolMutation = {
  createPsiSchool:  {
    __typename: "PsiSchool",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    basePsiPoints: number,
    psiPointsPerLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePsiSchoolMutationVariables = {
  input: UpdatePsiSchoolInput,
  condition?: ModelPsiSchoolConditionInput | null,
};

export type UpdatePsiSchoolMutation = {
  updatePsiSchool:  {
    __typename: "PsiSchool",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    basePsiPoints: number,
    psiPointsPerLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePsiSchoolMutationVariables = {
  input: DeletePsiSchoolInput,
  condition?: ModelPsiSchoolConditionInput | null,
};

export type DeletePsiSchoolMutation = {
  deletePsiSchool:  {
    __typename: "PsiSchool",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    basePsiPoints: number,
    psiPointsPerLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArmourMutationVariables = {
  input: CreateArmourInput,
  condition?: ModelArmourConditionInput | null,
};

export type CreateArmourMutation = {
  createArmour:  {
    __typename: "Armour",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weight: string | null,
    movementPreventionValue: number,
    damageReductionValue: number,
    price: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArmourMutationVariables = {
  input: UpdateArmourInput,
  condition?: ModelArmourConditionInput | null,
};

export type UpdateArmourMutation = {
  updateArmour:  {
    __typename: "Armour",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weight: string | null,
    movementPreventionValue: number,
    damageReductionValue: number,
    price: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArmourMutationVariables = {
  input: DeleteArmourInput,
  condition?: ModelArmourConditionInput | null,
};

export type DeleteArmourMutation = {
  deleteArmour:  {
    __typename: "Armour",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weight: string | null,
    movementPreventionValue: number,
    damageReductionValue: number,
    price: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShieldMutationVariables = {
  input: CreateShieldInput,
  condition?: ModelShieldConditionInput | null,
};

export type CreateShieldMutation = {
  createShield:  {
    __typename: "Shield",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    movementPreventionValue: number | null,
    weight: string | null,
    price: number | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    attacksPerTurn: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShieldMutationVariables = {
  input: UpdateShieldInput,
  condition?: ModelShieldConditionInput | null,
};

export type UpdateShieldMutation = {
  updateShield:  {
    __typename: "Shield",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    movementPreventionValue: number | null,
    weight: string | null,
    price: number | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    attacksPerTurn: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShieldMutationVariables = {
  input: DeleteShieldInput,
  condition?: ModelShieldConditionInput | null,
};

export type DeleteShieldMutation = {
  deleteShield:  {
    __typename: "Shield",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    movementPreventionValue: number | null,
    weight: string | null,
    price: number | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    attacksPerTurn: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWeaponMutationVariables = {
  input: CreateWeaponInput,
  condition?: ModelWeaponConditionInput | null,
};

export type CreateWeaponMutation = {
  createWeapon:  {
    __typename: "Weapon",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    },
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    },
    attacksPerTurn: number,
    ranged: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWeaponMutationVariables = {
  input: UpdateWeaponInput,
  condition?: ModelWeaponConditionInput | null,
};

export type UpdateWeaponMutation = {
  updateWeapon:  {
    __typename: "Weapon",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    },
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    },
    attacksPerTurn: number,
    ranged: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWeaponMutationVariables = {
  input: DeleteWeaponInput,
  condition?: ModelWeaponConditionInput | null,
};

export type DeleteWeaponMutation = {
  deleteWeapon:  {
    __typename: "Weapon",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    },
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    },
    attacksPerTurn: number,
    ranged: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill:  {
    __typename: "Skill",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    percentageSkill: boolean | null,
    skillGroupId: string,
    skillGroup:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill:  {
    __typename: "Skill",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    percentageSkill: boolean | null,
    skillGroupId: string,
    skillGroup:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill:  {
    __typename: "Skill",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    percentageSkill: boolean | null,
    skillGroupId: string,
    skillGroup:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMagicalItemMutationVariables = {
  input: CreateMagicalItemInput,
  condition?: ModelMagicalItemConditionInput | null,
};

export type CreateMagicalItemMutation = {
  createMagicalItem:  {
    __typename: "MagicalItem",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMagicalItemMutationVariables = {
  input: UpdateMagicalItemInput,
  condition?: ModelMagicalItemConditionInput | null,
};

export type UpdateMagicalItemMutation = {
  updateMagicalItem:  {
    __typename: "MagicalItem",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMagicalItemMutationVariables = {
  input: DeleteMagicalItemInput,
  condition?: ModelMagicalItemConditionInput | null,
};

export type DeleteMagicalItemMutation = {
  deleteMagicalItem:  {
    __typename: "MagicalItem",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThrowMutationVariables = {
  input: CreateThrowInput,
  condition?: ModelThrowConditionInput | null,
};

export type CreateThrowMutation = {
  createThrow:  {
    __typename: "Throw",
    id: string,
    throwScenario:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateThrowMutationVariables = {
  input: UpdateThrowInput,
  condition?: ModelThrowConditionInput | null,
};

export type UpdateThrowMutation = {
  updateThrow:  {
    __typename: "Throw",
    id: string,
    throwScenario:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteThrowMutationVariables = {
  input: DeleteThrowInput,
  condition?: ModelThrowConditionInput | null,
};

export type DeleteThrowMutation = {
  deleteThrow:  {
    __typename: "Throw",
    id: string,
    throwScenario:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCharacterMutationVariables = {
  input: CreateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type CreateCharacterMutation = {
  createCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    playerCharacter: boolean | null,
    startDate: string | null,
    dungeonMaster: string | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      identifier: string | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      holySymbol:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      coatOfArms:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number | null,
      agility: number | null,
      dexterity: number | null,
      stamina: number | null,
      health: number | null,
      beauty: number | null,
      intelligence: number | null,
      willpower: number | null,
      astral: number | null,
    } | null,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number | null,
      currentExperience: number | null,
      experienceForNextLevel: number | null,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiLevel: number | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number | null,
      max: number | null,
    } | null,
    spellResistance:  {
      __typename: "SpellResistance",
      astral:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
      mental:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      notes: string | null,
      manaPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
    wallet:  {
      __typename: "Wallet",
      money: number | null,
      mithrill: string | null,
      gemstones: string | null,
      misc: string | null,
    } | null,
    skillPoints:  {
      __typename: "SkillPoints",
      base: number | null,
      current: number | null,
      perLevel: number | null,
      intelligence: number | null,
      dexterity: number | null,
    } | null,
    languages:  Array< {
      __typename: "LanguageAbility",
      language: string | null,
      level: LanguageLevel | null,
    } > | null,
    inventory:  Array< {
      __typename: "InventoryItem",
      name: string | null,
      amount: string | null,
      location: string | null,
    } > | null,
    poisons:  Array< {
      __typename: "Poison",
      name: string,
      amount: number,
    } > | null,
    notes: string | null,
    armour:  {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shield:  {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    weapons:  {
      __typename: "ModelWeaponAssignmentConnection",
      items:  Array< {
        __typename: "WeaponAssignment",
        id: string,
        characterId: string,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        inHand: boolean | null,
        breakWeapon: Mastery | null,
        disarm: Mastery | null,
        arrowCount: number | null,
        specialProjectileCount: number | null,
        aim: Mastery | null,
        horseback: Mastery | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    skills:  {
      __typename: "ModelSkillAssignmentConnection",
      items:  Array< {
        __typename: "SkillAssignment",
        id: string,
        characterId: string,
        skill:  {
          __typename: "Skill",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          percentageSkill: boolean | null,
          skillGroupId: string,
          skillGroup:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          basicCost: number | null,
          masterCost: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        percentageValue: number | null,
        skillPointsUsed: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    companions:  {
      __typename: "ModelCharacterCompanionConnection",
      items:  Array< {
        __typename: "CharacterCompanion",
        id: string,
        characterId: string,
        name: string,
        type: CompanionType,
        health:  {
          __typename: "HealthInformation",
          vitality:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseVitality: number | null,
          vitalityModifier: number | null,
          hitPoints:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseHitPoints: number | null,
          hitPointModifier: number | null,
          hitPointsPerLevel:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
        } | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        attacksPerTurn: number | null,
        maxDistance: string | null,
        maxLoad: string | null,
        badHabit: string | null,
        specialAbilities: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    magicalItems:  {
      __typename: "ModelMagicalItemAssignmentConnection",
      items:  Array< {
        __typename: "MagicalItemAssignment",
        id: string,
        characterId: string,
        magicalItemId: string,
        magicalItem:  {
          __typename: "MagicalItem",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          class:  {
            __typename: "Class",
            id: string,
            mainClassId: string,
            magicUser: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          manaCost: number,
          duration: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        },
        location: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharacterMutationVariables = {
  input: UpdateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type UpdateCharacterMutation = {
  updateCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    playerCharacter: boolean | null,
    startDate: string | null,
    dungeonMaster: string | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      identifier: string | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      holySymbol:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      coatOfArms:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number | null,
      agility: number | null,
      dexterity: number | null,
      stamina: number | null,
      health: number | null,
      beauty: number | null,
      intelligence: number | null,
      willpower: number | null,
      astral: number | null,
    } | null,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number | null,
      currentExperience: number | null,
      experienceForNextLevel: number | null,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiLevel: number | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number | null,
      max: number | null,
    } | null,
    spellResistance:  {
      __typename: "SpellResistance",
      astral:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
      mental:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      notes: string | null,
      manaPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
    wallet:  {
      __typename: "Wallet",
      money: number | null,
      mithrill: string | null,
      gemstones: string | null,
      misc: string | null,
    } | null,
    skillPoints:  {
      __typename: "SkillPoints",
      base: number | null,
      current: number | null,
      perLevel: number | null,
      intelligence: number | null,
      dexterity: number | null,
    } | null,
    languages:  Array< {
      __typename: "LanguageAbility",
      language: string | null,
      level: LanguageLevel | null,
    } > | null,
    inventory:  Array< {
      __typename: "InventoryItem",
      name: string | null,
      amount: string | null,
      location: string | null,
    } > | null,
    poisons:  Array< {
      __typename: "Poison",
      name: string,
      amount: number,
    } > | null,
    notes: string | null,
    armour:  {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shield:  {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    weapons:  {
      __typename: "ModelWeaponAssignmentConnection",
      items:  Array< {
        __typename: "WeaponAssignment",
        id: string,
        characterId: string,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        inHand: boolean | null,
        breakWeapon: Mastery | null,
        disarm: Mastery | null,
        arrowCount: number | null,
        specialProjectileCount: number | null,
        aim: Mastery | null,
        horseback: Mastery | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    skills:  {
      __typename: "ModelSkillAssignmentConnection",
      items:  Array< {
        __typename: "SkillAssignment",
        id: string,
        characterId: string,
        skill:  {
          __typename: "Skill",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          percentageSkill: boolean | null,
          skillGroupId: string,
          skillGroup:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          basicCost: number | null,
          masterCost: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        percentageValue: number | null,
        skillPointsUsed: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    companions:  {
      __typename: "ModelCharacterCompanionConnection",
      items:  Array< {
        __typename: "CharacterCompanion",
        id: string,
        characterId: string,
        name: string,
        type: CompanionType,
        health:  {
          __typename: "HealthInformation",
          vitality:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseVitality: number | null,
          vitalityModifier: number | null,
          hitPoints:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseHitPoints: number | null,
          hitPointModifier: number | null,
          hitPointsPerLevel:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
        } | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        attacksPerTurn: number | null,
        maxDistance: string | null,
        maxLoad: string | null,
        badHabit: string | null,
        specialAbilities: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    magicalItems:  {
      __typename: "ModelMagicalItemAssignmentConnection",
      items:  Array< {
        __typename: "MagicalItemAssignment",
        id: string,
        characterId: string,
        magicalItemId: string,
        magicalItem:  {
          __typename: "MagicalItem",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          class:  {
            __typename: "Class",
            id: string,
            mainClassId: string,
            magicUser: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          manaCost: number,
          duration: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        },
        location: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharacterMutationVariables = {
  input: DeleteCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type DeleteCharacterMutation = {
  deleteCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    playerCharacter: boolean | null,
    startDate: string | null,
    dungeonMaster: string | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      identifier: string | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      holySymbol:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      coatOfArms:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number | null,
      agility: number | null,
      dexterity: number | null,
      stamina: number | null,
      health: number | null,
      beauty: number | null,
      intelligence: number | null,
      willpower: number | null,
      astral: number | null,
    } | null,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number | null,
      currentExperience: number | null,
      experienceForNextLevel: number | null,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiLevel: number | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number | null,
      max: number | null,
    } | null,
    spellResistance:  {
      __typename: "SpellResistance",
      astral:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
      mental:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      notes: string | null,
      manaPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
    wallet:  {
      __typename: "Wallet",
      money: number | null,
      mithrill: string | null,
      gemstones: string | null,
      misc: string | null,
    } | null,
    skillPoints:  {
      __typename: "SkillPoints",
      base: number | null,
      current: number | null,
      perLevel: number | null,
      intelligence: number | null,
      dexterity: number | null,
    } | null,
    languages:  Array< {
      __typename: "LanguageAbility",
      language: string | null,
      level: LanguageLevel | null,
    } > | null,
    inventory:  Array< {
      __typename: "InventoryItem",
      name: string | null,
      amount: string | null,
      location: string | null,
    } > | null,
    poisons:  Array< {
      __typename: "Poison",
      name: string,
      amount: number,
    } > | null,
    notes: string | null,
    armour:  {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shield:  {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    weapons:  {
      __typename: "ModelWeaponAssignmentConnection",
      items:  Array< {
        __typename: "WeaponAssignment",
        id: string,
        characterId: string,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        inHand: boolean | null,
        breakWeapon: Mastery | null,
        disarm: Mastery | null,
        arrowCount: number | null,
        specialProjectileCount: number | null,
        aim: Mastery | null,
        horseback: Mastery | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    skills:  {
      __typename: "ModelSkillAssignmentConnection",
      items:  Array< {
        __typename: "SkillAssignment",
        id: string,
        characterId: string,
        skill:  {
          __typename: "Skill",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          percentageSkill: boolean | null,
          skillGroupId: string,
          skillGroup:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          basicCost: number | null,
          masterCost: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        percentageValue: number | null,
        skillPointsUsed: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    companions:  {
      __typename: "ModelCharacterCompanionConnection",
      items:  Array< {
        __typename: "CharacterCompanion",
        id: string,
        characterId: string,
        name: string,
        type: CompanionType,
        health:  {
          __typename: "HealthInformation",
          vitality:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseVitality: number | null,
          vitalityModifier: number | null,
          hitPoints:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseHitPoints: number | null,
          hitPointModifier: number | null,
          hitPointsPerLevel:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
        } | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        attacksPerTurn: number | null,
        maxDistance: string | null,
        maxLoad: string | null,
        badHabit: string | null,
        specialAbilities: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    magicalItems:  {
      __typename: "ModelMagicalItemAssignmentConnection",
      items:  Array< {
        __typename: "MagicalItemAssignment",
        id: string,
        characterId: string,
        magicalItemId: string,
        magicalItem:  {
          __typename: "MagicalItem",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          class:  {
            __typename: "Class",
            id: string,
            mainClassId: string,
            magicUser: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          manaCost: number,
          duration: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        },
        location: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWeaponAssignmentMutationVariables = {
  input: CreateWeaponAssignmentInput,
  condition?: ModelWeaponAssignmentConditionInput | null,
};

export type CreateWeaponAssignmentMutation = {
  createWeaponAssignment:  {
    __typename: "WeaponAssignment",
    id: string,
    characterId: string,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    inHand: boolean | null,
    breakWeapon: Mastery | null,
    disarm: Mastery | null,
    arrowCount: number | null,
    specialProjectileCount: number | null,
    aim: Mastery | null,
    horseback: Mastery | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateWeaponAssignmentMutationVariables = {
  input: UpdateWeaponAssignmentInput,
  condition?: ModelWeaponAssignmentConditionInput | null,
};

export type UpdateWeaponAssignmentMutation = {
  updateWeaponAssignment:  {
    __typename: "WeaponAssignment",
    id: string,
    characterId: string,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    inHand: boolean | null,
    breakWeapon: Mastery | null,
    disarm: Mastery | null,
    arrowCount: number | null,
    specialProjectileCount: number | null,
    aim: Mastery | null,
    horseback: Mastery | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteWeaponAssignmentMutationVariables = {
  input: DeleteWeaponAssignmentInput,
  condition?: ModelWeaponAssignmentConditionInput | null,
};

export type DeleteWeaponAssignmentMutation = {
  deleteWeaponAssignment:  {
    __typename: "WeaponAssignment",
    id: string,
    characterId: string,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    inHand: boolean | null,
    breakWeapon: Mastery | null,
    disarm: Mastery | null,
    arrowCount: number | null,
    specialProjectileCount: number | null,
    aim: Mastery | null,
    horseback: Mastery | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateSkillAssignmentMutationVariables = {
  input: CreateSkillAssignmentInput,
  condition?: ModelSkillAssignmentConditionInput | null,
};

export type CreateSkillAssignmentMutation = {
  createSkillAssignment:  {
    __typename: "SkillAssignment",
    id: string,
    characterId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    percentageValue: number | null,
    skillPointsUsed: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateSkillAssignmentMutationVariables = {
  input: UpdateSkillAssignmentInput,
  condition?: ModelSkillAssignmentConditionInput | null,
};

export type UpdateSkillAssignmentMutation = {
  updateSkillAssignment:  {
    __typename: "SkillAssignment",
    id: string,
    characterId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    percentageValue: number | null,
    skillPointsUsed: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteSkillAssignmentMutationVariables = {
  input: DeleteSkillAssignmentInput,
  condition?: ModelSkillAssignmentConditionInput | null,
};

export type DeleteSkillAssignmentMutation = {
  deleteSkillAssignment:  {
    __typename: "SkillAssignment",
    id: string,
    characterId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    percentageValue: number | null,
    skillPointsUsed: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateCharacterCompanionMutationVariables = {
  input: CreateCharacterCompanionInput,
  condition?: ModelCharacterCompanionConditionInput | null,
};

export type CreateCharacterCompanionMutation = {
  createCharacterCompanion:  {
    __typename: "CharacterCompanion",
    id: string,
    characterId: string,
    name: string,
    type: CompanionType,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attacksPerTurn: number | null,
    maxDistance: string | null,
    maxLoad: string | null,
    badHabit: string | null,
    specialAbilities: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateCharacterCompanionMutationVariables = {
  input: UpdateCharacterCompanionInput,
  condition?: ModelCharacterCompanionConditionInput | null,
};

export type UpdateCharacterCompanionMutation = {
  updateCharacterCompanion:  {
    __typename: "CharacterCompanion",
    id: string,
    characterId: string,
    name: string,
    type: CompanionType,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attacksPerTurn: number | null,
    maxDistance: string | null,
    maxLoad: string | null,
    badHabit: string | null,
    specialAbilities: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteCharacterCompanionMutationVariables = {
  input: DeleteCharacterCompanionInput,
  condition?: ModelCharacterCompanionConditionInput | null,
};

export type DeleteCharacterCompanionMutation = {
  deleteCharacterCompanion:  {
    __typename: "CharacterCompanion",
    id: string,
    characterId: string,
    name: string,
    type: CompanionType,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attacksPerTurn: number | null,
    maxDistance: string | null,
    maxLoad: string | null,
    badHabit: string | null,
    specialAbilities: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateMagicalItemAssignmentMutationVariables = {
  input: CreateMagicalItemAssignmentInput,
  condition?: ModelMagicalItemAssignmentConditionInput | null,
};

export type CreateMagicalItemAssignmentMutation = {
  createMagicalItemAssignment:  {
    __typename: "MagicalItemAssignment",
    id: string,
    characterId: string,
    magicalItemId: string,
    magicalItem:  {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    location: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateMagicalItemAssignmentMutationVariables = {
  input: UpdateMagicalItemAssignmentInput,
  condition?: ModelMagicalItemAssignmentConditionInput | null,
};

export type UpdateMagicalItemAssignmentMutation = {
  updateMagicalItemAssignment:  {
    __typename: "MagicalItemAssignment",
    id: string,
    characterId: string,
    magicalItemId: string,
    magicalItem:  {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    location: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteMagicalItemAssignmentMutationVariables = {
  input: DeleteMagicalItemAssignmentInput,
  condition?: ModelMagicalItemAssignmentConditionInput | null,
};

export type DeleteMagicalItemAssignmentMutation = {
  deleteMagicalItemAssignment:  {
    __typename: "MagicalItemAssignment",
    id: string,
    characterId: string,
    magicalItemId: string,
    magicalItem:  {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    location: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetValueRangeValueQueryVariables = {
  id: string,
};

export type GetValueRangeValueQuery = {
  getValueRangeValue:  {
    __typename: "ValueRangeValue",
    id: string,
    type: ValueRangeType,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListValueRangeValuesQueryVariables = {
  filter?: ModelValueRangeValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListValueRangeValuesQuery = {
  listValueRangeValues:  {
    __typename: "ModelValueRangeValueConnection",
    items:  Array< {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    magicUser: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRaceQueryVariables = {
  id: string,
};

export type GetRaceQuery = {
  getRace:  {
    __typename: "Race",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    playable: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRacesQueryVariables = {
  filter?: ModelRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRacesQuery = {
  listRaces:  {
    __typename: "ModelRaceConnection",
    items:  Array< {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPsiSchoolQueryVariables = {
  id: string,
};

export type GetPsiSchoolQuery = {
  getPsiSchool:  {
    __typename: "PsiSchool",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    basePsiPoints: number,
    psiPointsPerLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPsiSchoolsQueryVariables = {
  filter?: ModelPsiSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPsiSchoolsQuery = {
  listPsiSchools:  {
    __typename: "ModelPsiSchoolConnection",
    items:  Array< {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetArmourQueryVariables = {
  id: string,
};

export type GetArmourQuery = {
  getArmour:  {
    __typename: "Armour",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weight: string | null,
    movementPreventionValue: number,
    damageReductionValue: number,
    price: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArmoursQueryVariables = {
  filter?: ModelArmourFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArmoursQuery = {
  listArmours:  {
    __typename: "ModelArmourConnection",
    items:  Array< {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetShieldQueryVariables = {
  id: string,
};

export type GetShieldQuery = {
  getShield:  {
    __typename: "Shield",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    movementPreventionValue: number | null,
    weight: string | null,
    price: number | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    attacksPerTurn: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShieldsQueryVariables = {
  filter?: ModelShieldFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShieldsQuery = {
  listShields:  {
    __typename: "ModelShieldConnection",
    items:  Array< {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWeaponQueryVariables = {
  id: string,
};

export type GetWeaponQuery = {
  getWeapon:  {
    __typename: "Weapon",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    },
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    },
    attacksPerTurn: number,
    ranged: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWeaponsQueryVariables = {
  filter?: ModelWeaponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeaponsQuery = {
  listWeapons:  {
    __typename: "ModelWeaponConnection",
    items:  Array< {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill:  {
    __typename: "Skill",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    percentageSkill: boolean | null,
    skillGroupId: string,
    skillGroup:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMagicalItemQueryVariables = {
  id: string,
};

export type GetMagicalItemQuery = {
  getMagicalItem:  {
    __typename: "MagicalItem",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMagicalItemsQueryVariables = {
  filter?: ModelMagicalItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMagicalItemsQuery = {
  listMagicalItems:  {
    __typename: "ModelMagicalItemConnection",
    items:  Array< {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetThrowQueryVariables = {
  id: string,
};

export type GetThrowQuery = {
  getThrow:  {
    __typename: "Throw",
    id: string,
    throwScenario:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListThrowsQueryVariables = {
  filter?: ModelThrowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThrowsQuery = {
  listThrows:  {
    __typename: "ModelThrowConnection",
    items:  Array< {
      __typename: "Throw",
      id: string,
      throwScenario:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      throwResults: Array< number >,
      throwSum: number,
      total: number,
      owner: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCharacterQueryVariables = {
  id: string,
};

export type GetCharacterQuery = {
  getCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    playerCharacter: boolean | null,
    startDate: string | null,
    dungeonMaster: string | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      identifier: string | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      holySymbol:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      coatOfArms:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number | null,
      agility: number | null,
      dexterity: number | null,
      stamina: number | null,
      health: number | null,
      beauty: number | null,
      intelligence: number | null,
      willpower: number | null,
      astral: number | null,
    } | null,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number | null,
      currentExperience: number | null,
      experienceForNextLevel: number | null,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiLevel: number | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number | null,
      max: number | null,
    } | null,
    spellResistance:  {
      __typename: "SpellResistance",
      astral:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
      mental:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      notes: string | null,
      manaPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
    wallet:  {
      __typename: "Wallet",
      money: number | null,
      mithrill: string | null,
      gemstones: string | null,
      misc: string | null,
    } | null,
    skillPoints:  {
      __typename: "SkillPoints",
      base: number | null,
      current: number | null,
      perLevel: number | null,
      intelligence: number | null,
      dexterity: number | null,
    } | null,
    languages:  Array< {
      __typename: "LanguageAbility",
      language: string | null,
      level: LanguageLevel | null,
    } > | null,
    inventory:  Array< {
      __typename: "InventoryItem",
      name: string | null,
      amount: string | null,
      location: string | null,
    } > | null,
    poisons:  Array< {
      __typename: "Poison",
      name: string,
      amount: number,
    } > | null,
    notes: string | null,
    armour:  {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shield:  {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    weapons:  {
      __typename: "ModelWeaponAssignmentConnection",
      items:  Array< {
        __typename: "WeaponAssignment",
        id: string,
        characterId: string,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        inHand: boolean | null,
        breakWeapon: Mastery | null,
        disarm: Mastery | null,
        arrowCount: number | null,
        specialProjectileCount: number | null,
        aim: Mastery | null,
        horseback: Mastery | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    skills:  {
      __typename: "ModelSkillAssignmentConnection",
      items:  Array< {
        __typename: "SkillAssignment",
        id: string,
        characterId: string,
        skill:  {
          __typename: "Skill",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          percentageSkill: boolean | null,
          skillGroupId: string,
          skillGroup:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          basicCost: number | null,
          masterCost: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        percentageValue: number | null,
        skillPointsUsed: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    companions:  {
      __typename: "ModelCharacterCompanionConnection",
      items:  Array< {
        __typename: "CharacterCompanion",
        id: string,
        characterId: string,
        name: string,
        type: CompanionType,
        health:  {
          __typename: "HealthInformation",
          vitality:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseVitality: number | null,
          vitalityModifier: number | null,
          hitPoints:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseHitPoints: number | null,
          hitPointModifier: number | null,
          hitPointsPerLevel:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
        } | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        attacksPerTurn: number | null,
        maxDistance: string | null,
        maxLoad: string | null,
        badHabit: string | null,
        specialAbilities: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    magicalItems:  {
      __typename: "ModelMagicalItemAssignmentConnection",
      items:  Array< {
        __typename: "MagicalItemAssignment",
        id: string,
        characterId: string,
        magicalItemId: string,
        magicalItem:  {
          __typename: "MagicalItem",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          class:  {
            __typename: "Class",
            id: string,
            mainClassId: string,
            magicUser: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          manaCost: number,
          duration: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        },
        location: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCharactersQueryVariables = {
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersQuery = {
  listCharacters:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string,
      name: string,
      playerCharacter: boolean | null,
      startDate: string | null,
      dungeonMaster: string | null,
      owner: string | null,
      basicInfo:  {
        __typename: "CharacterBasicInfo",
        image:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
        sex: Sex | null,
        height: string | null,
        weight: string | null,
        hair: string | null,
        eyes: string | null,
        age: number | null,
        visibleAge: number | null,
        identifier: string | null,
        family: string | null,
        attire: string | null,
        personalityTraits: string | null,
        specialAbilities: string | null,
        likes: string | null,
        dislikes: string | null,
        fears: string | null,
        companions: string | null,
        fame: number | null,
        religion: string | null,
        country: string | null,
        school: string | null,
        holySymbol:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
        coatOfArms:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
      } | null,
      abilities:  {
        __typename: "Abilities",
        strength: number | null,
        agility: number | null,
        dexterity: number | null,
        stamina: number | null,
        health: number | null,
        beauty: number | null,
        intelligence: number | null,
        willpower: number | null,
        astral: number | null,
      } | null,
      health:  {
        __typename: "HealthInformation",
        vitality:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseVitality: number | null,
        vitalityModifier: number | null,
        hitPoints:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseHitPoints: number | null,
        hitPointModifier: number | null,
        hitPointsPerLevel:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
      } | null,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      subclass: string | null,
      specialisation: string | null,
      race:  {
        __typename: "Race",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        playable: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personality:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      } | null,
      level:  {
        __typename: "CharacterLevel",
        currentLevel: number | null,
        currentExperience: number | null,
        experienceForNextLevel: number | null,
      } | null,
      psiUser: boolean | null,
      psiSchool:  {
        __typename: "PsiSchool",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        basePsiPoints: number,
        psiPointsPerLevel: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      psiLevel: number | null,
      psiPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      spellResistance:  {
        __typename: "SpellResistance",
        astral:  {
          __typename: "SpellResistanceValues",
          staticShield: number | null,
          dynamicShield: number | null,
          innate: number | null,
          magical: number | null,
          modifier: number | null,
        } | null,
        mental:  {
          __typename: "SpellResistanceValues",
          staticShield: number | null,
          dynamicShield: number | null,
          innate: number | null,
          magical: number | null,
          modifier: number | null,
        } | null,
      } | null,
      magicUser: boolean | null,
      magicalAbility:  {
        __typename: "MagicalAbility",
        notes: string | null,
        manaPoints:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        manaPointsPerLevel: string | null,
        modifiers: string | null,
        manaPointsStoredElsehwere: string | null,
        rechargingMethod: string | null,
      } | null,
      baseCombatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      spentCombatValueModifiers:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      otherCombatValueModifiers:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      combatValueModifiersPerLevel: number | null,
      mandatoryCombatValueModifierDistribution: string | null,
      wallet:  {
        __typename: "Wallet",
        money: number | null,
        mithrill: string | null,
        gemstones: string | null,
        misc: string | null,
      } | null,
      skillPoints:  {
        __typename: "SkillPoints",
        base: number | null,
        current: number | null,
        perLevel: number | null,
        intelligence: number | null,
        dexterity: number | null,
      } | null,
      languages:  Array< {
        __typename: "LanguageAbility",
        language: string | null,
        level: LanguageLevel | null,
      } > | null,
      inventory:  Array< {
        __typename: "InventoryItem",
        name: string | null,
        amount: string | null,
        location: string | null,
      } > | null,
      poisons:  Array< {
        __typename: "Poison",
        name: string,
        amount: number,
      } > | null,
      notes: string | null,
      armour:  {
        __typename: "Armour",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        weight: string | null,
        movementPreventionValue: number,
        damageReductionValue: number,
        price: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      shield:  {
        __typename: "Shield",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        movementPreventionValue: number | null,
        weight: string | null,
        price: number | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        attacksPerTurn: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      weapons:  {
        __typename: "ModelWeaponAssignmentConnection",
        items:  Array< {
          __typename: "WeaponAssignment",
          id: string,
          characterId: string,
          weapon:  {
            __typename: "Weapon",
            id: string,
            weaponTypeId: string,
            weight: string | null,
            price: number | null,
            attackRange: number | null,
            attacksPerTurn: number,
            ranged: boolean | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          mastery: Mastery | null,
          inHand: boolean | null,
          breakWeapon: Mastery | null,
          disarm: Mastery | null,
          arrowCount: number | null,
          specialProjectileCount: number | null,
          aim: Mastery | null,
          horseback: Mastery | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      skills:  {
        __typename: "ModelSkillAssignmentConnection",
        items:  Array< {
          __typename: "SkillAssignment",
          id: string,
          characterId: string,
          skill:  {
            __typename: "Skill",
            id: string,
            percentageSkill: boolean | null,
            skillGroupId: string,
            basicCost: number | null,
            masterCost: number | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          mastery: Mastery | null,
          percentageValue: number | null,
          skillPointsUsed: number | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      companions:  {
        __typename: "ModelCharacterCompanionConnection",
        items:  Array< {
          __typename: "CharacterCompanion",
          id: string,
          characterId: string,
          name: string,
          type: CompanionType,
          health:  {
            __typename: "HealthInformation",
            baseVitality: number | null,
            vitalityModifier: number | null,
            baseHitPoints: number | null,
            hitPointModifier: number | null,
          } | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          } | null,
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
          weapon:  {
            __typename: "Weapon",
            id: string,
            weaponTypeId: string,
            weight: string | null,
            price: number | null,
            attackRange: number | null,
            attacksPerTurn: number,
            ranged: boolean | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          attacksPerTurn: number | null,
          maxDistance: string | null,
          maxLoad: string | null,
          badHabit: string | null,
          specialAbilities: string | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      magicalItems:  {
        __typename: "ModelMagicalItemAssignmentConnection",
        items:  Array< {
          __typename: "MagicalItemAssignment",
          id: string,
          characterId: string,
          magicalItemId: string,
          magicalItem:  {
            __typename: "MagicalItem",
            id: string,
            manaCost: number,
            duration: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          },
          location: string | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWeaponAssignmentQueryVariables = {
  id: string,
};

export type GetWeaponAssignmentQuery = {
  getWeaponAssignment:  {
    __typename: "WeaponAssignment",
    id: string,
    characterId: string,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    inHand: boolean | null,
    breakWeapon: Mastery | null,
    disarm: Mastery | null,
    arrowCount: number | null,
    specialProjectileCount: number | null,
    aim: Mastery | null,
    horseback: Mastery | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListWeaponAssignmentsQueryVariables = {
  filter?: ModelWeaponAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeaponAssignmentsQuery = {
  listWeaponAssignments:  {
    __typename: "ModelWeaponAssignmentConnection",
    items:  Array< {
      __typename: "WeaponAssignment",
      id: string,
      characterId: string,
      weapon:  {
        __typename: "Weapon",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        weaponTypeId: string,
        weaponType:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        weight: string | null,
        price: number | null,
        attackRange: number | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        },
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        },
        attacksPerTurn: number,
        ranged: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      mastery: Mastery | null,
      inHand: boolean | null,
      breakWeapon: Mastery | null,
      disarm: Mastery | null,
      arrowCount: number | null,
      specialProjectileCount: number | null,
      aim: Mastery | null,
      horseback: Mastery | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSkillAssignmentQueryVariables = {
  id: string,
};

export type GetSkillAssignmentQuery = {
  getSkillAssignment:  {
    __typename: "SkillAssignment",
    id: string,
    characterId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    percentageValue: number | null,
    skillPointsUsed: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListSkillAssignmentsQueryVariables = {
  filter?: ModelSkillAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillAssignmentsQuery = {
  listSkillAssignments:  {
    __typename: "ModelSkillAssignmentConnection",
    items:  Array< {
      __typename: "SkillAssignment",
      id: string,
      characterId: string,
      skill:  {
        __typename: "Skill",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        percentageSkill: boolean | null,
        skillGroupId: string,
        skillGroup:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        basicCost: number | null,
        masterCost: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      mastery: Mastery | null,
      percentageValue: number | null,
      skillPointsUsed: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCharacterCompanionQueryVariables = {
  id: string,
};

export type GetCharacterCompanionQuery = {
  getCharacterCompanion:  {
    __typename: "CharacterCompanion",
    id: string,
    characterId: string,
    name: string,
    type: CompanionType,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attacksPerTurn: number | null,
    maxDistance: string | null,
    maxLoad: string | null,
    badHabit: string | null,
    specialAbilities: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListCharacterCompanionsQueryVariables = {
  filter?: ModelCharacterCompanionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterCompanionsQuery = {
  listCharacterCompanions:  {
    __typename: "ModelCharacterCompanionConnection",
    items:  Array< {
      __typename: "CharacterCompanion",
      id: string,
      characterId: string,
      name: string,
      type: CompanionType,
      health:  {
        __typename: "HealthInformation",
        vitality:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseVitality: number | null,
        vitalityModifier: number | null,
        hitPoints:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseHitPoints: number | null,
        hitPointModifier: number | null,
        hitPointsPerLevel:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
      } | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      weapon:  {
        __typename: "Weapon",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        weaponTypeId: string,
        weaponType:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        weight: string | null,
        price: number | null,
        attackRange: number | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        },
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        },
        attacksPerTurn: number,
        ranged: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      attacksPerTurn: number | null,
      maxDistance: string | null,
      maxLoad: string | null,
      badHabit: string | null,
      specialAbilities: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMagicalItemAssignmentQueryVariables = {
  id: string,
};

export type GetMagicalItemAssignmentQuery = {
  getMagicalItemAssignment:  {
    __typename: "MagicalItemAssignment",
    id: string,
    characterId: string,
    magicalItemId: string,
    magicalItem:  {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    location: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListMagicalItemAssignmentsQueryVariables = {
  filter?: ModelMagicalItemAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMagicalItemAssignmentsQuery = {
  listMagicalItemAssignments:  {
    __typename: "ModelMagicalItemAssignmentConnection",
    items:  Array< {
      __typename: "MagicalItemAssignment",
      id: string,
      characterId: string,
      magicalItemId: string,
      magicalItem:  {
        __typename: "MagicalItem",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        class:  {
          __typename: "Class",
          id: string,
          mainClassId: string,
          mainClass:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          magicUser: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        manaCost: number,
        duration: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      },
      location: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListValueRangeValuesByTypeQueryVariables = {
  type?: ValueRangeType | null,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelValueRangeValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListValueRangeValuesByTypeQuery = {
  listValueRangeValuesByType:  {
    __typename: "ModelValueRangeValueConnection",
    items:  Array< {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListClassesByMainClassQueryVariables = {
  mainClassId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesByMainClassQuery = {
  listClassesByMainClass:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListCharactersByOwnerQueryVariables = {
  owner?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersByOwnerQuery = {
  listCharactersByOwner:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string,
      name: string,
      playerCharacter: boolean | null,
      startDate: string | null,
      dungeonMaster: string | null,
      owner: string | null,
      basicInfo:  {
        __typename: "CharacterBasicInfo",
        image:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
        sex: Sex | null,
        height: string | null,
        weight: string | null,
        hair: string | null,
        eyes: string | null,
        age: number | null,
        visibleAge: number | null,
        identifier: string | null,
        family: string | null,
        attire: string | null,
        personalityTraits: string | null,
        specialAbilities: string | null,
        likes: string | null,
        dislikes: string | null,
        fears: string | null,
        companions: string | null,
        fame: number | null,
        religion: string | null,
        country: string | null,
        school: string | null,
        holySymbol:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
        coatOfArms:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
      } | null,
      abilities:  {
        __typename: "Abilities",
        strength: number | null,
        agility: number | null,
        dexterity: number | null,
        stamina: number | null,
        health: number | null,
        beauty: number | null,
        intelligence: number | null,
        willpower: number | null,
        astral: number | null,
      } | null,
      health:  {
        __typename: "HealthInformation",
        vitality:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseVitality: number | null,
        vitalityModifier: number | null,
        hitPoints:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseHitPoints: number | null,
        hitPointModifier: number | null,
        hitPointsPerLevel:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
      } | null,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      subclass: string | null,
      specialisation: string | null,
      race:  {
        __typename: "Race",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        playable: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personality:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      } | null,
      level:  {
        __typename: "CharacterLevel",
        currentLevel: number | null,
        currentExperience: number | null,
        experienceForNextLevel: number | null,
      } | null,
      psiUser: boolean | null,
      psiSchool:  {
        __typename: "PsiSchool",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        basePsiPoints: number,
        psiPointsPerLevel: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      psiLevel: number | null,
      psiPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      spellResistance:  {
        __typename: "SpellResistance",
        astral:  {
          __typename: "SpellResistanceValues",
          staticShield: number | null,
          dynamicShield: number | null,
          innate: number | null,
          magical: number | null,
          modifier: number | null,
        } | null,
        mental:  {
          __typename: "SpellResistanceValues",
          staticShield: number | null,
          dynamicShield: number | null,
          innate: number | null,
          magical: number | null,
          modifier: number | null,
        } | null,
      } | null,
      magicUser: boolean | null,
      magicalAbility:  {
        __typename: "MagicalAbility",
        notes: string | null,
        manaPoints:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        manaPointsPerLevel: string | null,
        modifiers: string | null,
        manaPointsStoredElsehwere: string | null,
        rechargingMethod: string | null,
      } | null,
      baseCombatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      spentCombatValueModifiers:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      otherCombatValueModifiers:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      combatValueModifiersPerLevel: number | null,
      mandatoryCombatValueModifierDistribution: string | null,
      wallet:  {
        __typename: "Wallet",
        money: number | null,
        mithrill: string | null,
        gemstones: string | null,
        misc: string | null,
      } | null,
      skillPoints:  {
        __typename: "SkillPoints",
        base: number | null,
        current: number | null,
        perLevel: number | null,
        intelligence: number | null,
        dexterity: number | null,
      } | null,
      languages:  Array< {
        __typename: "LanguageAbility",
        language: string | null,
        level: LanguageLevel | null,
      } > | null,
      inventory:  Array< {
        __typename: "InventoryItem",
        name: string | null,
        amount: string | null,
        location: string | null,
      } > | null,
      poisons:  Array< {
        __typename: "Poison",
        name: string,
        amount: number,
      } > | null,
      notes: string | null,
      armour:  {
        __typename: "Armour",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        weight: string | null,
        movementPreventionValue: number,
        damageReductionValue: number,
        price: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      shield:  {
        __typename: "Shield",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        movementPreventionValue: number | null,
        weight: string | null,
        price: number | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        attacksPerTurn: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      weapons:  {
        __typename: "ModelWeaponAssignmentConnection",
        items:  Array< {
          __typename: "WeaponAssignment",
          id: string,
          characterId: string,
          weapon:  {
            __typename: "Weapon",
            id: string,
            weaponTypeId: string,
            weight: string | null,
            price: number | null,
            attackRange: number | null,
            attacksPerTurn: number,
            ranged: boolean | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          mastery: Mastery | null,
          inHand: boolean | null,
          breakWeapon: Mastery | null,
          disarm: Mastery | null,
          arrowCount: number | null,
          specialProjectileCount: number | null,
          aim: Mastery | null,
          horseback: Mastery | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      skills:  {
        __typename: "ModelSkillAssignmentConnection",
        items:  Array< {
          __typename: "SkillAssignment",
          id: string,
          characterId: string,
          skill:  {
            __typename: "Skill",
            id: string,
            percentageSkill: boolean | null,
            skillGroupId: string,
            basicCost: number | null,
            masterCost: number | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          mastery: Mastery | null,
          percentageValue: number | null,
          skillPointsUsed: number | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      companions:  {
        __typename: "ModelCharacterCompanionConnection",
        items:  Array< {
          __typename: "CharacterCompanion",
          id: string,
          characterId: string,
          name: string,
          type: CompanionType,
          health:  {
            __typename: "HealthInformation",
            baseVitality: number | null,
            vitalityModifier: number | null,
            baseHitPoints: number | null,
            hitPointModifier: number | null,
          } | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          } | null,
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
          weapon:  {
            __typename: "Weapon",
            id: string,
            weaponTypeId: string,
            weight: string | null,
            price: number | null,
            attackRange: number | null,
            attacksPerTurn: number,
            ranged: boolean | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          attacksPerTurn: number | null,
          maxDistance: string | null,
          maxLoad: string | null,
          badHabit: string | null,
          specialAbilities: string | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      magicalItems:  {
        __typename: "ModelMagicalItemAssignmentConnection",
        items:  Array< {
          __typename: "MagicalItemAssignment",
          id: string,
          characterId: string,
          magicalItemId: string,
          magicalItem:  {
            __typename: "MagicalItem",
            id: string,
            manaCost: number,
            duration: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          },
          location: string | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListCharactersByDungeonMasterQueryVariables = {
  dungeonMaster?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersByDungeonMasterQuery = {
  listCharactersByDungeonMaster:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string,
      name: string,
      playerCharacter: boolean | null,
      startDate: string | null,
      dungeonMaster: string | null,
      owner: string | null,
      basicInfo:  {
        __typename: "CharacterBasicInfo",
        image:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
        sex: Sex | null,
        height: string | null,
        weight: string | null,
        hair: string | null,
        eyes: string | null,
        age: number | null,
        visibleAge: number | null,
        identifier: string | null,
        family: string | null,
        attire: string | null,
        personalityTraits: string | null,
        specialAbilities: string | null,
        likes: string | null,
        dislikes: string | null,
        fears: string | null,
        companions: string | null,
        fame: number | null,
        religion: string | null,
        country: string | null,
        school: string | null,
        holySymbol:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
        coatOfArms:  {
          __typename: "S3Object",
          bucket: string | null,
          region: string | null,
          key: string | null,
        } | null,
      } | null,
      abilities:  {
        __typename: "Abilities",
        strength: number | null,
        agility: number | null,
        dexterity: number | null,
        stamina: number | null,
        health: number | null,
        beauty: number | null,
        intelligence: number | null,
        willpower: number | null,
        astral: number | null,
      } | null,
      health:  {
        __typename: "HealthInformation",
        vitality:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseVitality: number | null,
        vitalityModifier: number | null,
        hitPoints:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        baseHitPoints: number | null,
        hitPointModifier: number | null,
        hitPointsPerLevel:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
      } | null,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      subclass: string | null,
      specialisation: string | null,
      race:  {
        __typename: "Race",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        playable: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      personality:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      } | null,
      level:  {
        __typename: "CharacterLevel",
        currentLevel: number | null,
        currentExperience: number | null,
        experienceForNextLevel: number | null,
      } | null,
      psiUser: boolean | null,
      psiSchool:  {
        __typename: "PsiSchool",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        basePsiPoints: number,
        psiPointsPerLevel: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      psiLevel: number | null,
      psiPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      spellResistance:  {
        __typename: "SpellResistance",
        astral:  {
          __typename: "SpellResistanceValues",
          staticShield: number | null,
          dynamicShield: number | null,
          innate: number | null,
          magical: number | null,
          modifier: number | null,
        } | null,
        mental:  {
          __typename: "SpellResistanceValues",
          staticShield: number | null,
          dynamicShield: number | null,
          innate: number | null,
          magical: number | null,
          modifier: number | null,
        } | null,
      } | null,
      magicUser: boolean | null,
      magicalAbility:  {
        __typename: "MagicalAbility",
        notes: string | null,
        manaPoints:  {
          __typename: "MutablePointValue",
          current: number | null,
          max: number | null,
        } | null,
        manaPointsPerLevel: string | null,
        modifiers: string | null,
        manaPointsStoredElsehwere: string | null,
        rechargingMethod: string | null,
      } | null,
      baseCombatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      spentCombatValueModifiers:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      otherCombatValueModifiers:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      combatValueModifiersPerLevel: number | null,
      mandatoryCombatValueModifierDistribution: string | null,
      wallet:  {
        __typename: "Wallet",
        money: number | null,
        mithrill: string | null,
        gemstones: string | null,
        misc: string | null,
      } | null,
      skillPoints:  {
        __typename: "SkillPoints",
        base: number | null,
        current: number | null,
        perLevel: number | null,
        intelligence: number | null,
        dexterity: number | null,
      } | null,
      languages:  Array< {
        __typename: "LanguageAbility",
        language: string | null,
        level: LanguageLevel | null,
      } > | null,
      inventory:  Array< {
        __typename: "InventoryItem",
        name: string | null,
        amount: string | null,
        location: string | null,
      } > | null,
      poisons:  Array< {
        __typename: "Poison",
        name: string,
        amount: number,
      } > | null,
      notes: string | null,
      armour:  {
        __typename: "Armour",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        weight: string | null,
        movementPreventionValue: number,
        damageReductionValue: number,
        price: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      shield:  {
        __typename: "Shield",
        id: string,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        movementPreventionValue: number | null,
        weight: string | null,
        price: number | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        attacksPerTurn: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      weapons:  {
        __typename: "ModelWeaponAssignmentConnection",
        items:  Array< {
          __typename: "WeaponAssignment",
          id: string,
          characterId: string,
          weapon:  {
            __typename: "Weapon",
            id: string,
            weaponTypeId: string,
            weight: string | null,
            price: number | null,
            attackRange: number | null,
            attacksPerTurn: number,
            ranged: boolean | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          mastery: Mastery | null,
          inHand: boolean | null,
          breakWeapon: Mastery | null,
          disarm: Mastery | null,
          arrowCount: number | null,
          specialProjectileCount: number | null,
          aim: Mastery | null,
          horseback: Mastery | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      skills:  {
        __typename: "ModelSkillAssignmentConnection",
        items:  Array< {
          __typename: "SkillAssignment",
          id: string,
          characterId: string,
          skill:  {
            __typename: "Skill",
            id: string,
            percentageSkill: boolean | null,
            skillGroupId: string,
            basicCost: number | null,
            masterCost: number | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          mastery: Mastery | null,
          percentageValue: number | null,
          skillPointsUsed: number | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      companions:  {
        __typename: "ModelCharacterCompanionConnection",
        items:  Array< {
          __typename: "CharacterCompanion",
          id: string,
          characterId: string,
          name: string,
          type: CompanionType,
          health:  {
            __typename: "HealthInformation",
            baseVitality: number | null,
            vitalityModifier: number | null,
            baseHitPoints: number | null,
            hitPointModifier: number | null,
          } | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          } | null,
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
          weapon:  {
            __typename: "Weapon",
            id: string,
            weaponTypeId: string,
            weight: string | null,
            price: number | null,
            attackRange: number | null,
            attacksPerTurn: number,
            ranged: boolean | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          attacksPerTurn: number | null,
          maxDistance: string | null,
          maxLoad: string | null,
          badHabit: string | null,
          specialAbilities: string | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      magicalItems:  {
        __typename: "ModelMagicalItemAssignmentConnection",
        items:  Array< {
          __typename: "MagicalItemAssignment",
          id: string,
          characterId: string,
          magicalItemId: string,
          magicalItem:  {
            __typename: "MagicalItem",
            id: string,
            manaCost: number,
            duration: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          },
          location: string | null,
          createdAt: string,
          updatedAt: string,
          owner: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateValueRangeValueSubscription = {
  onCreateValueRangeValue:  {
    __typename: "ValueRangeValue",
    id: string,
    type: ValueRangeType,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateValueRangeValueSubscription = {
  onUpdateValueRangeValue:  {
    __typename: "ValueRangeValue",
    id: string,
    type: ValueRangeType,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteValueRangeValueSubscription = {
  onDeleteValueRangeValue:  {
    __typename: "ValueRangeValue",
    id: string,
    type: ValueRangeType,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClassSubscription = {
  onCreateClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    magicUser: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    magicUser: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    magicUser: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRaceSubscription = {
  onCreateRace:  {
    __typename: "Race",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    playable: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRaceSubscription = {
  onUpdateRace:  {
    __typename: "Race",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    playable: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRaceSubscription = {
  onDeleteRace:  {
    __typename: "Race",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    playable: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePsiSchoolSubscription = {
  onCreatePsiSchool:  {
    __typename: "PsiSchool",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    basePsiPoints: number,
    psiPointsPerLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePsiSchoolSubscription = {
  onUpdatePsiSchool:  {
    __typename: "PsiSchool",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    basePsiPoints: number,
    psiPointsPerLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePsiSchoolSubscription = {
  onDeletePsiSchool:  {
    __typename: "PsiSchool",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    basePsiPoints: number,
    psiPointsPerLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArmourSubscription = {
  onCreateArmour:  {
    __typename: "Armour",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weight: string | null,
    movementPreventionValue: number,
    damageReductionValue: number,
    price: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArmourSubscription = {
  onUpdateArmour:  {
    __typename: "Armour",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weight: string | null,
    movementPreventionValue: number,
    damageReductionValue: number,
    price: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArmourSubscription = {
  onDeleteArmour:  {
    __typename: "Armour",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weight: string | null,
    movementPreventionValue: number,
    damageReductionValue: number,
    price: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShieldSubscription = {
  onCreateShield:  {
    __typename: "Shield",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    movementPreventionValue: number | null,
    weight: string | null,
    price: number | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    attacksPerTurn: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShieldSubscription = {
  onUpdateShield:  {
    __typename: "Shield",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    movementPreventionValue: number | null,
    weight: string | null,
    price: number | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    attacksPerTurn: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShieldSubscription = {
  onDeleteShield:  {
    __typename: "Shield",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    movementPreventionValue: number | null,
    weight: string | null,
    price: number | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    attacksPerTurn: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWeaponSubscription = {
  onCreateWeapon:  {
    __typename: "Weapon",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    },
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    },
    attacksPerTurn: number,
    ranged: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWeaponSubscription = {
  onUpdateWeapon:  {
    __typename: "Weapon",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    },
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    },
    attacksPerTurn: number,
    ranged: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWeaponSubscription = {
  onDeleteWeapon:  {
    __typename: "Weapon",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    },
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    },
    attacksPerTurn: number,
    ranged: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill:  {
    __typename: "Skill",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    percentageSkill: boolean | null,
    skillGroupId: string,
    skillGroup:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill:  {
    __typename: "Skill",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    percentageSkill: boolean | null,
    skillGroupId: string,
    skillGroup:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill:  {
    __typename: "Skill",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    percentageSkill: boolean | null,
    skillGroupId: string,
    skillGroup:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMagicalItemSubscription = {
  onCreateMagicalItem:  {
    __typename: "MagicalItem",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMagicalItemSubscription = {
  onUpdateMagicalItem:  {
    __typename: "MagicalItem",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMagicalItemSubscription = {
  onDeleteMagicalItem:  {
    __typename: "MagicalItem",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThrowSubscription = {
  onCreateThrow:  {
    __typename: "Throw",
    id: string,
    throwScenario:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThrowSubscription = {
  onUpdateThrow:  {
    __typename: "Throw",
    id: string,
    throwScenario:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThrowSubscription = {
  onDeleteThrow:  {
    __typename: "Throw",
    id: string,
    throwScenario:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharacterSubscriptionVariables = {
  owner?: string | null,
  dungeonMaster?: string | null,
};

export type OnCreateCharacterSubscription = {
  onCreateCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    playerCharacter: boolean | null,
    startDate: string | null,
    dungeonMaster: string | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      identifier: string | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      holySymbol:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      coatOfArms:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number | null,
      agility: number | null,
      dexterity: number | null,
      stamina: number | null,
      health: number | null,
      beauty: number | null,
      intelligence: number | null,
      willpower: number | null,
      astral: number | null,
    } | null,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number | null,
      currentExperience: number | null,
      experienceForNextLevel: number | null,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiLevel: number | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number | null,
      max: number | null,
    } | null,
    spellResistance:  {
      __typename: "SpellResistance",
      astral:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
      mental:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      notes: string | null,
      manaPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
    wallet:  {
      __typename: "Wallet",
      money: number | null,
      mithrill: string | null,
      gemstones: string | null,
      misc: string | null,
    } | null,
    skillPoints:  {
      __typename: "SkillPoints",
      base: number | null,
      current: number | null,
      perLevel: number | null,
      intelligence: number | null,
      dexterity: number | null,
    } | null,
    languages:  Array< {
      __typename: "LanguageAbility",
      language: string | null,
      level: LanguageLevel | null,
    } > | null,
    inventory:  Array< {
      __typename: "InventoryItem",
      name: string | null,
      amount: string | null,
      location: string | null,
    } > | null,
    poisons:  Array< {
      __typename: "Poison",
      name: string,
      amount: number,
    } > | null,
    notes: string | null,
    armour:  {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shield:  {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    weapons:  {
      __typename: "ModelWeaponAssignmentConnection",
      items:  Array< {
        __typename: "WeaponAssignment",
        id: string,
        characterId: string,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        inHand: boolean | null,
        breakWeapon: Mastery | null,
        disarm: Mastery | null,
        arrowCount: number | null,
        specialProjectileCount: number | null,
        aim: Mastery | null,
        horseback: Mastery | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    skills:  {
      __typename: "ModelSkillAssignmentConnection",
      items:  Array< {
        __typename: "SkillAssignment",
        id: string,
        characterId: string,
        skill:  {
          __typename: "Skill",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          percentageSkill: boolean | null,
          skillGroupId: string,
          skillGroup:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          basicCost: number | null,
          masterCost: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        percentageValue: number | null,
        skillPointsUsed: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    companions:  {
      __typename: "ModelCharacterCompanionConnection",
      items:  Array< {
        __typename: "CharacterCompanion",
        id: string,
        characterId: string,
        name: string,
        type: CompanionType,
        health:  {
          __typename: "HealthInformation",
          vitality:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseVitality: number | null,
          vitalityModifier: number | null,
          hitPoints:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseHitPoints: number | null,
          hitPointModifier: number | null,
          hitPointsPerLevel:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
        } | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        attacksPerTurn: number | null,
        maxDistance: string | null,
        maxLoad: string | null,
        badHabit: string | null,
        specialAbilities: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    magicalItems:  {
      __typename: "ModelMagicalItemAssignmentConnection",
      items:  Array< {
        __typename: "MagicalItemAssignment",
        id: string,
        characterId: string,
        magicalItemId: string,
        magicalItem:  {
          __typename: "MagicalItem",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          class:  {
            __typename: "Class",
            id: string,
            mainClassId: string,
            magicUser: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          manaCost: number,
          duration: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        },
        location: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharacterSubscriptionVariables = {
  owner?: string | null,
  dungeonMaster?: string | null,
};

export type OnUpdateCharacterSubscription = {
  onUpdateCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    playerCharacter: boolean | null,
    startDate: string | null,
    dungeonMaster: string | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      identifier: string | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      holySymbol:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      coatOfArms:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number | null,
      agility: number | null,
      dexterity: number | null,
      stamina: number | null,
      health: number | null,
      beauty: number | null,
      intelligence: number | null,
      willpower: number | null,
      astral: number | null,
    } | null,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number | null,
      currentExperience: number | null,
      experienceForNextLevel: number | null,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiLevel: number | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number | null,
      max: number | null,
    } | null,
    spellResistance:  {
      __typename: "SpellResistance",
      astral:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
      mental:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      notes: string | null,
      manaPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
    wallet:  {
      __typename: "Wallet",
      money: number | null,
      mithrill: string | null,
      gemstones: string | null,
      misc: string | null,
    } | null,
    skillPoints:  {
      __typename: "SkillPoints",
      base: number | null,
      current: number | null,
      perLevel: number | null,
      intelligence: number | null,
      dexterity: number | null,
    } | null,
    languages:  Array< {
      __typename: "LanguageAbility",
      language: string | null,
      level: LanguageLevel | null,
    } > | null,
    inventory:  Array< {
      __typename: "InventoryItem",
      name: string | null,
      amount: string | null,
      location: string | null,
    } > | null,
    poisons:  Array< {
      __typename: "Poison",
      name: string,
      amount: number,
    } > | null,
    notes: string | null,
    armour:  {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shield:  {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    weapons:  {
      __typename: "ModelWeaponAssignmentConnection",
      items:  Array< {
        __typename: "WeaponAssignment",
        id: string,
        characterId: string,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        inHand: boolean | null,
        breakWeapon: Mastery | null,
        disarm: Mastery | null,
        arrowCount: number | null,
        specialProjectileCount: number | null,
        aim: Mastery | null,
        horseback: Mastery | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    skills:  {
      __typename: "ModelSkillAssignmentConnection",
      items:  Array< {
        __typename: "SkillAssignment",
        id: string,
        characterId: string,
        skill:  {
          __typename: "Skill",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          percentageSkill: boolean | null,
          skillGroupId: string,
          skillGroup:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          basicCost: number | null,
          masterCost: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        percentageValue: number | null,
        skillPointsUsed: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    companions:  {
      __typename: "ModelCharacterCompanionConnection",
      items:  Array< {
        __typename: "CharacterCompanion",
        id: string,
        characterId: string,
        name: string,
        type: CompanionType,
        health:  {
          __typename: "HealthInformation",
          vitality:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseVitality: number | null,
          vitalityModifier: number | null,
          hitPoints:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseHitPoints: number | null,
          hitPointModifier: number | null,
          hitPointsPerLevel:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
        } | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        attacksPerTurn: number | null,
        maxDistance: string | null,
        maxLoad: string | null,
        badHabit: string | null,
        specialAbilities: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    magicalItems:  {
      __typename: "ModelMagicalItemAssignmentConnection",
      items:  Array< {
        __typename: "MagicalItemAssignment",
        id: string,
        characterId: string,
        magicalItemId: string,
        magicalItem:  {
          __typename: "MagicalItem",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          class:  {
            __typename: "Class",
            id: string,
            mainClassId: string,
            magicUser: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          manaCost: number,
          duration: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        },
        location: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharacterSubscriptionVariables = {
  owner?: string | null,
  dungeonMaster?: string | null,
};

export type OnDeleteCharacterSubscription = {
  onDeleteCharacter:  {
    __typename: "Character",
    id: string,
    name: string,
    playerCharacter: boolean | null,
    startDate: string | null,
    dungeonMaster: string | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      identifier: string | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      holySymbol:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
      coatOfArms:  {
        __typename: "S3Object",
        bucket: string | null,
        region: string | null,
        key: string | null,
      } | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number | null,
      agility: number | null,
      dexterity: number | null,
      stamina: number | null,
      health: number | null,
      beauty: number | null,
      intelligence: number | null,
      willpower: number | null,
      astral: number | null,
    } | null,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      mainClass:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      magicUser: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      playable: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      createdAt: string,
      updatedAt: string,
    } | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number | null,
      currentExperience: number | null,
      experienceForNextLevel: number | null,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiLevel: number | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number | null,
      max: number | null,
    } | null,
    spellResistance:  {
      __typename: "SpellResistance",
      astral:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
      mental:  {
        __typename: "SpellResistanceValues",
        staticShield: number | null,
        dynamicShield: number | null,
        innate: number | null,
        magical: number | null,
        modifier: number | null,
      } | null,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      notes: string | null,
      manaPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
    wallet:  {
      __typename: "Wallet",
      money: number | null,
      mithrill: string | null,
      gemstones: string | null,
      misc: string | null,
    } | null,
    skillPoints:  {
      __typename: "SkillPoints",
      base: number | null,
      current: number | null,
      perLevel: number | null,
      intelligence: number | null,
      dexterity: number | null,
    } | null,
    languages:  Array< {
      __typename: "LanguageAbility",
      language: string | null,
      level: LanguageLevel | null,
    } > | null,
    inventory:  Array< {
      __typename: "InventoryItem",
      name: string | null,
      amount: string | null,
      location: string | null,
    } > | null,
    poisons:  Array< {
      __typename: "Poison",
      name: string,
      amount: number,
    } > | null,
    notes: string | null,
    armour:  {
      __typename: "Armour",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    shield:  {
      __typename: "Shield",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      } | null,
      movementPreventionValue: number | null,
      weight: string | null,
      price: number | null,
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
      attacksPerTurn: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    weapons:  {
      __typename: "ModelWeaponAssignmentConnection",
      items:  Array< {
        __typename: "WeaponAssignment",
        id: string,
        characterId: string,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        inHand: boolean | null,
        breakWeapon: Mastery | null,
        disarm: Mastery | null,
        arrowCount: number | null,
        specialProjectileCount: number | null,
        aim: Mastery | null,
        horseback: Mastery | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    skills:  {
      __typename: "ModelSkillAssignmentConnection",
      items:  Array< {
        __typename: "SkillAssignment",
        id: string,
        characterId: string,
        skill:  {
          __typename: "Skill",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          percentageSkill: boolean | null,
          skillGroupId: string,
          skillGroup:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          basicCost: number | null,
          masterCost: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        mastery: Mastery | null,
        percentageValue: number | null,
        skillPointsUsed: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    companions:  {
      __typename: "ModelCharacterCompanionConnection",
      items:  Array< {
        __typename: "CharacterCompanion",
        id: string,
        characterId: string,
        name: string,
        type: CompanionType,
        health:  {
          __typename: "HealthInformation",
          vitality:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseVitality: number | null,
          vitalityModifier: number | null,
          hitPoints:  {
            __typename: "MutablePointValue",
            current: number | null,
            max: number | null,
          } | null,
          baseHitPoints: number | null,
          hitPointModifier: number | null,
          hitPointsPerLevel:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          } | null,
        } | null,
        combatValues:  {
          __typename: "CombatValues",
          initiation: number | null,
          offence: number | null,
          defence: number | null,
          aiming: number | null,
        } | null,
        damage:  {
          __typename: "ThrowScenario",
          dice: Dice | null,
          iterationCount: number | null,
          modifier: number | null,
        } | null,
        weapon:  {
          __typename: "Weapon",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          weaponTypeId: string,
          weaponType:  {
            __typename: "ValueRangeValue",
            id: string,
            type: ValueRangeType,
            createdAt: string,
            updatedAt: string,
          },
          weight: string | null,
          price: number | null,
          attackRange: number | null,
          combatValues:  {
            __typename: "CombatValues",
            initiation: number | null,
            offence: number | null,
            defence: number | null,
            aiming: number | null,
          },
          damage:  {
            __typename: "ThrowScenario",
            dice: Dice | null,
            iterationCount: number | null,
            modifier: number | null,
          },
          attacksPerTurn: number,
          ranged: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        attacksPerTurn: number | null,
        maxDistance: string | null,
        maxLoad: string | null,
        badHabit: string | null,
        specialAbilities: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    magicalItems:  {
      __typename: "ModelMagicalItemAssignmentConnection",
      items:  Array< {
        __typename: "MagicalItemAssignment",
        id: string,
        characterId: string,
        magicalItemId: string,
        magicalItem:  {
          __typename: "MagicalItem",
          id: string,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          class:  {
            __typename: "Class",
            id: string,
            mainClassId: string,
            magicUser: boolean | null,
            createdAt: string,
            updatedAt: string,
          },
          manaCost: number,
          duration: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        },
        location: string | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWeaponAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnCreateWeaponAssignmentSubscription = {
  onCreateWeaponAssignment:  {
    __typename: "WeaponAssignment",
    id: string,
    characterId: string,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    inHand: boolean | null,
    breakWeapon: Mastery | null,
    disarm: Mastery | null,
    arrowCount: number | null,
    specialProjectileCount: number | null,
    aim: Mastery | null,
    horseback: Mastery | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateWeaponAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnUpdateWeaponAssignmentSubscription = {
  onUpdateWeaponAssignment:  {
    __typename: "WeaponAssignment",
    id: string,
    characterId: string,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    inHand: boolean | null,
    breakWeapon: Mastery | null,
    disarm: Mastery | null,
    arrowCount: number | null,
    specialProjectileCount: number | null,
    aim: Mastery | null,
    horseback: Mastery | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteWeaponAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnDeleteWeaponAssignmentSubscription = {
  onDeleteWeaponAssignment:  {
    __typename: "WeaponAssignment",
    id: string,
    characterId: string,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    inHand: boolean | null,
    breakWeapon: Mastery | null,
    disarm: Mastery | null,
    arrowCount: number | null,
    specialProjectileCount: number | null,
    aim: Mastery | null,
    horseback: Mastery | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateSkillAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnCreateSkillAssignmentSubscription = {
  onCreateSkillAssignment:  {
    __typename: "SkillAssignment",
    id: string,
    characterId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    percentageValue: number | null,
    skillPointsUsed: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateSkillAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSkillAssignmentSubscription = {
  onUpdateSkillAssignment:  {
    __typename: "SkillAssignment",
    id: string,
    characterId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    percentageValue: number | null,
    skillPointsUsed: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteSkillAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSkillAssignmentSubscription = {
  onDeleteSkillAssignment:  {
    __typename: "SkillAssignment",
    id: string,
    characterId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      percentageSkill: boolean | null,
      skillGroupId: string,
      skillGroup:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      basicCost: number | null,
      masterCost: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mastery: Mastery | null,
    percentageValue: number | null,
    skillPointsUsed: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateCharacterCompanionSubscriptionVariables = {
  owner: string,
};

export type OnCreateCharacterCompanionSubscription = {
  onCreateCharacterCompanion:  {
    __typename: "CharacterCompanion",
    id: string,
    characterId: string,
    name: string,
    type: CompanionType,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attacksPerTurn: number | null,
    maxDistance: string | null,
    maxLoad: string | null,
    badHabit: string | null,
    specialAbilities: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateCharacterCompanionSubscriptionVariables = {
  owner: string,
};

export type OnUpdateCharacterCompanionSubscription = {
  onUpdateCharacterCompanion:  {
    __typename: "CharacterCompanion",
    id: string,
    characterId: string,
    name: string,
    type: CompanionType,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attacksPerTurn: number | null,
    maxDistance: string | null,
    maxLoad: string | null,
    badHabit: string | null,
    specialAbilities: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteCharacterCompanionSubscriptionVariables = {
  owner: string,
};

export type OnDeleteCharacterCompanionSubscription = {
  onDeleteCharacterCompanion:  {
    __typename: "CharacterCompanion",
    id: string,
    characterId: string,
    name: string,
    type: CompanionType,
    health:  {
      __typename: "HealthInformation",
      vitality:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseVitality: number | null,
      vitalityModifier: number | null,
      hitPoints:  {
        __typename: "MutablePointValue",
        current: number | null,
        max: number | null,
      } | null,
      baseHitPoints: number | null,
      hitPointModifier: number | null,
      hitPointsPerLevel:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      } | null,
    } | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number | null,
      offence: number | null,
      defence: number | null,
      aiming: number | null,
    } | null,
    damage:  {
      __typename: "ThrowScenario",
      dice: Dice | null,
      iterationCount: number | null,
      modifier: number | null,
    } | null,
    weapon:  {
      __typename: "Weapon",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      weaponTypeId: string,
      weaponType:  {
        __typename: "ValueRangeValue",
        id: string,
        type: ValueRangeType,
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        createdAt: string,
        updatedAt: string,
      },
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      combatValues:  {
        __typename: "CombatValues",
        initiation: number | null,
        offence: number | null,
        defence: number | null,
        aiming: number | null,
      },
      damage:  {
        __typename: "ThrowScenario",
        dice: Dice | null,
        iterationCount: number | null,
        modifier: number | null,
      },
      attacksPerTurn: number,
      ranged: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attacksPerTurn: number | null,
    maxDistance: string | null,
    maxLoad: string | null,
    badHabit: string | null,
    specialAbilities: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateMagicalItemAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnCreateMagicalItemAssignmentSubscription = {
  onCreateMagicalItemAssignment:  {
    __typename: "MagicalItemAssignment",
    id: string,
    characterId: string,
    magicalItemId: string,
    magicalItem:  {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    location: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateMagicalItemAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMagicalItemAssignmentSubscription = {
  onUpdateMagicalItemAssignment:  {
    __typename: "MagicalItemAssignment",
    id: string,
    characterId: string,
    magicalItemId: string,
    magicalItem:  {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    location: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteMagicalItemAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMagicalItemAssignmentSubscription = {
  onDeleteMagicalItemAssignment:  {
    __typename: "MagicalItemAssignment",
    id: string,
    characterId: string,
    magicalItemId: string,
    magicalItem:  {
      __typename: "MagicalItem",
      id: string,
      descriptions:  Array< {
        __typename: "Description",
        locale: Locale,
        title: string,
        description: string | null,
      } >,
      class:  {
        __typename: "Class",
        id: string,
        mainClassId: string,
        mainClass:  {
          __typename: "ValueRangeValue",
          id: string,
          type: ValueRangeType,
          descriptions:  Array< {
            __typename: "Description",
            locale: Locale,
            title: string,
            description: string | null,
          } >,
          createdAt: string,
          updatedAt: string,
        },
        descriptions:  Array< {
          __typename: "Description",
          locale: Locale,
          title: string,
          description: string | null,
        } >,
        magicUser: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      manaCost: number,
      duration: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    },
    location: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

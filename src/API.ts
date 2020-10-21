/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateObjectTypeInput = {
  id?: string | null,
  name: string,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type DescriptionInput = {
  locale: Locale,
  title: string,
  description?: string | null,
};

export enum Locale {
  en = "en",
  hu = "hu",
}


export type ModelObjectTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelObjectTypeConditionInput | null > | null,
  or?: Array< ModelObjectTypeConditionInput | null > | null,
  not?: ModelObjectTypeConditionInput | null,
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

export type UpdateObjectTypeInput = {
  id: string,
  name?: string | null,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeleteObjectTypeInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateObjectDescriptionInput = {
  id?: string | null,
  objectTypeId: string,
  objectId: string,
  locale: Locale,
  title: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelObjectDescriptionConditionInput = {
  objectTypeId?: ModelIDInput | null,
  objectId?: ModelIDInput | null,
  locale?: ModelLocaleInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelObjectDescriptionConditionInput | null > | null,
  or?: Array< ModelObjectDescriptionConditionInput | null > | null,
  not?: ModelObjectDescriptionConditionInput | null,
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

export type ModelLocaleInput = {
  eq?: Locale | null,
  ne?: Locale | null,
};

export type UpdateObjectDescriptionInput = {
  id: string,
  objectTypeId?: string | null,
  objectId?: string | null,
  locale?: Locale | null,
  title?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteObjectDescriptionInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateDieInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  minValue: number,
  maxValue: number,
  _version?: number | null,
};

export type ModelDieConditionInput = {
  minValue?: ModelIntInput | null,
  maxValue?: ModelIntInput | null,
  and?: Array< ModelDieConditionInput | null > | null,
  or?: Array< ModelDieConditionInput | null > | null,
  not?: ModelDieConditionInput | null,
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

export type UpdateDieInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  minValue?: number | null,
  maxValue?: number | null,
  _version?: number | null,
};

export type DeleteDieInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateThrowScenarioInput = {
  id?: string | null,
  dieId: string,
  iterationCount: number,
  modifier?: number | null,
  _version?: number | null,
};

export type ModelThrowScenarioConditionInput = {
  dieId?: ModelIDInput | null,
  iterationCount?: ModelIntInput | null,
  modifier?: ModelIntInput | null,
  and?: Array< ModelThrowScenarioConditionInput | null > | null,
  or?: Array< ModelThrowScenarioConditionInput | null > | null,
  not?: ModelThrowScenarioConditionInput | null,
};

export type UpdateThrowScenarioInput = {
  id: string,
  dieId?: string | null,
  iterationCount?: number | null,
  modifier?: number | null,
  _version?: number | null,
};

export type DeleteThrowScenarioInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateValueRangeValueInput = {
  id?: string | null,
  type: ValueRangeType,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export enum ValueRangeType {
  MAIN_CLASS = "MAIN_CLASS",
  PERSONALITY = "PERSONALITY",
  MASTERY = "MASTERY",
  SPELL_CATEGORY = "SPELL_CATEGORY",
  WEAPON_TYPE = "WEAPON_TYPE",
  SKILL_GROUP = "SKILL_GROUP",
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
  _version?: number | null,
};

export type DeleteValueRangeValueInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateClassInput = {
  id?: string | null,
  mainClassId: string,
  descriptions: Array< DescriptionInput >,
  magicUser?: boolean | null,
  _version?: number | null,
};

export type ModelClassConditionInput = {
  mainClassId?: ModelIDInput | null,
  magicUser?: ModelBooleanInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
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
  _version?: number | null,
};

export type DeleteClassInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateRaceInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelRaceConditionInput = {
  and?: Array< ModelRaceConditionInput | null > | null,
  or?: Array< ModelRaceConditionInput | null > | null,
  not?: ModelRaceConditionInput | null,
};

export type UpdateRaceInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeleteRaceInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreatePsiSchoolInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  basePsiPoints: number,
  psiPointsPerLevel: number,
  _version?: number | null,
};

export type ModelPsiSchoolConditionInput = {
  basePsiPoints?: ModelIntInput | null,
  psiPointsPerLevel?: ModelIntInput | null,
  and?: Array< ModelPsiSchoolConditionInput | null > | null,
  or?: Array< ModelPsiSchoolConditionInput | null > | null,
  not?: ModelPsiSchoolConditionInput | null,
};

export type UpdatePsiSchoolInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  basePsiPoints?: number | null,
  psiPointsPerLevel?: number | null,
  _version?: number | null,
};

export type DeletePsiSchoolInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateSpellClassInput = {
  id?: string | null,
  spellCategoryId: string,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelSpellClassConditionInput = {
  spellCategoryId?: ModelIDInput | null,
  and?: Array< ModelSpellClassConditionInput | null > | null,
  or?: Array< ModelSpellClassConditionInput | null > | null,
  not?: ModelSpellClassConditionInput | null,
};

export type UpdateSpellClassInput = {
  id: string,
  spellCategoryId?: string | null,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeleteSpellClassInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateArmourInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  weight?: string | null,
  movementPreventionValue: number,
  damageReductionValue: number,
  price: number,
  _version?: number | null,
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

export type UpdateArmourInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  weight?: string | null,
  movementPreventionValue?: number | null,
  damageReductionValue?: number | null,
  price?: number | null,
  _version?: number | null,
};

export type DeleteArmourInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateShieldInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  combatValues: CombatValuesInput,
  weight?: string | null,
  _version?: number | null,
  shieldDamageId: string,
};

export type CombatValuesInput = {
  initiation: number,
  offence: number,
  defence: number,
  aiming: number,
};

export type ModelShieldConditionInput = {
  weight?: ModelStringInput | null,
  and?: Array< ModelShieldConditionInput | null > | null,
  or?: Array< ModelShieldConditionInput | null > | null,
  not?: ModelShieldConditionInput | null,
};

export type UpdateShieldInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  combatValues?: CombatValuesInput | null,
  weight?: string | null,
  _version?: number | null,
  shieldDamageId?: string | null,
};

export type DeleteShieldInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateWeaponInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  ranged?: boolean | null,
  weaponTypeId: string,
  weight?: string | null,
  price?: number | null,
  attackRange?: number | null,
  combatValues: CombatValuesInput,
  attacksPerTurn: number,
  _version?: number | null,
  weaponDamageId: string,
};

export type ModelWeaponConditionInput = {
  ranged?: ModelBooleanInput | null,
  weaponTypeId?: ModelIDInput | null,
  weight?: ModelStringInput | null,
  price?: ModelIntInput | null,
  attackRange?: ModelIntInput | null,
  attacksPerTurn?: ModelFloatInput | null,
  and?: Array< ModelWeaponConditionInput | null > | null,
  or?: Array< ModelWeaponConditionInput | null > | null,
  not?: ModelWeaponConditionInput | null,
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

export type UpdateWeaponInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  ranged?: boolean | null,
  weaponTypeId?: string | null,
  weight?: string | null,
  price?: number | null,
  attackRange?: number | null,
  combatValues?: CombatValuesInput | null,
  attacksPerTurn?: number | null,
  _version?: number | null,
  weaponDamageId?: string | null,
};

export type DeleteWeaponInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateSkillInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  percentageSkill?: boolean | null,
  skillGroupId: string,
  basicCost?: number | null,
  masterCost?: number | null,
  _version?: number | null,
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
  _version?: number | null,
};

export type DeleteSkillInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateMagicalItemInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  manaCost: number,
  duration: string,
  price: number,
  _version?: number | null,
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
  _version?: number | null,
  magicalItemClassId?: string | null,
};

export type DeleteMagicalItemInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateThrowInput = {
  id?: string | null,
  dieId: string,
  iterationCount: number,
  modifier?: number | null,
  throwResults: Array< number >,
  throwSum: number,
  total: number,
  owner?: string | null,
  _version?: number | null,
};

export type ModelThrowConditionInput = {
  dieId?: ModelIDInput | null,
  iterationCount?: ModelIntInput | null,
  modifier?: ModelIntInput | null,
  throwResults?: ModelIntInput | null,
  throwSum?: ModelIntInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelThrowConditionInput | null > | null,
  or?: Array< ModelThrowConditionInput | null > | null,
  not?: ModelThrowConditionInput | null,
};

export type UpdateThrowInput = {
  id: string,
  dieId?: string | null,
  iterationCount?: number | null,
  modifier?: number | null,
  throwResults?: Array< number > | null,
  throwSum?: number | null,
  total?: number | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteThrowInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreatePlayerCharacterInput = {
  id?: string | null,
  name: string,
  startDate: string,
  dungeonMasters?: Array< string | null > | null,
  owner?: string | null,
  basicInfo?: CharacterBasicInfoInput | null,
  abilities?: AbilitiesInput | null,
  health?: HealthInformationInput | null,
  subclass?: string | null,
  specialisation?: string | null,
  religion?: string | null,
  country?: string | null,
  school?: string | null,
  level?: CharacterLevelInput | null,
  psiUser?: boolean | null,
  psiPoints?: MutablePointValueInput | null,
  spellResistance?: SpellResistanceInput | null,
  magicUser?: boolean | null,
  magicalAbility?: MagicalAbilityInput | null,
  holySymbol?: S3ObjectInput | null,
  coatOfArms?: S3ObjectInput | null,
  baseCombatValues?: CombatValuesInput | null,
  spentCombatValueModifiers?: CombatValuesInput | null,
  otherCombatValueModifiers?: CombatValuesInput | null,
  combatValueModifiersPerLevel?: number | null,
  mandatoryCombatValueModifierDistribution?: string | null,
  languages?: Array< LanguageAbilityInput > | null,
  inventory?: Array< InventoryItemInput > | null,
  notes?: Array< string | null > | null,
  _version?: number | null,
  playerCharacterClassId?: string | null,
  playerCharacterRaceId?: string | null,
  playerCharacterPersonalityId?: string | null,
  playerCharacterPsiSchoolId?: string | null,
  playerCharacterPsiMasteryId?: string | null,
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
  family?: string | null,
  attire?: string | null,
  personalityTraits?: string | null,
  specialAbilities?: string | null,
  likes?: string | null,
  dislikes?: string | null,
  fears?: string | null,
  companions?: string | null,
  fame?: number | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}


export type AbilitiesInput = {
  strength: number,
  agility: number,
  dexterity: number,
  stamina: number,
  health: number,
  beauty: number,
  intelligence: number,
  willpower: number,
  astral: number,
};

export type HealthInformationInput = {
  vitality?: MutablePointValueInput | null,
  baseVitality?: number | null,
  hitPoints?: MutablePointValueInput | null,
  baseHitPoints?: number | null,
  hitPointsPerLevel?: string | null,
};

export type MutablePointValueInput = {
  current: number,
  max: number,
};

export type CharacterLevelInput = {
  currentLevel: number,
  currentExperience: number,
  experienceForNextLevel: number,
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
  manaPoints?: MutablePointValueInput | null,
  manaPointsPerLevel?: string | null,
  modifiers?: string | null,
  manaPointsStoredElsehwere?: string | null,
  rechargingMethod?: string | null,
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

export type ModelPlayerCharacterConditionInput = {
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  subclass?: ModelStringInput | null,
  specialisation?: ModelStringInput | null,
  religion?: ModelStringInput | null,
  country?: ModelStringInput | null,
  school?: ModelStringInput | null,
  psiUser?: ModelBooleanInput | null,
  magicUser?: ModelBooleanInput | null,
  combatValueModifiersPerLevel?: ModelIntInput | null,
  mandatoryCombatValueModifierDistribution?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelPlayerCharacterConditionInput | null > | null,
  or?: Array< ModelPlayerCharacterConditionInput | null > | null,
  not?: ModelPlayerCharacterConditionInput | null,
};

export type UpdatePlayerCharacterInput = {
  id: string,
  name?: string | null,
  startDate?: string | null,
  dungeonMasters?: Array< string | null > | null,
  owner?: string | null,
  basicInfo?: CharacterBasicInfoInput | null,
  abilities?: AbilitiesInput | null,
  health?: HealthInformationInput | null,
  subclass?: string | null,
  specialisation?: string | null,
  religion?: string | null,
  country?: string | null,
  school?: string | null,
  level?: CharacterLevelInput | null,
  psiUser?: boolean | null,
  psiPoints?: MutablePointValueInput | null,
  spellResistance?: SpellResistanceInput | null,
  magicUser?: boolean | null,
  magicalAbility?: MagicalAbilityInput | null,
  holySymbol?: S3ObjectInput | null,
  coatOfArms?: S3ObjectInput | null,
  baseCombatValues?: CombatValuesInput | null,
  spentCombatValueModifiers?: CombatValuesInput | null,
  otherCombatValueModifiers?: CombatValuesInput | null,
  combatValueModifiersPerLevel?: number | null,
  mandatoryCombatValueModifierDistribution?: string | null,
  languages?: Array< LanguageAbilityInput > | null,
  inventory?: Array< InventoryItemInput > | null,
  notes?: Array< string | null > | null,
  _version?: number | null,
  playerCharacterClassId?: string | null,
  playerCharacterRaceId?: string | null,
  playerCharacterPersonalityId?: string | null,
  playerCharacterPsiSchoolId?: string | null,
  playerCharacterPsiMasteryId?: string | null,
};

export type DeletePlayerCharacterInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelObjectTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelObjectTypeFilterInput | null > | null,
  or?: Array< ModelObjectTypeFilterInput | null > | null,
  not?: ModelObjectTypeFilterInput | null,
};

export type ModelObjectDescriptionFilterInput = {
  id?: ModelIDInput | null,
  objectTypeId?: ModelIDInput | null,
  objectId?: ModelIDInput | null,
  locale?: ModelLocaleInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelObjectDescriptionFilterInput | null > | null,
  or?: Array< ModelObjectDescriptionFilterInput | null > | null,
  not?: ModelObjectDescriptionFilterInput | null,
};

export type ModelDieFilterInput = {
  id?: ModelIDInput | null,
  minValue?: ModelIntInput | null,
  maxValue?: ModelIntInput | null,
  and?: Array< ModelDieFilterInput | null > | null,
  or?: Array< ModelDieFilterInput | null > | null,
  not?: ModelDieFilterInput | null,
};

export type ModelThrowScenarioFilterInput = {
  id?: ModelIDInput | null,
  dieId?: ModelIDInput | null,
  iterationCount?: ModelIntInput | null,
  modifier?: ModelIntInput | null,
  and?: Array< ModelThrowScenarioFilterInput | null > | null,
  or?: Array< ModelThrowScenarioFilterInput | null > | null,
  not?: ModelThrowScenarioFilterInput | null,
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

export type ModelSpellClassFilterInput = {
  id?: ModelIDInput | null,
  spellCategoryId?: ModelIDInput | null,
  and?: Array< ModelSpellClassFilterInput | null > | null,
  or?: Array< ModelSpellClassFilterInput | null > | null,
  not?: ModelSpellClassFilterInput | null,
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
  weight?: ModelStringInput | null,
  and?: Array< ModelShieldFilterInput | null > | null,
  or?: Array< ModelShieldFilterInput | null > | null,
  not?: ModelShieldFilterInput | null,
};

export type ModelWeaponFilterInput = {
  id?: ModelIDInput | null,
  ranged?: ModelBooleanInput | null,
  weaponTypeId?: ModelIDInput | null,
  weight?: ModelStringInput | null,
  price?: ModelIntInput | null,
  attackRange?: ModelIntInput | null,
  attacksPerTurn?: ModelFloatInput | null,
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
  dieId?: ModelIDInput | null,
  iterationCount?: ModelIntInput | null,
  modifier?: ModelIntInput | null,
  throwResults?: ModelIntInput | null,
  throwSum?: ModelIntInput | null,
  total?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelThrowFilterInput | null > | null,
  or?: Array< ModelThrowFilterInput | null > | null,
  not?: ModelThrowFilterInput | null,
};

export type ModelPlayerCharacterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  dungeonMasters?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  subclass?: ModelStringInput | null,
  specialisation?: ModelStringInput | null,
  religion?: ModelStringInput | null,
  country?: ModelStringInput | null,
  school?: ModelStringInput | null,
  psiUser?: ModelBooleanInput | null,
  magicUser?: ModelBooleanInput | null,
  combatValueModifiersPerLevel?: ModelIntInput | null,
  mandatoryCombatValueModifierDistribution?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelPlayerCharacterFilterInput | null > | null,
  or?: Array< ModelPlayerCharacterFilterInput | null > | null,
  not?: ModelPlayerCharacterFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
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

export type CreateObjectTypeMutationVariables = {
  input: CreateObjectTypeInput,
  condition?: ModelObjectTypeConditionInput | null,
};

export type CreateObjectTypeMutation = {
  createObjectType:  {
    __typename: "ObjectType",
    id: string,
    name: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateObjectTypeMutationVariables = {
  input: UpdateObjectTypeInput,
  condition?: ModelObjectTypeConditionInput | null,
};

export type UpdateObjectTypeMutation = {
  updateObjectType:  {
    __typename: "ObjectType",
    id: string,
    name: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteObjectTypeMutationVariables = {
  input: DeleteObjectTypeInput,
  condition?: ModelObjectTypeConditionInput | null,
};

export type DeleteObjectTypeMutation = {
  deleteObjectType:  {
    __typename: "ObjectType",
    id: string,
    name: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateObjectDescriptionMutationVariables = {
  input: CreateObjectDescriptionInput,
  condition?: ModelObjectDescriptionConditionInput | null,
};

export type CreateObjectDescriptionMutation = {
  createObjectDescription:  {
    __typename: "ObjectDescription",
    id: string,
    objectTypeId: string,
    type:  {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    objectId: string,
    locale: Locale,
    title: string,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateObjectDescriptionMutationVariables = {
  input: UpdateObjectDescriptionInput,
  condition?: ModelObjectDescriptionConditionInput | null,
};

export type UpdateObjectDescriptionMutation = {
  updateObjectDescription:  {
    __typename: "ObjectDescription",
    id: string,
    objectTypeId: string,
    type:  {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    objectId: string,
    locale: Locale,
    title: string,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteObjectDescriptionMutationVariables = {
  input: DeleteObjectDescriptionInput,
  condition?: ModelObjectDescriptionConditionInput | null,
};

export type DeleteObjectDescriptionMutation = {
  deleteObjectDescription:  {
    __typename: "ObjectDescription",
    id: string,
    objectTypeId: string,
    type:  {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    objectId: string,
    locale: Locale,
    title: string,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDieMutationVariables = {
  input: CreateDieInput,
  condition?: ModelDieConditionInput | null,
};

export type CreateDieMutation = {
  createDie:  {
    __typename: "Die",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    minValue: number,
    maxValue: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDieMutationVariables = {
  input: UpdateDieInput,
  condition?: ModelDieConditionInput | null,
};

export type UpdateDieMutation = {
  updateDie:  {
    __typename: "Die",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    minValue: number,
    maxValue: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDieMutationVariables = {
  input: DeleteDieInput,
  condition?: ModelDieConditionInput | null,
};

export type DeleteDieMutation = {
  deleteDie:  {
    __typename: "Die",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    minValue: number,
    maxValue: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThrowScenarioMutationVariables = {
  input: CreateThrowScenarioInput,
  condition?: ModelThrowScenarioConditionInput | null,
};

export type CreateThrowScenarioMutation = {
  createThrowScenario:  {
    __typename: "ThrowScenario",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateThrowScenarioMutationVariables = {
  input: UpdateThrowScenarioInput,
  condition?: ModelThrowScenarioConditionInput | null,
};

export type UpdateThrowScenarioMutation = {
  updateThrowScenario:  {
    __typename: "ThrowScenario",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteThrowScenarioMutationVariables = {
  input: DeleteThrowScenarioInput,
  condition?: ModelThrowScenarioConditionInput | null,
};

export type DeleteThrowScenarioMutation = {
  deleteThrowScenario:  {
    __typename: "ThrowScenario",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSpellClassMutationVariables = {
  input: CreateSpellClassInput,
  condition?: ModelSpellClassConditionInput | null,
};

export type CreateSpellClassMutation = {
  createSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    spellCategory:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpellClassMutationVariables = {
  input: UpdateSpellClassInput,
  condition?: ModelSpellClassConditionInput | null,
};

export type UpdateSpellClassMutation = {
  updateSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    spellCategory:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpellClassMutationVariables = {
  input: DeleteSpellClassInput,
  condition?: ModelSpellClassConditionInput | null,
};

export type DeleteSpellClassMutation = {
  deleteSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    spellCategory:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    weight: string | null,
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    weight: string | null,
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    weight: string | null,
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    ranged: boolean | null,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    attacksPerTurn: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    ranged: boolean | null,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    attacksPerTurn: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    ranged: boolean | null,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    attacksPerTurn: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerCharacterMutationVariables = {
  input: CreatePlayerCharacterInput,
  condition?: ModelPlayerCharacterConditionInput | null,
};

export type CreatePlayerCharacterMutation = {
  createPlayerCharacter:  {
    __typename: "PlayerCharacter",
    id: string,
    name: string,
    startDate: string,
    dungeonMasters: Array< string | null > | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number,
      agility: number,
      dexterity: number,
      stamina: number,
      health: number,
      beauty: number,
      intelligence: number,
      willpower: number,
      astral: number,
    } | null,
    health:  {
      __typename: "HealthInformation",
      baseVitality: number | null,
      baseHitPoints: number | null,
      hitPointsPerLevel: string | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    religion: string | null,
    country: string | null,
    school: string | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number,
      currentExperience: number,
      experienceForNextLevel: number,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiMastery:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number,
      max: number,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    holySymbol:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coatOfArms:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
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
    notes: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerCharacterMutationVariables = {
  input: UpdatePlayerCharacterInput,
  condition?: ModelPlayerCharacterConditionInput | null,
};

export type UpdatePlayerCharacterMutation = {
  updatePlayerCharacter:  {
    __typename: "PlayerCharacter",
    id: string,
    name: string,
    startDate: string,
    dungeonMasters: Array< string | null > | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number,
      agility: number,
      dexterity: number,
      stamina: number,
      health: number,
      beauty: number,
      intelligence: number,
      willpower: number,
      astral: number,
    } | null,
    health:  {
      __typename: "HealthInformation",
      baseVitality: number | null,
      baseHitPoints: number | null,
      hitPointsPerLevel: string | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    religion: string | null,
    country: string | null,
    school: string | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number,
      currentExperience: number,
      experienceForNextLevel: number,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiMastery:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number,
      max: number,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    holySymbol:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coatOfArms:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
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
    notes: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerCharacterMutationVariables = {
  input: DeletePlayerCharacterInput,
  condition?: ModelPlayerCharacterConditionInput | null,
};

export type DeletePlayerCharacterMutation = {
  deletePlayerCharacter:  {
    __typename: "PlayerCharacter",
    id: string,
    name: string,
    startDate: string,
    dungeonMasters: Array< string | null > | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number,
      agility: number,
      dexterity: number,
      stamina: number,
      health: number,
      beauty: number,
      intelligence: number,
      willpower: number,
      astral: number,
    } | null,
    health:  {
      __typename: "HealthInformation",
      baseVitality: number | null,
      baseHitPoints: number | null,
      hitPointsPerLevel: string | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    religion: string | null,
    country: string | null,
    school: string | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number,
      currentExperience: number,
      experienceForNextLevel: number,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiMastery:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number,
      max: number,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    holySymbol:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coatOfArms:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
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
    notes: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncObjectTypesQueryVariables = {
  filter?: ModelObjectTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncObjectTypesQuery = {
  syncObjectTypes:  {
    __typename: "ModelObjectTypeConnection",
    items:  Array< {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetObjectTypeQueryVariables = {
  id: string,
};

export type GetObjectTypeQuery = {
  getObjectType:  {
    __typename: "ObjectType",
    id: string,
    name: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListObjectTypesQueryVariables = {
  filter?: ModelObjectTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListObjectTypesQuery = {
  listObjectTypes:  {
    __typename: "ModelObjectTypeConnection",
    items:  Array< {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncObjectDescriptionsQueryVariables = {
  filter?: ModelObjectDescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncObjectDescriptionsQuery = {
  syncObjectDescriptions:  {
    __typename: "ModelObjectDescriptionConnection",
    items:  Array< {
      __typename: "ObjectDescription",
      id: string,
      objectTypeId: string,
      objectId: string,
      locale: Locale,
      title: string,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetObjectDescriptionQueryVariables = {
  id: string,
};

export type GetObjectDescriptionQuery = {
  getObjectDescription:  {
    __typename: "ObjectDescription",
    id: string,
    objectTypeId: string,
    type:  {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    objectId: string,
    locale: Locale,
    title: string,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListObjectDescriptionsQueryVariables = {
  filter?: ModelObjectDescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListObjectDescriptionsQuery = {
  listObjectDescriptions:  {
    __typename: "ModelObjectDescriptionConnection",
    items:  Array< {
      __typename: "ObjectDescription",
      id: string,
      objectTypeId: string,
      objectId: string,
      locale: Locale,
      title: string,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncDiceQueryVariables = {
  filter?: ModelDieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDiceQuery = {
  syncDice:  {
    __typename: "ModelDieConnection",
    items:  Array< {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetDieQueryVariables = {
  id: string,
};

export type GetDieQuery = {
  getDie:  {
    __typename: "Die",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    minValue: number,
    maxValue: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDiesQueryVariables = {
  filter?: ModelDieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiesQuery = {
  listDies:  {
    __typename: "ModelDieConnection",
    items:  Array< {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncThrowScenariosQueryVariables = {
  filter?: ModelThrowScenarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncThrowScenariosQuery = {
  syncThrowScenarios:  {
    __typename: "ModelThrowScenarioConnection",
    items:  Array< {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetThrowScenarioQueryVariables = {
  id: string,
};

export type GetThrowScenarioQuery = {
  getThrowScenario:  {
    __typename: "ThrowScenario",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListThrowScenariosQueryVariables = {
  filter?: ModelThrowScenarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThrowScenariosQuery = {
  listThrowScenarios:  {
    __typename: "ModelThrowScenarioConnection",
    items:  Array< {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncValueRangeValuesQueryVariables = {
  filter?: ModelValueRangeValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncValueRangeValuesQuery = {
  syncValueRangeValues:  {
    __typename: "ModelValueRangeValueConnection",
    items:  Array< {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClassesQuery = {
  syncClasses:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClasssQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClasssQuery = {
  listClasss:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncRacesQueryVariables = {
  filter?: ModelRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRacesQuery = {
  syncRaces:  {
    __typename: "ModelRaceConnection",
    items:  Array< {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncPsiSchoolsQueryVariables = {
  filter?: ModelPsiSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPsiSchoolsQuery = {
  syncPsiSchools:  {
    __typename: "ModelPsiSchoolConnection",
    items:  Array< {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncSpellClassesQueryVariables = {
  filter?: ModelSpellClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSpellClassesQuery = {
  syncSpellClasses:  {
    __typename: "ModelSpellClassConnection",
    items:  Array< {
      __typename: "SpellClass",
      id: string,
      spellCategoryId: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetSpellClassQueryVariables = {
  id: string,
};

export type GetSpellClassQuery = {
  getSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    spellCategory:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpellClasssQueryVariables = {
  filter?: ModelSpellClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpellClasssQuery = {
  listSpellClasss:  {
    __typename: "ModelSpellClassConnection",
    items:  Array< {
      __typename: "SpellClass",
      id: string,
      spellCategoryId: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncArmoursQueryVariables = {
  filter?: ModelArmourFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncArmoursQuery = {
  syncArmours:  {
    __typename: "ModelArmourConnection",
    items:  Array< {
      __typename: "Armour",
      id: string,
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      weight: string | null,
      movementPreventionValue: number,
      damageReductionValue: number,
      price: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncShieldsQueryVariables = {
  filter?: ModelShieldFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncShieldsQuery = {
  syncShields:  {
    __typename: "ModelShieldConnection",
    items:  Array< {
      __typename: "Shield",
      id: string,
      weight: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    weight: string | null,
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      weight: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncWeaponsQueryVariables = {
  filter?: ModelWeaponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWeaponsQuery = {
  syncWeapons:  {
    __typename: "ModelWeaponConnection",
    items:  Array< {
      __typename: "Weapon",
      id: string,
      ranged: boolean | null,
      weaponTypeId: string,
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      attacksPerTurn: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
    ranged: boolean | null,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    attacksPerTurn: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      ranged: boolean | null,
      weaponTypeId: string,
      weight: string | null,
      price: number | null,
      attackRange: number | null,
      attacksPerTurn: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSkillsQuery = {
  syncSkills:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      percentageSkill: boolean | null,
      skillGroupId: string,
      basicCost: number | null,
      masterCost: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      percentageSkill: boolean | null,
      skillGroupId: string,
      basicCost: number | null,
      masterCost: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncMagicalItemsQueryVariables = {
  filter?: ModelMagicalItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMagicalItemsQuery = {
  syncMagicalItems:  {
    __typename: "ModelMagicalItemConnection",
    items:  Array< {
      __typename: "MagicalItem",
      id: string,
      manaCost: number,
      duration: string,
      price: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      manaCost: number,
      duration: string,
      price: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncThrowsQueryVariables = {
  filter?: ModelThrowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncThrowsQuery = {
  syncThrows:  {
    __typename: "ModelThrowConnection",
    items:  Array< {
      __typename: "Throw",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      throwResults: Array< number >,
      throwSum: number,
      total: number,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetThrowQueryVariables = {
  id: string,
};

export type GetThrowQuery = {
  getThrow:  {
    __typename: "Throw",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      throwResults: Array< number >,
      throwSum: number,
      total: number,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncPlayerCharactersQueryVariables = {
  filter?: ModelPlayerCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerCharactersQuery = {
  syncPlayerCharacters:  {
    __typename: "ModelPlayerCharacterConnection",
    items:  Array< {
      __typename: "PlayerCharacter",
      id: string,
      name: string,
      startDate: string,
      dungeonMasters: Array< string | null > | null,
      owner: string | null,
      subclass: string | null,
      specialisation: string | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      psiUser: boolean | null,
      magicUser: boolean | null,
      combatValueModifiersPerLevel: number | null,
      mandatoryCombatValueModifierDistribution: string | null,
      notes: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetPlayerCharacterQueryVariables = {
  id: string,
};

export type GetPlayerCharacterQuery = {
  getPlayerCharacter:  {
    __typename: "PlayerCharacter",
    id: string,
    name: string,
    startDate: string,
    dungeonMasters: Array< string | null > | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number,
      agility: number,
      dexterity: number,
      stamina: number,
      health: number,
      beauty: number,
      intelligence: number,
      willpower: number,
      astral: number,
    } | null,
    health:  {
      __typename: "HealthInformation",
      baseVitality: number | null,
      baseHitPoints: number | null,
      hitPointsPerLevel: string | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    religion: string | null,
    country: string | null,
    school: string | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number,
      currentExperience: number,
      experienceForNextLevel: number,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiMastery:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number,
      max: number,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    holySymbol:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coatOfArms:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
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
    notes: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayerCharactersQueryVariables = {
  filter?: ModelPlayerCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerCharactersQuery = {
  listPlayerCharacters:  {
    __typename: "ModelPlayerCharacterConnection",
    items:  Array< {
      __typename: "PlayerCharacter",
      id: string,
      name: string,
      startDate: string,
      dungeonMasters: Array< string | null > | null,
      owner: string | null,
      subclass: string | null,
      specialisation: string | null,
      religion: string | null,
      country: string | null,
      school: string | null,
      psiUser: boolean | null,
      magicUser: boolean | null,
      combatValueModifiersPerLevel: number | null,
      mandatoryCombatValueModifierDistribution: string | null,
      notes: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetObjectTypeByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelObjectTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetObjectTypeByNameQuery = {
  getObjectTypeByName:  {
    __typename: "ModelObjectTypeConnection",
    items:  Array< {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type ListObjectDescriptionsByTitleQueryVariables = {
  locale?: Locale | null,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelObjectDescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListObjectDescriptionsByTitleQuery = {
  listObjectDescriptionsByTitle:  {
    __typename: "ModelObjectDescriptionConnection",
    items:  Array< {
      __typename: "ObjectDescription",
      id: string,
      objectTypeId: string,
      objectId: string,
      locale: Locale,
      title: string,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetObjectDescriptionsByObjectIdQueryVariables = {
  objectId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelObjectDescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetObjectDescriptionsByObjectIdQuery = {
  getObjectDescriptionsByObjectId:  {
    __typename: "ModelObjectDescriptionConnection",
    items:  Array< {
      __typename: "ObjectDescription",
      id: string,
      objectTypeId: string,
      objectId: string,
      locale: Locale,
      title: string,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type ListSpellClassesByCategoryQueryVariables = {
  spellCategoryId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSpellClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpellClassesByCategoryQuery = {
  listSpellClassesByCategory:  {
    __typename: "ModelSpellClassConnection",
    items:  Array< {
      __typename: "SpellClass",
      id: string,
      spellCategoryId: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateObjectTypeSubscription = {
  onCreateObjectType:  {
    __typename: "ObjectType",
    id: string,
    name: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateObjectTypeSubscription = {
  onUpdateObjectType:  {
    __typename: "ObjectType",
    id: string,
    name: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteObjectTypeSubscription = {
  onDeleteObjectType:  {
    __typename: "ObjectType",
    id: string,
    name: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateObjectDescriptionSubscription = {
  onCreateObjectDescription:  {
    __typename: "ObjectDescription",
    id: string,
    objectTypeId: string,
    type:  {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    objectId: string,
    locale: Locale,
    title: string,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateObjectDescriptionSubscription = {
  onUpdateObjectDescription:  {
    __typename: "ObjectDescription",
    id: string,
    objectTypeId: string,
    type:  {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    objectId: string,
    locale: Locale,
    title: string,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteObjectDescriptionSubscription = {
  onDeleteObjectDescription:  {
    __typename: "ObjectDescription",
    id: string,
    objectTypeId: string,
    type:  {
      __typename: "ObjectType",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    objectId: string,
    locale: Locale,
    title: string,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDieSubscription = {
  onCreateDie:  {
    __typename: "Die",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    minValue: number,
    maxValue: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDieSubscription = {
  onUpdateDie:  {
    __typename: "Die",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    minValue: number,
    maxValue: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDieSubscription = {
  onDeleteDie:  {
    __typename: "Die",
    id: string,
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    minValue: number,
    maxValue: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThrowScenarioSubscription = {
  onCreateThrowScenario:  {
    __typename: "ThrowScenario",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThrowScenarioSubscription = {
  onUpdateThrowScenario:  {
    __typename: "ThrowScenario",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThrowScenarioSubscription = {
  onDeleteThrowScenario:  {
    __typename: "ThrowScenario",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpellClassSubscription = {
  onCreateSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    spellCategory:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpellClassSubscription = {
  onUpdateSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    spellCategory:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpellClassSubscription = {
  onDeleteSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    spellCategory:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    descriptions:  Array< {
      __typename: "Description",
      locale: Locale,
      title: string,
      description: string | null,
    } >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    weight: string | null,
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    weight: string | null,
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    weight: string | null,
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    ranged: boolean | null,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    attacksPerTurn: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    ranged: boolean | null,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    attacksPerTurn: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    ranged: boolean | null,
    weaponTypeId: string,
    weaponType:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    weight: string | null,
    price: number | null,
    attackRange: number | null,
    combatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    },
    damage:  {
      __typename: "ThrowScenario",
      id: string,
      dieId: string,
      iterationCount: number,
      modifier: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    attacksPerTurn: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    basicCost: number | null,
    masterCost: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    manaCost: number,
    duration: string,
    price: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThrowSubscription = {
  onCreateThrow:  {
    __typename: "Throw",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThrowSubscription = {
  onUpdateThrow:  {
    __typename: "Throw",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThrowSubscription = {
  onDeleteThrow:  {
    __typename: "Throw",
    id: string,
    dieId: string,
    die:  {
      __typename: "Die",
      id: string,
      minValue: number,
      maxValue: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    iterationCount: number,
    modifier: number | null,
    throwResults: Array< number >,
    throwSum: number,
    total: number,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerCharacterSubscriptionVariables = {
  owner: string,
  dungeonMasters: string,
};

export type OnCreatePlayerCharacterSubscription = {
  onCreatePlayerCharacter:  {
    __typename: "PlayerCharacter",
    id: string,
    name: string,
    startDate: string,
    dungeonMasters: Array< string | null > | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number,
      agility: number,
      dexterity: number,
      stamina: number,
      health: number,
      beauty: number,
      intelligence: number,
      willpower: number,
      astral: number,
    } | null,
    health:  {
      __typename: "HealthInformation",
      baseVitality: number | null,
      baseHitPoints: number | null,
      hitPointsPerLevel: string | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    religion: string | null,
    country: string | null,
    school: string | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number,
      currentExperience: number,
      experienceForNextLevel: number,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiMastery:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number,
      max: number,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    holySymbol:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coatOfArms:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
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
    notes: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerCharacterSubscriptionVariables = {
  owner: string,
  dungeonMasters: string,
};

export type OnUpdatePlayerCharacterSubscription = {
  onUpdatePlayerCharacter:  {
    __typename: "PlayerCharacter",
    id: string,
    name: string,
    startDate: string,
    dungeonMasters: Array< string | null > | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number,
      agility: number,
      dexterity: number,
      stamina: number,
      health: number,
      beauty: number,
      intelligence: number,
      willpower: number,
      astral: number,
    } | null,
    health:  {
      __typename: "HealthInformation",
      baseVitality: number | null,
      baseHitPoints: number | null,
      hitPointsPerLevel: string | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    religion: string | null,
    country: string | null,
    school: string | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number,
      currentExperience: number,
      experienceForNextLevel: number,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiMastery:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number,
      max: number,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    holySymbol:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coatOfArms:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
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
    notes: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerCharacterSubscriptionVariables = {
  owner: string,
  dungeonMasters: string,
};

export type OnDeletePlayerCharacterSubscription = {
  onDeletePlayerCharacter:  {
    __typename: "PlayerCharacter",
    id: string,
    name: string,
    startDate: string,
    dungeonMasters: Array< string | null > | null,
    owner: string | null,
    basicInfo:  {
      __typename: "CharacterBasicInfo",
      sex: Sex | null,
      height: string | null,
      weight: string | null,
      hair: string | null,
      eyes: string | null,
      age: number | null,
      visibleAge: number | null,
      family: string | null,
      attire: string | null,
      personalityTraits: string | null,
      specialAbilities: string | null,
      likes: string | null,
      dislikes: string | null,
      fears: string | null,
      companions: string | null,
      fame: number | null,
    } | null,
    abilities:  {
      __typename: "Abilities",
      strength: number,
      agility: number,
      dexterity: number,
      stamina: number,
      health: number,
      beauty: number,
      intelligence: number,
      willpower: number,
      astral: number,
    } | null,
    health:  {
      __typename: "HealthInformation",
      baseVitality: number | null,
      baseHitPoints: number | null,
      hitPointsPerLevel: string | null,
    } | null,
    class:  {
      __typename: "Class",
      id: string,
      mainClassId: string,
      magicUser: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subclass: string | null,
    specialisation: string | null,
    race:  {
      __typename: "Race",
      id: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    personality:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    religion: string | null,
    country: string | null,
    school: string | null,
    level:  {
      __typename: "CharacterLevel",
      currentLevel: number,
      currentExperience: number,
      experienceForNextLevel: number,
    } | null,
    psiUser: boolean | null,
    psiSchool:  {
      __typename: "PsiSchool",
      id: string,
      basePsiPoints: number,
      psiPointsPerLevel: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiMastery:  {
      __typename: "ValueRangeValue",
      id: string,
      type: ValueRangeType,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    psiPoints:  {
      __typename: "MutablePointValue",
      current: number,
      max: number,
    } | null,
    magicUser: boolean | null,
    magicalAbility:  {
      __typename: "MagicalAbility",
      manaPointsPerLevel: string | null,
      modifiers: string | null,
      manaPointsStoredElsehwere: string | null,
      rechargingMethod: string | null,
    } | null,
    holySymbol:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    coatOfArms:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    baseCombatValues:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    spentCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    otherCombatValueModifiers:  {
      __typename: "CombatValues",
      initiation: number,
      offence: number,
      defence: number,
      aiming: number,
    } | null,
    combatValueModifiersPerLevel: number | null,
    mandatoryCombatValueModifierDistribution: string | null,
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
    notes: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

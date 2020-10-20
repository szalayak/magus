/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDieInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  minValue: number,
  maxValue: number,
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

export type CreateMainClassInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelMainClassConditionInput = {
  and?: Array< ModelMainClassConditionInput | null > | null,
  or?: Array< ModelMainClassConditionInput | null > | null,
  not?: ModelMainClassConditionInput | null,
};

export type UpdateMainClassInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeleteMainClassInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateClassInput = {
  id?: string | null,
  mainClassId: string,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelClassConditionInput = {
  mainClassId?: ModelIDInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateClassInput = {
  id: string,
  mainClassId?: string | null,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeleteClassInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreatePersonalityInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelPersonalityConditionInput = {
  and?: Array< ModelPersonalityConditionInput | null > | null,
  or?: Array< ModelPersonalityConditionInput | null > | null,
  not?: ModelPersonalityConditionInput | null,
};

export type UpdatePersonalityInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeletePersonalityInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateMasteryInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelMasteryConditionInput = {
  and?: Array< ModelMasteryConditionInput | null > | null,
  or?: Array< ModelMasteryConditionInput | null > | null,
  not?: ModelMasteryConditionInput | null,
};

export type UpdateMasteryInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeleteMasteryInput = {
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

export type CreateSpellCategoryInput = {
  id?: string | null,
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelSpellCategoryConditionInput = {
  and?: Array< ModelSpellCategoryConditionInput | null > | null,
  or?: Array< ModelSpellCategoryConditionInput | null > | null,
  not?: ModelSpellCategoryConditionInput | null,
};

export type UpdateSpellCategoryInput = {
  id: string,
  descriptions?: Array< DescriptionInput > | null,
  _version?: number | null,
};

export type DeleteSpellCategoryInput = {
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
  damage: DamageInput,
  weight?: string | null,
  _version?: number | null,
};

export type CombatValuesInput = {
  initiation: number,
  offence: number,
  defence: number,
  aiming: number,
};

export type DamageInput = {
  numberOfDice: number,
  dieId: string,
  modifier: number,
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
  damage?: DamageInput | null,
  weight?: string | null,
  _version?: number | null,
};

export type DeleteShieldInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelDieFilterInput = {
  id?: ModelIDInput | null,
  minValue?: ModelIntInput | null,
  maxValue?: ModelIntInput | null,
  and?: Array< ModelDieFilterInput | null > | null,
  or?: Array< ModelDieFilterInput | null > | null,
  not?: ModelDieFilterInput | null,
};

export type ModelMainClassFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelMainClassFilterInput | null > | null,
  or?: Array< ModelMainClassFilterInput | null > | null,
  not?: ModelMainClassFilterInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  mainClassId?: ModelIDInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelPersonalityFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelPersonalityFilterInput | null > | null,
  or?: Array< ModelPersonalityFilterInput | null > | null,
  not?: ModelPersonalityFilterInput | null,
};

export type ModelMasteryFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelMasteryFilterInput | null > | null,
  or?: Array< ModelMasteryFilterInput | null > | null,
  not?: ModelMasteryFilterInput | null,
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

export type ModelSpellCategoryFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelSpellCategoryFilterInput | null > | null,
  or?: Array< ModelSpellCategoryFilterInput | null > | null,
  not?: ModelSpellCategoryFilterInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type CreateMainClassMutationVariables = {
  input: CreateMainClassInput,
  condition?: ModelMainClassConditionInput | null,
};

export type CreateMainClassMutation = {
  createMainClass:  {
    __typename: "MainClass",
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

export type UpdateMainClassMutationVariables = {
  input: UpdateMainClassInput,
  condition?: ModelMainClassConditionInput | null,
};

export type UpdateMainClassMutation = {
  updateMainClass:  {
    __typename: "MainClass",
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

export type DeleteMainClassMutationVariables = {
  input: DeleteMainClassInput,
  condition?: ModelMainClassConditionInput | null,
};

export type DeleteMainClassMutation = {
  deleteMainClass:  {
    __typename: "MainClass",
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
      __typename: "MainClass",
      id: string,
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
      __typename: "MainClass",
      id: string,
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
      __typename: "MainClass",
      id: string,
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

export type CreatePersonalityMutationVariables = {
  input: CreatePersonalityInput,
  condition?: ModelPersonalityConditionInput | null,
};

export type CreatePersonalityMutation = {
  createPersonality:  {
    __typename: "Personality",
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

export type UpdatePersonalityMutationVariables = {
  input: UpdatePersonalityInput,
  condition?: ModelPersonalityConditionInput | null,
};

export type UpdatePersonalityMutation = {
  updatePersonality:  {
    __typename: "Personality",
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

export type DeletePersonalityMutationVariables = {
  input: DeletePersonalityInput,
  condition?: ModelPersonalityConditionInput | null,
};

export type DeletePersonalityMutation = {
  deletePersonality:  {
    __typename: "Personality",
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

export type CreateMasteryMutationVariables = {
  input: CreateMasteryInput,
  condition?: ModelMasteryConditionInput | null,
};

export type CreateMasteryMutation = {
  createMastery:  {
    __typename: "Mastery",
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

export type UpdateMasteryMutationVariables = {
  input: UpdateMasteryInput,
  condition?: ModelMasteryConditionInput | null,
};

export type UpdateMasteryMutation = {
  updateMastery:  {
    __typename: "Mastery",
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

export type DeleteMasteryMutationVariables = {
  input: DeleteMasteryInput,
  condition?: ModelMasteryConditionInput | null,
};

export type DeleteMasteryMutation = {
  deleteMastery:  {
    __typename: "Mastery",
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

export type CreateSpellCategoryMutationVariables = {
  input: CreateSpellCategoryInput,
  condition?: ModelSpellCategoryConditionInput | null,
};

export type CreateSpellCategoryMutation = {
  createSpellCategory:  {
    __typename: "SpellCategory",
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

export type UpdateSpellCategoryMutationVariables = {
  input: UpdateSpellCategoryInput,
  condition?: ModelSpellCategoryConditionInput | null,
};

export type UpdateSpellCategoryMutation = {
  updateSpellCategory:  {
    __typename: "SpellCategory",
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

export type DeleteSpellCategoryMutationVariables = {
  input: DeleteSpellCategoryInput,
  condition?: ModelSpellCategoryConditionInput | null,
};

export type DeleteSpellCategoryMutation = {
  deleteSpellCategory:  {
    __typename: "SpellCategory",
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

export type CreateSpellClassMutationVariables = {
  input: CreateSpellClassInput,
  condition?: ModelSpellClassConditionInput | null,
};

export type CreateSpellClassMutation = {
  createSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    SpellCategory:  {
      __typename: "SpellCategory",
      id: string,
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
    SpellCategory:  {
      __typename: "SpellCategory",
      id: string,
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
    SpellCategory:  {
      __typename: "SpellCategory",
      id: string,
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
    damage:  {
      __typename: "Damage",
      numberOfDice: number,
      dieId: string,
      modifier: number,
    },
    weight: string | null,
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
    damage:  {
      __typename: "Damage",
      numberOfDice: number,
      dieId: string,
      modifier: number,
    },
    weight: string | null,
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
    damage:  {
      __typename: "Damage",
      numberOfDice: number,
      dieId: string,
      modifier: number,
    },
    weight: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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

export type SyncMainClassesQueryVariables = {
  filter?: ModelMainClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMainClassesQuery = {
  syncMainClasses:  {
    __typename: "ModelMainClassConnection",
    items:  Array< {
      __typename: "MainClass",
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

export type GetMainClassQueryVariables = {
  id: string,
};

export type GetMainClassQuery = {
  getMainClass:  {
    __typename: "MainClass",
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

export type ListMainClasssQueryVariables = {
  filter?: ModelMainClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMainClasssQuery = {
  listMainClasss:  {
    __typename: "ModelMainClassConnection",
    items:  Array< {
      __typename: "MainClass",
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
      __typename: "MainClass",
      id: string,
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

export type SyncPersonalitiesQueryVariables = {
  filter?: ModelPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPersonalitiesQuery = {
  syncPersonalities:  {
    __typename: "ModelPersonalityConnection",
    items:  Array< {
      __typename: "Personality",
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

export type GetPersonalityQueryVariables = {
  id: string,
};

export type GetPersonalityQuery = {
  getPersonality:  {
    __typename: "Personality",
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

export type ListPersonalitysQueryVariables = {
  filter?: ModelPersonalityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonalitysQuery = {
  listPersonalitys:  {
    __typename: "ModelPersonalityConnection",
    items:  Array< {
      __typename: "Personality",
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

export type SyncMasteriesQueryVariables = {
  filter?: ModelMasteryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMasteriesQuery = {
  syncMasteries:  {
    __typename: "ModelMasteryConnection",
    items:  Array< {
      __typename: "Mastery",
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

export type GetMasteryQueryVariables = {
  id: string,
};

export type GetMasteryQuery = {
  getMastery:  {
    __typename: "Mastery",
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

export type ListMasterysQueryVariables = {
  filter?: ModelMasteryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMasterysQuery = {
  listMasterys:  {
    __typename: "ModelMasteryConnection",
    items:  Array< {
      __typename: "Mastery",
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

export type SyncSpellCategoriesQueryVariables = {
  filter?: ModelSpellCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSpellCategoriesQuery = {
  syncSpellCategories:  {
    __typename: "ModelSpellCategoryConnection",
    items:  Array< {
      __typename: "SpellCategory",
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

export type GetSpellCategoryQueryVariables = {
  id: string,
};

export type GetSpellCategoryQuery = {
  getSpellCategory:  {
    __typename: "SpellCategory",
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

export type ListSpellCategorysQueryVariables = {
  filter?: ModelSpellCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpellCategorysQuery = {
  listSpellCategorys:  {
    __typename: "ModelSpellCategoryConnection",
    items:  Array< {
      __typename: "SpellCategory",
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
    SpellCategory:  {
      __typename: "SpellCategory",
      id: string,
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
    damage:  {
      __typename: "Damage",
      numberOfDice: number,
      dieId: string,
      modifier: number,
    },
    weight: string | null,
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

export type ClassesByMainClassQueryVariables = {
  mainClassId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClassesByMainClassQuery = {
  classesByMainClass:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      mainClassId: string,
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

export type SpellClassesByCategoryQueryVariables = {
  spellCategoryId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSpellClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SpellClassesByCategoryQuery = {
  spellClassesByCategory:  {
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

export type OnCreateMainClassSubscription = {
  onCreateMainClass:  {
    __typename: "MainClass",
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

export type OnUpdateMainClassSubscription = {
  onUpdateMainClass:  {
    __typename: "MainClass",
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

export type OnDeleteMainClassSubscription = {
  onDeleteMainClass:  {
    __typename: "MainClass",
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

export type OnCreateClassSubscription = {
  onCreateClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "MainClass",
      id: string,
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

export type OnUpdateClassSubscription = {
  onUpdateClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "MainClass",
      id: string,
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

export type OnDeleteClassSubscription = {
  onDeleteClass:  {
    __typename: "Class",
    id: string,
    mainClassId: string,
    mainClass:  {
      __typename: "MainClass",
      id: string,
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

export type OnCreatePersonalitySubscription = {
  onCreatePersonality:  {
    __typename: "Personality",
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

export type OnUpdatePersonalitySubscription = {
  onUpdatePersonality:  {
    __typename: "Personality",
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

export type OnDeletePersonalitySubscription = {
  onDeletePersonality:  {
    __typename: "Personality",
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

export type OnCreateMasterySubscription = {
  onCreateMastery:  {
    __typename: "Mastery",
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

export type OnUpdateMasterySubscription = {
  onUpdateMastery:  {
    __typename: "Mastery",
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

export type OnDeleteMasterySubscription = {
  onDeleteMastery:  {
    __typename: "Mastery",
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

export type OnCreateSpellCategorySubscription = {
  onCreateSpellCategory:  {
    __typename: "SpellCategory",
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

export type OnUpdateSpellCategorySubscription = {
  onUpdateSpellCategory:  {
    __typename: "SpellCategory",
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

export type OnDeleteSpellCategorySubscription = {
  onDeleteSpellCategory:  {
    __typename: "SpellCategory",
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

export type OnCreateSpellClassSubscription = {
  onCreateSpellClass:  {
    __typename: "SpellClass",
    id: string,
    spellCategoryId: string,
    SpellCategory:  {
      __typename: "SpellCategory",
      id: string,
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
    SpellCategory:  {
      __typename: "SpellCategory",
      id: string,
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
    SpellCategory:  {
      __typename: "SpellCategory",
      id: string,
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
    damage:  {
      __typename: "Damage",
      numberOfDice: number,
      dieId: string,
      modifier: number,
    },
    weight: string | null,
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
    damage:  {
      __typename: "Damage",
      numberOfDice: number,
      dieId: string,
      modifier: number,
    },
    weight: string | null,
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
    damage:  {
      __typename: "Damage",
      numberOfDice: number,
      dieId: string,
      modifier: number,
    },
    weight: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

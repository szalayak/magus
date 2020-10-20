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
  descriptions: Array< DescriptionInput >,
  _version?: number | null,
};

export type ModelClassConditionInput = {
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
};

export type UpdateClassInput = {
  id: string,
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

export type ModelDieFilterInput = {
  id?: ModelIDInput | null,
  minValue?: ModelIntInput | null,
  maxValue?: ModelIntInput | null,
  and?: Array< ModelDieFilterInput | null > | null,
  or?: Array< ModelDieFilterInput | null > | null,
  not?: ModelDieFilterInput | null,
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

export type ModelMainClassFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelMainClassFilterInput | null > | null,
  or?: Array< ModelMainClassFilterInput | null > | null,
  not?: ModelMainClassFilterInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
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

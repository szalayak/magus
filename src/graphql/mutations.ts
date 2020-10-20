/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDie = /* GraphQL */ `
  mutation CreateDie(
    $input: CreateDieInput!
    $condition: ModelDieConditionInput
  ) {
    createDie(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      minValue
      maxValue
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDie = /* GraphQL */ `
  mutation UpdateDie(
    $input: UpdateDieInput!
    $condition: ModelDieConditionInput
  ) {
    updateDie(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      minValue
      maxValue
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDie = /* GraphQL */ `
  mutation DeleteDie(
    $input: DeleteDieInput!
    $condition: ModelDieConditionInput
  ) {
    deleteDie(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      minValue
      maxValue
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMainClass = /* GraphQL */ `
  mutation CreateMainClass(
    $input: CreateMainClassInput!
    $condition: ModelMainClassConditionInput
  ) {
    createMainClass(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMainClass = /* GraphQL */ `
  mutation UpdateMainClass(
    $input: UpdateMainClassInput!
    $condition: ModelMainClassConditionInput
  ) {
    updateMainClass(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMainClass = /* GraphQL */ `
  mutation DeleteMainClass(
    $input: DeleteMainClassInput!
    $condition: ModelMainClassConditionInput
  ) {
    deleteMainClass(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      mainClass {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      mainClass {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      mainClass {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPersonality = /* GraphQL */ `
  mutation CreatePersonality(
    $input: CreatePersonalityInput!
    $condition: ModelPersonalityConditionInput
  ) {
    createPersonality(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonality = /* GraphQL */ `
  mutation UpdatePersonality(
    $input: UpdatePersonalityInput!
    $condition: ModelPersonalityConditionInput
  ) {
    updatePersonality(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonality = /* GraphQL */ `
  mutation DeletePersonality(
    $input: DeletePersonalityInput!
    $condition: ModelPersonalityConditionInput
  ) {
    deletePersonality(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMastery = /* GraphQL */ `
  mutation CreateMastery(
    $input: CreateMasteryInput!
    $condition: ModelMasteryConditionInput
  ) {
    createMastery(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMastery = /* GraphQL */ `
  mutation UpdateMastery(
    $input: UpdateMasteryInput!
    $condition: ModelMasteryConditionInput
  ) {
    updateMastery(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMastery = /* GraphQL */ `
  mutation DeleteMastery(
    $input: DeleteMasteryInput!
    $condition: ModelMasteryConditionInput
  ) {
    deleteMastery(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createRace = /* GraphQL */ `
  mutation CreateRace(
    $input: CreateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    createRace(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      damage {
        numberOfDice
        dieId
        modifier
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRace = /* GraphQL */ `
  mutation UpdateRace(
    $input: UpdateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    updateRace(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      damage {
        numberOfDice
        dieId
        modifier
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRace = /* GraphQL */ `
  mutation DeleteRace(
    $input: DeleteRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    deleteRace(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      damage {
        numberOfDice
        dieId
        modifier
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

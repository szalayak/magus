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
      mainClassId
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
      mainClassId
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
      mainClassId
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPsiSchool = /* GraphQL */ `
  mutation CreatePsiSchool(
    $input: CreatePsiSchoolInput!
    $condition: ModelPsiSchoolConditionInput
  ) {
    createPsiSchool(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      basePsiPoints
      psiPointsPerLevel
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePsiSchool = /* GraphQL */ `
  mutation UpdatePsiSchool(
    $input: UpdatePsiSchoolInput!
    $condition: ModelPsiSchoolConditionInput
  ) {
    updatePsiSchool(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      basePsiPoints
      psiPointsPerLevel
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePsiSchool = /* GraphQL */ `
  mutation DeletePsiSchool(
    $input: DeletePsiSchoolInput!
    $condition: ModelPsiSchoolConditionInput
  ) {
    deletePsiSchool(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      basePsiPoints
      psiPointsPerLevel
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSpellCategory = /* GraphQL */ `
  mutation CreateSpellCategory(
    $input: CreateSpellCategoryInput!
    $condition: ModelSpellCategoryConditionInput
  ) {
    createSpellCategory(input: $input, condition: $condition) {
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
export const updateSpellCategory = /* GraphQL */ `
  mutation UpdateSpellCategory(
    $input: UpdateSpellCategoryInput!
    $condition: ModelSpellCategoryConditionInput
  ) {
    updateSpellCategory(input: $input, condition: $condition) {
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
export const deleteSpellCategory = /* GraphQL */ `
  mutation DeleteSpellCategory(
    $input: DeleteSpellCategoryInput!
    $condition: ModelSpellCategoryConditionInput
  ) {
    deleteSpellCategory(input: $input, condition: $condition) {
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
export const createSpellClass = /* GraphQL */ `
  mutation CreateSpellClass(
    $input: CreateSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    createSpellClass(input: $input, condition: $condition) {
      id
      spellCategoryId
      SpellCategory {
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
export const updateSpellClass = /* GraphQL */ `
  mutation UpdateSpellClass(
    $input: UpdateSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    updateSpellClass(input: $input, condition: $condition) {
      id
      spellCategoryId
      SpellCategory {
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
export const deleteSpellClass = /* GraphQL */ `
  mutation DeleteSpellClass(
    $input: DeleteSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    deleteSpellClass(input: $input, condition: $condition) {
      id
      spellCategoryId
      SpellCategory {
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
export const createArmour = /* GraphQL */ `
  mutation CreateArmour(
    $input: CreateArmourInput!
    $condition: ModelArmourConditionInput
  ) {
    createArmour(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      weight
      movementPreventionValue
      damageReductionValue
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateArmour = /* GraphQL */ `
  mutation UpdateArmour(
    $input: UpdateArmourInput!
    $condition: ModelArmourConditionInput
  ) {
    updateArmour(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      weight
      movementPreventionValue
      damageReductionValue
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteArmour = /* GraphQL */ `
  mutation DeleteArmour(
    $input: DeleteArmourInput!
    $condition: ModelArmourConditionInput
  ) {
    deleteArmour(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      weight
      movementPreventionValue
      damageReductionValue
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createShield = /* GraphQL */ `
  mutation CreateShield(
    $input: CreateShieldInput!
    $condition: ModelShieldConditionInput
  ) {
    createShield(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        numberOfDice
        dieId
        modifier
      }
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateShield = /* GraphQL */ `
  mutation UpdateShield(
    $input: UpdateShieldInput!
    $condition: ModelShieldConditionInput
  ) {
    updateShield(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        numberOfDice
        dieId
        modifier
      }
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteShield = /* GraphQL */ `
  mutation DeleteShield(
    $input: DeleteShieldInput!
    $condition: ModelShieldConditionInput
  ) {
    deleteShield(input: $input, condition: $condition) {
      id
      descriptions {
        locale
        title
        description
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        numberOfDice
        dieId
        modifier
      }
      weight
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

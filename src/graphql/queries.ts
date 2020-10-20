/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncDice = /* GraphQL */ `
  query SyncDice(
    $filter: ModelDieFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDice(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        minValue
        maxValue
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDie = /* GraphQL */ `
  query GetDie($id: ID!) {
    getDie(id: $id) {
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
export const listDies = /* GraphQL */ `
  query ListDies(
    $filter: ModelDieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        minValue
        maxValue
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMainClasses = /* GraphQL */ `
  query SyncMainClasses(
    $filter: ModelMainClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMainClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMainClass = /* GraphQL */ `
  query GetMainClass($id: ID!) {
    getMainClass(id: $id) {
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
export const listMainClasss = /* GraphQL */ `
  query ListMainClasss(
    $filter: ModelMainClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMainClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mainClassId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mainClassId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPersonalities = /* GraphQL */ `
  query SyncPersonalities(
    $filter: ModelPersonalityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPersonalities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPersonality = /* GraphQL */ `
  query GetPersonality($id: ID!) {
    getPersonality(id: $id) {
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
export const listPersonalitys = /* GraphQL */ `
  query ListPersonalitys(
    $filter: ModelPersonalityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMasteries = /* GraphQL */ `
  query SyncMasteries(
    $filter: ModelMasteryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMasteries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMastery = /* GraphQL */ `
  query GetMastery($id: ID!) {
    getMastery(id: $id) {
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
export const listMasterys = /* GraphQL */ `
  query ListMasterys(
    $filter: ModelMasteryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMasterys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRaces = /* GraphQL */ `
  query SyncRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRace = /* GraphQL */ `
  query GetRace($id: ID!) {
    getRace(id: $id) {
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
export const listRaces = /* GraphQL */ `
  query ListRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPsiSchools = /* GraphQL */ `
  query SyncPsiSchools(
    $filter: ModelPsiSchoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPsiSchools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        basePsiPoints
        psiPointsPerLevel
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPsiSchool = /* GraphQL */ `
  query GetPsiSchool($id: ID!) {
    getPsiSchool(id: $id) {
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
export const listPsiSchools = /* GraphQL */ `
  query ListPsiSchools(
    $filter: ModelPsiSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPsiSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        basePsiPoints
        psiPointsPerLevel
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSpellCategories = /* GraphQL */ `
  query SyncSpellCategories(
    $filter: ModelSpellCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpellCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSpellCategory = /* GraphQL */ `
  query GetSpellCategory($id: ID!) {
    getSpellCategory(id: $id) {
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
export const listSpellCategorys = /* GraphQL */ `
  query ListSpellCategorys(
    $filter: ModelSpellCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpellCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSpellClasses = /* GraphQL */ `
  query SyncSpellClasses(
    $filter: ModelSpellClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpellClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        spellCategoryId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSpellClass = /* GraphQL */ `
  query GetSpellClass($id: ID!) {
    getSpellClass(id: $id) {
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
export const listSpellClasss = /* GraphQL */ `
  query ListSpellClasss(
    $filter: ModelSpellClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpellClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spellCategoryId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArmours = /* GraphQL */ `
  query SyncArmours(
    $filter: ModelArmourFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArmours(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const getArmour = /* GraphQL */ `
  query GetArmour($id: ID!) {
    getArmour(id: $id) {
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
export const listArmours = /* GraphQL */ `
  query ListArmours(
    $filter: ModelArmourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArmours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const syncShields = /* GraphQL */ `
  query SyncShields(
    $filter: ModelShieldFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShields(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        weight
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getShield = /* GraphQL */ `
  query GetShield($id: ID!) {
    getShield(id: $id) {
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
export const listShields = /* GraphQL */ `
  query ListShields(
    $filter: ModelShieldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShields(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        weight
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const classesByMainClass = /* GraphQL */ `
  query ClassesByMainClass(
    $mainClassId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesByMainClass(
      mainClassId: $mainClassId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mainClassId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const spellClassesByCategory = /* GraphQL */ `
  query SpellClassesByCategory(
    $spellCategoryId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSpellClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spellClassesByCategory(
      spellCategoryId: $spellCategoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        spellCategoryId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;

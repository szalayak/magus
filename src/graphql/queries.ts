/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncObjectTypes = /* GraphQL */ `
  query SyncObjectTypes(
    $filter: ModelObjectTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncObjectTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getObjectType = /* GraphQL */ `
  query GetObjectType($id: ID!) {
    getObjectType(id: $id) {
      id
      name
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
export const listObjectTypes = /* GraphQL */ `
  query ListObjectTypes(
    $filter: ModelObjectTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObjectTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncObjectDescriptions = /* GraphQL */ `
  query SyncObjectDescriptions(
    $filter: ModelObjectDescriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncObjectDescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        objectTypeId
        objectId
        locale
        title
        description
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
export const getObjectDescription = /* GraphQL */ `
  query GetObjectDescription($id: ID!) {
    getObjectDescription(id: $id) {
      id
      objectTypeId
      type {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      objectId
      locale
      title
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listObjectDescriptions = /* GraphQL */ `
  query ListObjectDescriptions(
    $filter: ModelObjectDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObjectDescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        objectTypeId
        objectId
        locale
        title
        description
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
export const syncThrowScenarios = /* GraphQL */ `
  query SyncThrowScenarios(
    $filter: ModelThrowScenarioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncThrowScenarios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dieId
        iterationCount
        modifier
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
export const getThrowScenario = /* GraphQL */ `
  query GetThrowScenario($id: ID!) {
    getThrowScenario(id: $id) {
      id
      dieId
      die {
        id
        minValue
        maxValue
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      iterationCount
      modifier
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listThrowScenarios = /* GraphQL */ `
  query ListThrowScenarios(
    $filter: ModelThrowScenarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThrowScenarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dieId
        iterationCount
        modifier
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
export const syncValueRangeValues = /* GraphQL */ `
  query SyncValueRangeValues(
    $filter: ModelValueRangeValueFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncValueRangeValues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
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
export const getValueRangeValue = /* GraphQL */ `
  query GetValueRangeValue($id: ID!) {
    getValueRangeValue(id: $id) {
      id
      type
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
export const listValueRangeValues = /* GraphQL */ `
  query ListValueRangeValues(
    $filter: ModelValueRangeValueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listValueRangeValues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
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
        magicUser
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
        type
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
      magicUser
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
        magicUser
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
      spellCategory {
        id
        type
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
      weight
      damage {
        id
        dieId
        iterationCount
        modifier
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
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
export const syncWeapons = /* GraphQL */ `
  query SyncWeapons(
    $filter: ModelWeaponFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWeapons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ranged
        weaponTypeId
        weight
        price
        attackRange
        attacksPerTurn
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
export const getWeapon = /* GraphQL */ `
  query GetWeapon($id: ID!) {
    getWeapon(id: $id) {
      id
      descriptions {
        locale
        title
        description
      }
      ranged
      weaponTypeId
      weaponType {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      weight
      price
      attackRange
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        id
        dieId
        iterationCount
        modifier
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      attacksPerTurn
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listWeapons = /* GraphQL */ `
  query ListWeapons(
    $filter: ModelWeaponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeapons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ranged
        weaponTypeId
        weight
        price
        attackRange
        attacksPerTurn
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
export const syncSkills = /* GraphQL */ `
  query SyncSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        percentageSkill
        skillGroupId
        basicCost
        masterCost
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
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      descriptions {
        locale
        title
        description
      }
      percentageSkill
      skillGroupId
      skillGroup {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      basicCost
      masterCost
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        percentageSkill
        skillGroupId
        basicCost
        masterCost
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
export const syncMagicalItems = /* GraphQL */ `
  query SyncMagicalItems(
    $filter: ModelMagicalItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMagicalItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        manaCost
        duration
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
export const getMagicalItem = /* GraphQL */ `
  query GetMagicalItem($id: ID!) {
    getMagicalItem(id: $id) {
      id
      descriptions {
        locale
        title
        description
      }
      class {
        id
        mainClassId
        magicUser
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      manaCost
      duration
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMagicalItems = /* GraphQL */ `
  query ListMagicalItems(
    $filter: ModelMagicalItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMagicalItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        manaCost
        duration
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
export const syncThrows = /* GraphQL */ `
  query SyncThrows(
    $filter: ModelThrowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncThrows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dieId
        iterationCount
        modifier
        throwResults
        throwSum
        total
        owner
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
export const getThrow = /* GraphQL */ `
  query GetThrow($id: ID!) {
    getThrow(id: $id) {
      id
      dieId
      die {
        id
        minValue
        maxValue
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      iterationCount
      modifier
      throwResults
      throwSum
      total
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listThrows = /* GraphQL */ `
  query ListThrows(
    $filter: ModelThrowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThrows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dieId
        iterationCount
        modifier
        throwResults
        throwSum
        total
        owner
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
export const syncPlayerCharacters = /* GraphQL */ `
  query SyncPlayerCharacters(
    $filter: ModelPlayerCharacterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayerCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        startDate
        dungeonMasters
        owner
        subclass
        specialisation
        religion
        country
        school
        psiUser
        magicUser
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        notes
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
export const getPlayerCharacter = /* GraphQL */ `
  query GetPlayerCharacter($id: ID!) {
    getPlayerCharacter(id: $id) {
      id
      name
      startDate
      dungeonMasters
      owner
      basicInfo {
        sex
        height
        weight
        hair
        eyes
        age
        visibleAge
        family
        attire
        personalityTraits
        specialAbilities
        likes
        dislikes
        fears
        companions
        fame
      }
      abilities {
        strength
        agility
        dexterity
        stamina
        health
        beauty
        intelligence
        willpower
        astral
      }
      health {
        baseVitality
        baseHitPoints
        hitPointsPerLevel
      }
      class {
        id
        mainClassId
        magicUser
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      subclass
      specialisation
      race {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      personality {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      religion
      country
      school
      level {
        currentLevel
        currentExperience
        experienceForNextLevel
      }
      psiUser
      psiSchool {
        id
        basePsiPoints
        psiPointsPerLevel
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      psiMastery {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      psiPoints {
        current
        max
      }
      magicUser
      magicalAbility {
        manaPointsPerLevel
        modifiers
        manaPointsStoredElsehwere
        rechargingMethod
      }
      holySymbol {
        bucket
        region
        key
      }
      coatOfArms {
        bucket
        region
        key
      }
      baseCombatValues {
        initiation
        offence
        defence
        aiming
      }
      spentCombatValueModifiers {
        initiation
        offence
        defence
        aiming
      }
      otherCombatValueModifiers {
        initiation
        offence
        defence
        aiming
      }
      combatValueModifiersPerLevel
      mandatoryCombatValueModifierDistribution
      languages {
        language
        level
      }
      inventory {
        name
        amount
        location
      }
      notes
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPlayerCharacters = /* GraphQL */ `
  query ListPlayerCharacters(
    $filter: ModelPlayerCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        dungeonMasters
        owner
        subclass
        specialisation
        religion
        country
        school
        psiUser
        magicUser
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        notes
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
export const getObjectTypeByName = /* GraphQL */ `
  query GetObjectTypeByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelObjectTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getObjectTypeByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
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
export const listObjectDescriptionsByTitle = /* GraphQL */ `
  query ListObjectDescriptionsByTitle(
    $locale: Locale
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelObjectDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObjectDescriptionsByTitle(
      locale: $locale
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        objectTypeId
        objectId
        locale
        title
        description
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
export const getObjectDescriptionsByObjectId = /* GraphQL */ `
  query GetObjectDescriptionsByObjectId(
    $objectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelObjectDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getObjectDescriptionsByObjectId(
      objectId: $objectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        objectTypeId
        objectId
        locale
        title
        description
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
export const listValueRangeValuesByType = /* GraphQL */ `
  query ListValueRangeValuesByType(
    $type: ValueRangeType
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelValueRangeValueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listValueRangeValuesByType(
      type: $type
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
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
export const listClassesByMainClass = /* GraphQL */ `
  query ListClassesByMainClass(
    $mainClassId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassesByMainClass(
      mainClassId: $mainClassId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mainClassId
        magicUser
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
export const listSpellClassesByCategory = /* GraphQL */ `
  query ListSpellClassesByCategory(
    $spellCategoryId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSpellClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpellClassesByCategory(
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

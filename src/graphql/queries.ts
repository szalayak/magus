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
        die {
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
        die {
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
        mainClass {
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
        mainClass {
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
          die {
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
        die {
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
          die {
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
        descriptions {
          locale
          title
          description
        }
        weaponTypeId
        weaponType {
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
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
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
      weaponTypeId
      weaponType {
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
        die {
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
        iterationCount
        modifier
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
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
        descriptions {
          locale
          title
          description
        }
        weaponTypeId
        weaponType {
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
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
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
        descriptions {
          locale
          title
          description
        }
        class {
          id
          mainClassId
          mainClass {
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
        mainClass {
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
        descriptions {
          locale
          title
          description
        }
        class {
          id
          mainClassId
          mainClass {
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
        die {
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
        die {
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
        basicInfo {
          image {
            bucket
            region
            key
          }
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
          religion
          country
          school
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
        currentAbilities {
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
          vitality {
            current
            max
          }
          baseVitality
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointsPerLevel
        }
        class {
          id
          mainClassId
          mainClass {
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
        subclass
        specialisation
        race {
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
        personality {
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
        level {
          currentLevel
          currentExperience
          experienceForNextLevel
        }
        psiUser
        psiSchool {
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
        psiMastery
        psiPoints {
          current
          max
        }
        spellResistance {
          astral {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
          mental {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
        }
        magicUser
        magicalAbility {
          manaPoints {
            current
            max
          }
          manaPointsPerLevel
          modifiers
          manaPointsStoredElsehwere
          rechargingMethod
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
        temporaryCombatValuesModifiers {
          initiation
          offence
          defence
          aiming
        }
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        languages {
          language
          level
        }
        inventory {
          name
          amount
          location
        }
        poisons {
          name
          amount
        }
        notes
        weapons {
          items {
            id
            characterId
            custom
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
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
            ranged
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        skills {
          items {
            id
            characterId
            skillId
            skill {
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
            mastery
            percentageValue
            skillPointsUsed
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        companions {
          items {
            id
            characterId
            name
            type
            health {
              baseVitality
              baseHitPoints
              hitPointsPerLevel
            }
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
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            attacksPerTurn
            maxDistance
            maxLoad
            badHabit
            specialAbilities
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        magicalItems {
          items {
            id
            characterId
            magicalItemId
            magicalItem {
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
            location
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
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
        image {
          bucket
          region
          key
        }
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
        religion
        country
        school
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
      currentAbilities {
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
        vitality {
          current
          max
        }
        baseVitality
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointsPerLevel
      }
      class {
        id
        mainClassId
        mainClass {
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
      subclass
      specialisation
      race {
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
      personality {
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
      level {
        currentLevel
        currentExperience
        experienceForNextLevel
      }
      psiUser
      psiSchool {
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
      psiMastery
      psiPoints {
        current
        max
      }
      spellResistance {
        astral {
          staticShield
          dynamicShield
          innate
          magical
          modifier
        }
        mental {
          staticShield
          dynamicShield
          innate
          magical
          modifier
        }
      }
      magicUser
      magicalAbility {
        manaPoints {
          current
          max
        }
        manaPointsPerLevel
        modifiers
        manaPointsStoredElsehwere
        rechargingMethod
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
      temporaryCombatValuesModifiers {
        initiation
        offence
        defence
        aiming
      }
      combatValueModifiersPerLevel
      mandatoryCombatValueModifierDistribution
      wallet {
        money
        mithrill
        gemstones
        misc
      }
      languages {
        language
        level
      }
      inventory {
        name
        amount
        location
      }
      poisons {
        name
        amount
      }
      notes
      weapons {
        items {
          id
          characterId
          custom
          weapon {
            id
            descriptions {
              locale
              title
              description
            }
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
            ranged
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
          attacksPerTurn
          ranged
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      skills {
        items {
          id
          characterId
          skillId
          skill {
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
          mastery
          percentageValue
          skillPointsUsed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      companions {
        items {
          id
          characterId
          name
          type
          health {
            vitality {
              current
              max
            }
            baseVitality
            hitPoints {
              current
              max
            }
            baseHitPoints
            hitPointsPerLevel
          }
          combatValues {
            initiation
            offence
            defence
            aiming
          }
          damage {
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
          weapon {
            id
            descriptions {
              locale
              title
              description
            }
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
            ranged
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      magicalItems {
        items {
          id
          characterId
          magicalItemId
          magicalItem {
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
          location
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
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
        basicInfo {
          image {
            bucket
            region
            key
          }
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
          religion
          country
          school
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
        currentAbilities {
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
          vitality {
            current
            max
          }
          baseVitality
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointsPerLevel
        }
        class {
          id
          mainClassId
          mainClass {
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
        subclass
        specialisation
        race {
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
        personality {
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
        level {
          currentLevel
          currentExperience
          experienceForNextLevel
        }
        psiUser
        psiSchool {
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
        psiMastery
        psiPoints {
          current
          max
        }
        spellResistance {
          astral {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
          mental {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
        }
        magicUser
        magicalAbility {
          manaPoints {
            current
            max
          }
          manaPointsPerLevel
          modifiers
          manaPointsStoredElsehwere
          rechargingMethod
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
        temporaryCombatValuesModifiers {
          initiation
          offence
          defence
          aiming
        }
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        languages {
          language
          level
        }
        inventory {
          name
          amount
          location
        }
        poisons {
          name
          amount
        }
        notes
        weapons {
          items {
            id
            characterId
            custom
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
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
            ranged
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        skills {
          items {
            id
            characterId
            skillId
            skill {
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
            mastery
            percentageValue
            skillPointsUsed
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        companions {
          items {
            id
            characterId
            name
            type
            health {
              baseVitality
              baseHitPoints
              hitPointsPerLevel
            }
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
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            attacksPerTurn
            maxDistance
            maxLoad
            badHabit
            specialAbilities
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        magicalItems {
          items {
            id
            characterId
            magicalItemId
            magicalItem {
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
            location
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
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
export const syncNonPlayerCharacters = /* GraphQL */ `
  query SyncNonPlayerCharacters(
    $filter: ModelNonPlayerCharacterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNonPlayerCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        owner
        basicInfo {
          image {
            bucket
            region
            key
          }
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
          religion
          country
          school
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
        currentAbilities {
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
          vitality {
            current
            max
          }
          baseVitality
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointsPerLevel
        }
        class {
          id
          mainClassId
          mainClass {
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
        subclass
        specialisation
        race {
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
        personality {
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
        level {
          currentLevel
          currentExperience
          experienceForNextLevel
        }
        psiUser
        psiSchool {
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
        psiMastery
        psiPoints {
          current
          max
        }
        spellResistance {
          astral {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
          mental {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
        }
        magicUser
        magicalAbility {
          manaPoints {
            current
            max
          }
          manaPointsPerLevel
          modifiers
          manaPointsStoredElsehwere
          rechargingMethod
        }
        combatValues {
          initiation
          offence
          defence
          aiming
        }
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        languages {
          language
          level
        }
        inventory {
          name
          amount
          location
        }
        poisons {
          name
          amount
        }
        notes
        weapons {
          items {
            id
            characterId
            custom
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
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
            ranged
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        skills {
          items {
            id
            characterId
            skillId
            skill {
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
            mastery
            percentageValue
            skillPointsUsed
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        companions {
          items {
            id
            characterId
            name
            type
            health {
              baseVitality
              baseHitPoints
              hitPointsPerLevel
            }
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
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            attacksPerTurn
            maxDistance
            maxLoad
            badHabit
            specialAbilities
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        magicalItems {
          items {
            id
            characterId
            magicalItemId
            magicalItem {
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
            location
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
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
export const getNonPlayerCharacter = /* GraphQL */ `
  query GetNonPlayerCharacter($id: ID!) {
    getNonPlayerCharacter(id: $id) {
      id
      name
      owner
      basicInfo {
        image {
          bucket
          region
          key
        }
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
        religion
        country
        school
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
      currentAbilities {
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
        vitality {
          current
          max
        }
        baseVitality
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointsPerLevel
      }
      class {
        id
        mainClassId
        mainClass {
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
      subclass
      specialisation
      race {
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
      personality {
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
      level {
        currentLevel
        currentExperience
        experienceForNextLevel
      }
      psiUser
      psiSchool {
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
      psiMastery
      psiPoints {
        current
        max
      }
      spellResistance {
        astral {
          staticShield
          dynamicShield
          innate
          magical
          modifier
        }
        mental {
          staticShield
          dynamicShield
          innate
          magical
          modifier
        }
      }
      magicUser
      magicalAbility {
        manaPoints {
          current
          max
        }
        manaPointsPerLevel
        modifiers
        manaPointsStoredElsehwere
        rechargingMethod
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      wallet {
        money
        mithrill
        gemstones
        misc
      }
      languages {
        language
        level
      }
      inventory {
        name
        amount
        location
      }
      poisons {
        name
        amount
      }
      notes
      weapons {
        items {
          id
          characterId
          custom
          weapon {
            id
            descriptions {
              locale
              title
              description
            }
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
            ranged
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
          attacksPerTurn
          ranged
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      skills {
        items {
          id
          characterId
          skillId
          skill {
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
          mastery
          percentageValue
          skillPointsUsed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      companions {
        items {
          id
          characterId
          name
          type
          health {
            vitality {
              current
              max
            }
            baseVitality
            hitPoints {
              current
              max
            }
            baseHitPoints
            hitPointsPerLevel
          }
          combatValues {
            initiation
            offence
            defence
            aiming
          }
          damage {
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
          weapon {
            id
            descriptions {
              locale
              title
              description
            }
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
            ranged
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      magicalItems {
        items {
          id
          characterId
          magicalItemId
          magicalItem {
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
          location
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listNonPlayerCharacters = /* GraphQL */ `
  query ListNonPlayerCharacters(
    $filter: ModelNonPlayerCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonPlayerCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        basicInfo {
          image {
            bucket
            region
            key
          }
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
          religion
          country
          school
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
        currentAbilities {
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
          vitality {
            current
            max
          }
          baseVitality
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointsPerLevel
        }
        class {
          id
          mainClassId
          mainClass {
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
        subclass
        specialisation
        race {
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
        personality {
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
        level {
          currentLevel
          currentExperience
          experienceForNextLevel
        }
        psiUser
        psiSchool {
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
        psiMastery
        psiPoints {
          current
          max
        }
        spellResistance {
          astral {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
          mental {
            staticShield
            dynamicShield
            innate
            magical
            modifier
          }
        }
        magicUser
        magicalAbility {
          manaPoints {
            current
            max
          }
          manaPointsPerLevel
          modifiers
          manaPointsStoredElsehwere
          rechargingMethod
        }
        combatValues {
          initiation
          offence
          defence
          aiming
        }
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        languages {
          language
          level
        }
        inventory {
          name
          amount
          location
        }
        poisons {
          name
          amount
        }
        notes
        weapons {
          items {
            id
            characterId
            custom
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
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
            ranged
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        skills {
          items {
            id
            characterId
            skillId
            skill {
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
            mastery
            percentageValue
            skillPointsUsed
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        companions {
          items {
            id
            characterId
            name
            type
            health {
              baseVitality
              baseHitPoints
              hitPointsPerLevel
            }
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
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
              attacksPerTurn
              ranged
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            attacksPerTurn
            maxDistance
            maxLoad
            badHabit
            specialAbilities
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        magicalItems {
          items {
            id
            characterId
            magicalItemId
            magicalItem {
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
            location
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
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
export const syncWeaponAssignments = /* GraphQL */ `
  query SyncWeaponAssignments(
    $filter: ModelWeaponAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWeaponAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        characterId
        custom
        weapon {
          id
          descriptions {
            locale
            title
            description
          }
          weaponTypeId
          weaponType {
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
          attacksPerTurn
          ranged
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
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getWeaponAssignment = /* GraphQL */ `
  query GetWeaponAssignment($id: ID!) {
    getWeaponAssignment(id: $id) {
      id
      characterId
      custom
      weapon {
        id
        descriptions {
          locale
          title
          description
        }
        weaponTypeId
        weaponType {
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
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
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
        die {
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
        iterationCount
        modifier
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWeaponAssignments = /* GraphQL */ `
  query ListWeaponAssignments(
    $filter: ModelWeaponAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeaponAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        custom
        weapon {
          id
          descriptions {
            locale
            title
            description
          }
          weaponTypeId
          weaponType {
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
          attacksPerTurn
          ranged
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
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSkillAssignments = /* GraphQL */ `
  query SyncSkillAssignments(
    $filter: ModelSkillAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkillAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        characterId
        skillId
        skill {
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
          basicCost
          masterCost
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        mastery
        percentageValue
        skillPointsUsed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getSkillAssignment = /* GraphQL */ `
  query GetSkillAssignment($id: ID!) {
    getSkillAssignment(id: $id) {
      id
      characterId
      skillId
      skill {
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
        basicCost
        masterCost
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      mastery
      percentageValue
      skillPointsUsed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSkillAssignments = /* GraphQL */ `
  query ListSkillAssignments(
    $filter: ModelSkillAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        skillId
        skill {
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
          basicCost
          masterCost
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        mastery
        percentageValue
        skillPointsUsed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCharacterCompanions = /* GraphQL */ `
  query SyncCharacterCompanions(
    $filter: ModelCharacterCompanionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCharacterCompanions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        characterId
        name
        type
        health {
          vitality {
            current
            max
          }
          baseVitality
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointsPerLevel
        }
        combatValues {
          initiation
          offence
          defence
          aiming
        }
        damage {
          id
          dieId
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        weapon {
          id
          descriptions {
            locale
            title
            description
          }
          weaponTypeId
          weaponType {
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
          attacksPerTurn
          ranged
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        maxDistance
        maxLoad
        badHabit
        specialAbilities
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCharacterCompanion = /* GraphQL */ `
  query GetCharacterCompanion($id: ID!) {
    getCharacterCompanion(id: $id) {
      id
      characterId
      name
      type
      health {
        vitality {
          current
          max
        }
        baseVitality
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointsPerLevel
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        id
        dieId
        die {
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
        iterationCount
        modifier
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      weapon {
        id
        descriptions {
          locale
          title
          description
        }
        weaponTypeId
        weaponType {
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
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      attacksPerTurn
      maxDistance
      maxLoad
      badHabit
      specialAbilities
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCharacterCompanions = /* GraphQL */ `
  query ListCharacterCompanions(
    $filter: ModelCharacterCompanionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacterCompanions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        name
        type
        health {
          vitality {
            current
            max
          }
          baseVitality
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointsPerLevel
        }
        combatValues {
          initiation
          offence
          defence
          aiming
        }
        damage {
          id
          dieId
          die {
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
          iterationCount
          modifier
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        weapon {
          id
          descriptions {
            locale
            title
            description
          }
          weaponTypeId
          weaponType {
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
          attacksPerTurn
          ranged
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        attacksPerTurn
        maxDistance
        maxLoad
        badHabit
        specialAbilities
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMagicalItemAssignments = /* GraphQL */ `
  query SyncMagicalItemAssignments(
    $filter: ModelMagicalItemAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMagicalItemAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        characterId
        magicalItemId
        magicalItem {
          id
          descriptions {
            locale
            title
            description
          }
          class {
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
          manaCost
          duration
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getMagicalItemAssignment = /* GraphQL */ `
  query GetMagicalItemAssignment($id: ID!) {
    getMagicalItemAssignment(id: $id) {
      id
      characterId
      magicalItemId
      magicalItem {
        id
        descriptions {
          locale
          title
          description
        }
        class {
          id
          mainClassId
          mainClass {
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
        manaCost
        duration
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMagicalItemAssignments = /* GraphQL */ `
  query ListMagicalItemAssignments(
    $filter: ModelMagicalItemAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMagicalItemAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        characterId
        magicalItemId
        magicalItem {
          id
          descriptions {
            locale
            title
            description
          }
          class {
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
          manaCost
          duration
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
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
        mainClass {
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
      nextToken
      startedAt
    }
  }
`;

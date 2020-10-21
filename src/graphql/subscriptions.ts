/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateObjectType = /* GraphQL */ `
  subscription OnCreateObjectType {
    onCreateObjectType {
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
export const onUpdateObjectType = /* GraphQL */ `
  subscription OnUpdateObjectType {
    onUpdateObjectType {
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
export const onDeleteObjectType = /* GraphQL */ `
  subscription OnDeleteObjectType {
    onDeleteObjectType {
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
export const onCreateObjectDescription = /* GraphQL */ `
  subscription OnCreateObjectDescription {
    onCreateObjectDescription {
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
export const onUpdateObjectDescription = /* GraphQL */ `
  subscription OnUpdateObjectDescription {
    onUpdateObjectDescription {
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
export const onDeleteObjectDescription = /* GraphQL */ `
  subscription OnDeleteObjectDescription {
    onDeleteObjectDescription {
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
export const onCreateDie = /* GraphQL */ `
  subscription OnCreateDie {
    onCreateDie {
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
export const onUpdateDie = /* GraphQL */ `
  subscription OnUpdateDie {
    onUpdateDie {
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
export const onDeleteDie = /* GraphQL */ `
  subscription OnDeleteDie {
    onDeleteDie {
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
export const onCreateThrowScenario = /* GraphQL */ `
  subscription OnCreateThrowScenario {
    onCreateThrowScenario {
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
export const onUpdateThrowScenario = /* GraphQL */ `
  subscription OnUpdateThrowScenario {
    onUpdateThrowScenario {
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
export const onDeleteThrowScenario = /* GraphQL */ `
  subscription OnDeleteThrowScenario {
    onDeleteThrowScenario {
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
export const onCreateValueRangeValue = /* GraphQL */ `
  subscription OnCreateValueRangeValue {
    onCreateValueRangeValue {
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
export const onUpdateValueRangeValue = /* GraphQL */ `
  subscription OnUpdateValueRangeValue {
    onUpdateValueRangeValue {
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
export const onDeleteValueRangeValue = /* GraphQL */ `
  subscription OnDeleteValueRangeValue {
    onDeleteValueRangeValue {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace {
    onCreateRace {
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
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace {
    onUpdateRace {
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
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace {
    onDeleteRace {
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
export const onCreatePsiSchool = /* GraphQL */ `
  subscription OnCreatePsiSchool {
    onCreatePsiSchool {
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
export const onUpdatePsiSchool = /* GraphQL */ `
  subscription OnUpdatePsiSchool {
    onUpdatePsiSchool {
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
export const onDeletePsiSchool = /* GraphQL */ `
  subscription OnDeletePsiSchool {
    onDeletePsiSchool {
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
export const onCreateSpellClass = /* GraphQL */ `
  subscription OnCreateSpellClass {
    onCreateSpellClass {
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
export const onUpdateSpellClass = /* GraphQL */ `
  subscription OnUpdateSpellClass {
    onUpdateSpellClass {
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
export const onDeleteSpellClass = /* GraphQL */ `
  subscription OnDeleteSpellClass {
    onDeleteSpellClass {
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
export const onCreateArmour = /* GraphQL */ `
  subscription OnCreateArmour {
    onCreateArmour {
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
export const onUpdateArmour = /* GraphQL */ `
  subscription OnUpdateArmour {
    onUpdateArmour {
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
export const onDeleteArmour = /* GraphQL */ `
  subscription OnDeleteArmour {
    onDeleteArmour {
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
export const onCreateShield = /* GraphQL */ `
  subscription OnCreateShield {
    onCreateShield {
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
export const onUpdateShield = /* GraphQL */ `
  subscription OnUpdateShield {
    onUpdateShield {
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
export const onDeleteShield = /* GraphQL */ `
  subscription OnDeleteShield {
    onDeleteShield {
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
export const onCreateWeapon = /* GraphQL */ `
  subscription OnCreateWeapon {
    onCreateWeapon {
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
export const onUpdateWeapon = /* GraphQL */ `
  subscription OnUpdateWeapon {
    onUpdateWeapon {
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
export const onDeleteWeapon = /* GraphQL */ `
  subscription OnDeleteWeapon {
    onDeleteWeapon {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
export const onCreateMagicalItem = /* GraphQL */ `
  subscription OnCreateMagicalItem {
    onCreateMagicalItem {
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
export const onUpdateMagicalItem = /* GraphQL */ `
  subscription OnUpdateMagicalItem {
    onUpdateMagicalItem {
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
export const onDeleteMagicalItem = /* GraphQL */ `
  subscription OnDeleteMagicalItem {
    onDeleteMagicalItem {
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
export const onCreateThrow = /* GraphQL */ `
  subscription OnCreateThrow {
    onCreateThrow {
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
export const onUpdateThrow = /* GraphQL */ `
  subscription OnUpdateThrow {
    onUpdateThrow {
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
export const onDeleteThrow = /* GraphQL */ `
  subscription OnDeleteThrow {
    onDeleteThrow {
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
export const onCreatePlayerCharacter = /* GraphQL */ `
  subscription OnCreatePlayerCharacter(
    $owner: String!
    $dungeonMasters: String!
  ) {
    onCreatePlayerCharacter(owner: $owner, dungeonMasters: $dungeonMasters) {
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
export const onUpdatePlayerCharacter = /* GraphQL */ `
  subscription OnUpdatePlayerCharacter(
    $owner: String!
    $dungeonMasters: String!
  ) {
    onUpdatePlayerCharacter(owner: $owner, dungeonMasters: $dungeonMasters) {
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
export const onDeletePlayerCharacter = /* GraphQL */ `
  subscription OnDeletePlayerCharacter(
    $owner: String!
    $dungeonMasters: String!
  ) {
    onDeletePlayerCharacter(owner: $owner, dungeonMasters: $dungeonMasters) {
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

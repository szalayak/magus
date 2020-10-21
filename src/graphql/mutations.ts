/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createObjectType = /* GraphQL */ `
  mutation CreateObjectType(
    $input: CreateObjectTypeInput!
    $condition: ModelObjectTypeConditionInput
  ) {
    createObjectType(input: $input, condition: $condition) {
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
export const updateObjectType = /* GraphQL */ `
  mutation UpdateObjectType(
    $input: UpdateObjectTypeInput!
    $condition: ModelObjectTypeConditionInput
  ) {
    updateObjectType(input: $input, condition: $condition) {
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
export const deleteObjectType = /* GraphQL */ `
  mutation DeleteObjectType(
    $input: DeleteObjectTypeInput!
    $condition: ModelObjectTypeConditionInput
  ) {
    deleteObjectType(input: $input, condition: $condition) {
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
export const createObjectDescription = /* GraphQL */ `
  mutation CreateObjectDescription(
    $input: CreateObjectDescriptionInput!
    $condition: ModelObjectDescriptionConditionInput
  ) {
    createObjectDescription(input: $input, condition: $condition) {
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
export const updateObjectDescription = /* GraphQL */ `
  mutation UpdateObjectDescription(
    $input: UpdateObjectDescriptionInput!
    $condition: ModelObjectDescriptionConditionInput
  ) {
    updateObjectDescription(input: $input, condition: $condition) {
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
export const deleteObjectDescription = /* GraphQL */ `
  mutation DeleteObjectDescription(
    $input: DeleteObjectDescriptionInput!
    $condition: ModelObjectDescriptionConditionInput
  ) {
    deleteObjectDescription(input: $input, condition: $condition) {
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
export const createThrowScenario = /* GraphQL */ `
  mutation CreateThrowScenario(
    $input: CreateThrowScenarioInput!
    $condition: ModelThrowScenarioConditionInput
  ) {
    createThrowScenario(input: $input, condition: $condition) {
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
export const updateThrowScenario = /* GraphQL */ `
  mutation UpdateThrowScenario(
    $input: UpdateThrowScenarioInput!
    $condition: ModelThrowScenarioConditionInput
  ) {
    updateThrowScenario(input: $input, condition: $condition) {
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
export const deleteThrowScenario = /* GraphQL */ `
  mutation DeleteThrowScenario(
    $input: DeleteThrowScenarioInput!
    $condition: ModelThrowScenarioConditionInput
  ) {
    deleteThrowScenario(input: $input, condition: $condition) {
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
export const createValueRangeValue = /* GraphQL */ `
  mutation CreateValueRangeValue(
    $input: CreateValueRangeValueInput!
    $condition: ModelValueRangeValueConditionInput
  ) {
    createValueRangeValue(input: $input, condition: $condition) {
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
export const updateValueRangeValue = /* GraphQL */ `
  mutation UpdateValueRangeValue(
    $input: UpdateValueRangeValueInput!
    $condition: ModelValueRangeValueConditionInput
  ) {
    updateValueRangeValue(input: $input, condition: $condition) {
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
export const deleteValueRangeValue = /* GraphQL */ `
  mutation DeleteValueRangeValue(
    $input: DeleteValueRangeValueInput!
    $condition: ModelValueRangeValueConditionInput
  ) {
    deleteValueRangeValue(input: $input, condition: $condition) {
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
export const createSpellClass = /* GraphQL */ `
  mutation CreateSpellClass(
    $input: CreateSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    createSpellClass(input: $input, condition: $condition) {
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
export const updateSpellClass = /* GraphQL */ `
  mutation UpdateSpellClass(
    $input: UpdateSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    updateSpellClass(input: $input, condition: $condition) {
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
export const deleteSpellClass = /* GraphQL */ `
  mutation DeleteSpellClass(
    $input: DeleteSpellClassInput!
    $condition: ModelSpellClassConditionInput
  ) {
    deleteSpellClass(input: $input, condition: $condition) {
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
export const createWeapon = /* GraphQL */ `
  mutation CreateWeapon(
    $input: CreateWeaponInput!
    $condition: ModelWeaponConditionInput
  ) {
    createWeapon(input: $input, condition: $condition) {
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
export const updateWeapon = /* GraphQL */ `
  mutation UpdateWeapon(
    $input: UpdateWeaponInput!
    $condition: ModelWeaponConditionInput
  ) {
    updateWeapon(input: $input, condition: $condition) {
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
export const deleteWeapon = /* GraphQL */ `
  mutation DeleteWeapon(
    $input: DeleteWeaponInput!
    $condition: ModelWeaponConditionInput
  ) {
    deleteWeapon(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createMagicalItem = /* GraphQL */ `
  mutation CreateMagicalItem(
    $input: CreateMagicalItemInput!
    $condition: ModelMagicalItemConditionInput
  ) {
    createMagicalItem(input: $input, condition: $condition) {
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
export const updateMagicalItem = /* GraphQL */ `
  mutation UpdateMagicalItem(
    $input: UpdateMagicalItemInput!
    $condition: ModelMagicalItemConditionInput
  ) {
    updateMagicalItem(input: $input, condition: $condition) {
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
export const deleteMagicalItem = /* GraphQL */ `
  mutation DeleteMagicalItem(
    $input: DeleteMagicalItemInput!
    $condition: ModelMagicalItemConditionInput
  ) {
    deleteMagicalItem(input: $input, condition: $condition) {
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
export const createThrow = /* GraphQL */ `
  mutation CreateThrow(
    $input: CreateThrowInput!
    $condition: ModelThrowConditionInput
  ) {
    createThrow(input: $input, condition: $condition) {
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
export const updateThrow = /* GraphQL */ `
  mutation UpdateThrow(
    $input: UpdateThrowInput!
    $condition: ModelThrowConditionInput
  ) {
    updateThrow(input: $input, condition: $condition) {
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
export const deleteThrow = /* GraphQL */ `
  mutation DeleteThrow(
    $input: DeleteThrowInput!
    $condition: ModelThrowConditionInput
  ) {
    deleteThrow(input: $input, condition: $condition) {
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
export const createPlayerCharacter = /* GraphQL */ `
  mutation CreatePlayerCharacter(
    $input: CreatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    createPlayerCharacter(input: $input, condition: $condition) {
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
export const updatePlayerCharacter = /* GraphQL */ `
  mutation UpdatePlayerCharacter(
    $input: UpdatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    updatePlayerCharacter(input: $input, condition: $condition) {
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
export const deletePlayerCharacter = /* GraphQL */ `
  mutation DeletePlayerCharacter(
    $input: DeletePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    deletePlayerCharacter(input: $input, condition: $condition) {
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

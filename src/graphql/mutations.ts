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
        descriptions {
          locale
          title
          description
        }
        minValue
        maxValue
        createdAt
        updatedAt
      }
      iterationCount
      modifier
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
        descriptions {
          locale
          title
          description
        }
        minValue
        maxValue
        createdAt
        updatedAt
      }
      iterationCount
      modifier
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
        descriptions {
          locale
          title
          description
        }
        minValue
        maxValue
        createdAt
        updatedAt
      }
      iterationCount
      modifier
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
        descriptions {
          locale
          title
          description
        }
        createdAt
        updatedAt
      }
      descriptions {
        locale
        title
        description
      }
      magicUser
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
        descriptions {
          locale
          title
          description
        }
        createdAt
        updatedAt
      }
      descriptions {
        locale
        title
        description
      }
      magicUser
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
        descriptions {
          locale
          title
          description
        }
        createdAt
        updatedAt
      }
      descriptions {
        locale
        title
        description
      }
      magicUser
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
        die {
          id
          descriptions {
            locale
            title
            description
          }
          minValue
          maxValue
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
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
        die {
          id
          descriptions {
            locale
            title
            description
          }
          minValue
          maxValue
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
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
        die {
          id
          descriptions {
            locale
            title
            description
          }
          minValue
          maxValue
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
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
      weaponTypeId
      weaponType {
        id
        type
        descriptions {
          locale
          title
          description
        }
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
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
      weaponTypeId
      weaponType {
        id
        type
        descriptions {
          locale
          title
          description
        }
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
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
      weaponTypeId
      weaponType {
        id
        type
        descriptions {
          locale
          title
          description
        }
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
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
        descriptions {
          locale
          title
          description
        }
        createdAt
        updatedAt
      }
      basicCost
      masterCost
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
        descriptions {
          locale
          title
          description
        }
        createdAt
        updatedAt
      }
      basicCost
      masterCost
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
        descriptions {
          locale
          title
          description
        }
        createdAt
        updatedAt
      }
      basicCost
      masterCost
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
        mainClass {
          id
          type
          descriptions {
            locale
            title
            description
          }
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
        createdAt
        updatedAt
      }
      manaCost
      duration
      price
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
        mainClass {
          id
          type
          descriptions {
            locale
            title
            description
          }
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
        createdAt
        updatedAt
      }
      manaCost
      duration
      price
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
        mainClass {
          id
          type
          descriptions {
            locale
            title
            description
          }
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
        createdAt
        updatedAt
      }
      manaCost
      duration
      price
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
        descriptions {
          locale
          title
          description
        }
        minValue
        maxValue
        createdAt
        updatedAt
      }
      iterationCount
      modifier
      throwResults
      throwSum
      total
      owner
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
        descriptions {
          locale
          title
          description
        }
        minValue
        maxValue
        createdAt
        updatedAt
      }
      iterationCount
      modifier
      throwResults
      throwSum
      total
      owner
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
        descriptions {
          locale
          title
          description
        }
        minValue
        maxValue
        createdAt
        updatedAt
      }
      iterationCount
      modifier
      throwResults
      throwSum
      total
      owner
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
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
            createdAt
            updatedAt
          }
          attacksPerTurn
          ranged
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            basicCost
            masterCost
            createdAt
            updatedAt
          }
          mastery
          percentageValue
          skillPointsUsed
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            manaCost
            duration
            price
            createdAt
            updatedAt
          }
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
            createdAt
            updatedAt
          }
          attacksPerTurn
          ranged
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            basicCost
            masterCost
            createdAt
            updatedAt
          }
          mastery
          percentageValue
          skillPointsUsed
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            manaCost
            duration
            price
            createdAt
            updatedAt
          }
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
            createdAt
            updatedAt
          }
          attacksPerTurn
          ranged
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            basicCost
            masterCost
            createdAt
            updatedAt
          }
          mastery
          percentageValue
          skillPointsUsed
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            manaCost
            duration
            price
            createdAt
            updatedAt
          }
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createNonPlayerCharacter = /* GraphQL */ `
  mutation CreateNonPlayerCharacter(
    $input: CreateNonPlayerCharacterInput!
    $condition: ModelNonPlayerCharacterConditionInput
  ) {
    createNonPlayerCharacter(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
            createdAt
            updatedAt
          }
          attacksPerTurn
          ranged
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            basicCost
            masterCost
            createdAt
            updatedAt
          }
          mastery
          percentageValue
          skillPointsUsed
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            manaCost
            duration
            price
            createdAt
            updatedAt
          }
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNonPlayerCharacter = /* GraphQL */ `
  mutation UpdateNonPlayerCharacter(
    $input: UpdateNonPlayerCharacterInput!
    $condition: ModelNonPlayerCharacterConditionInput
  ) {
    updateNonPlayerCharacter(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
            createdAt
            updatedAt
          }
          attacksPerTurn
          ranged
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            basicCost
            masterCost
            createdAt
            updatedAt
          }
          mastery
          percentageValue
          skillPointsUsed
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            manaCost
            duration
            price
            createdAt
            updatedAt
          }
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNonPlayerCharacter = /* GraphQL */ `
  mutation DeleteNonPlayerCharacter(
    $input: DeleteNonPlayerCharacterInput!
    $condition: ModelNonPlayerCharacterConditionInput
  ) {
    deleteNonPlayerCharacter(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        descriptions {
          locale
          title
          description
        }
        magicUser
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
            createdAt
            updatedAt
          }
          attacksPerTurn
          ranged
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            basicCost
            masterCost
            createdAt
            updatedAt
          }
          mastery
          percentageValue
          skillPointsUsed
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            iterationCount
            modifier
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
              createdAt
              updatedAt
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          attacksPerTurn
          maxDistance
          maxLoad
          badHabit
          specialAbilities
          createdAt
          updatedAt
          owner
        }
        nextToken
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
              createdAt
              updatedAt
            }
            manaCost
            duration
            price
            createdAt
            updatedAt
          }
          location
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWeaponAssignment = /* GraphQL */ `
  mutation CreateWeaponAssignment(
    $input: CreateWeaponAssignmentInput!
    $condition: ModelWeaponAssignmentConditionInput
  ) {
    createWeaponAssignment(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
          }
          iterationCount
          modifier
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateWeaponAssignment = /* GraphQL */ `
  mutation UpdateWeaponAssignment(
    $input: UpdateWeaponAssignmentInput!
    $condition: ModelWeaponAssignmentConditionInput
  ) {
    updateWeaponAssignment(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
          }
          iterationCount
          modifier
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteWeaponAssignment = /* GraphQL */ `
  mutation DeleteWeaponAssignment(
    $input: DeleteWeaponAssignmentInput!
    $condition: ModelWeaponAssignmentConditionInput
  ) {
    deleteWeaponAssignment(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
          }
          iterationCount
          modifier
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
        createdAt
        updatedAt
      }
      attacksPerTurn
      ranged
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSkillAssignment = /* GraphQL */ `
  mutation CreateSkillAssignment(
    $input: CreateSkillAssignmentInput!
    $condition: ModelSkillAssignmentConditionInput
  ) {
    createSkillAssignment(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        basicCost
        masterCost
        createdAt
        updatedAt
      }
      mastery
      percentageValue
      skillPointsUsed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSkillAssignment = /* GraphQL */ `
  mutation UpdateSkillAssignment(
    $input: UpdateSkillAssignmentInput!
    $condition: ModelSkillAssignmentConditionInput
  ) {
    updateSkillAssignment(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        basicCost
        masterCost
        createdAt
        updatedAt
      }
      mastery
      percentageValue
      skillPointsUsed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSkillAssignment = /* GraphQL */ `
  mutation DeleteSkillAssignment(
    $input: DeleteSkillAssignmentInput!
    $condition: ModelSkillAssignmentConditionInput
  ) {
    deleteSkillAssignment(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        basicCost
        masterCost
        createdAt
        updatedAt
      }
      mastery
      percentageValue
      skillPointsUsed
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCharacterCompanion = /* GraphQL */ `
  mutation CreateCharacterCompanion(
    $input: CreateCharacterCompanionInput!
    $condition: ModelCharacterCompanionConditionInput
  ) {
    createCharacterCompanion(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
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
            createdAt
            updatedAt
          }
          iterationCount
          modifier
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
        createdAt
        updatedAt
      }
      attacksPerTurn
      maxDistance
      maxLoad
      badHabit
      specialAbilities
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCharacterCompanion = /* GraphQL */ `
  mutation UpdateCharacterCompanion(
    $input: UpdateCharacterCompanionInput!
    $condition: ModelCharacterCompanionConditionInput
  ) {
    updateCharacterCompanion(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
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
            createdAt
            updatedAt
          }
          iterationCount
          modifier
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
        createdAt
        updatedAt
      }
      attacksPerTurn
      maxDistance
      maxLoad
      badHabit
      specialAbilities
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCharacterCompanion = /* GraphQL */ `
  mutation DeleteCharacterCompanion(
    $input: DeleteCharacterCompanionInput!
    $condition: ModelCharacterCompanionConditionInput
  ) {
    deleteCharacterCompanion(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
        iterationCount
        modifier
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
            createdAt
            updatedAt
          }
          iterationCount
          modifier
          createdAt
          updatedAt
        }
        attacksPerTurn
        ranged
        createdAt
        updatedAt
      }
      attacksPerTurn
      maxDistance
      maxLoad
      badHabit
      specialAbilities
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMagicalItemAssignment = /* GraphQL */ `
  mutation CreateMagicalItemAssignment(
    $input: CreateMagicalItemAssignmentInput!
    $condition: ModelMagicalItemAssignmentConditionInput
  ) {
    createMagicalItemAssignment(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
          }
          descriptions {
            locale
            title
            description
          }
          magicUser
          createdAt
          updatedAt
        }
        manaCost
        duration
        price
        createdAt
        updatedAt
      }
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMagicalItemAssignment = /* GraphQL */ `
  mutation UpdateMagicalItemAssignment(
    $input: UpdateMagicalItemAssignmentInput!
    $condition: ModelMagicalItemAssignmentConditionInput
  ) {
    updateMagicalItemAssignment(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
          }
          descriptions {
            locale
            title
            description
          }
          magicUser
          createdAt
          updatedAt
        }
        manaCost
        duration
        price
        createdAt
        updatedAt
      }
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMagicalItemAssignment = /* GraphQL */ `
  mutation DeleteMagicalItemAssignment(
    $input: DeleteMagicalItemAssignmentInput!
    $condition: ModelMagicalItemAssignmentConditionInput
  ) {
    deleteMagicalItemAssignment(input: $input, condition: $condition) {
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
            createdAt
            updatedAt
          }
          descriptions {
            locale
            title
            description
          }
          magicUser
          createdAt
          updatedAt
        }
        manaCost
        duration
        price
        createdAt
        updatedAt
      }
      location
      createdAt
      updatedAt
      owner
    }
  }
`;

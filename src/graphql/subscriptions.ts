/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onUpdateThrowScenario = /* GraphQL */ `
  subscription OnUpdateThrowScenario {
    onUpdateThrowScenario {
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
export const onDeleteThrowScenario = /* GraphQL */ `
  subscription OnDeleteThrowScenario {
    onDeleteThrowScenario {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateWeapon = /* GraphQL */ `
  subscription OnCreateWeapon {
    onCreateWeapon {
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
export const onUpdateWeapon = /* GraphQL */ `
  subscription OnUpdateWeapon {
    onUpdateWeapon {
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
export const onDeleteWeapon = /* GraphQL */ `
  subscription OnDeleteWeapon {
    onDeleteWeapon {
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
export const onCreateThrow = /* GraphQL */ `
  subscription OnCreateThrow {
    onCreateThrow {
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
export const onUpdateThrow = /* GraphQL */ `
  subscription OnUpdateThrow {
    onUpdateThrow {
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
export const onDeleteThrow = /* GraphQL */ `
  subscription OnDeleteThrow {
    onDeleteThrow {
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
export const onCreateNonPlayerCharacter = /* GraphQL */ `
  subscription OnCreateNonPlayerCharacter($owner: String!) {
    onCreateNonPlayerCharacter(owner: $owner) {
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
export const onUpdateNonPlayerCharacter = /* GraphQL */ `
  subscription OnUpdateNonPlayerCharacter($owner: String!) {
    onUpdateNonPlayerCharacter(owner: $owner) {
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
export const onDeleteNonPlayerCharacter = /* GraphQL */ `
  subscription OnDeleteNonPlayerCharacter($owner: String!) {
    onDeleteNonPlayerCharacter(owner: $owner) {
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
export const onCreateWeaponAssignment = /* GraphQL */ `
  subscription OnCreateWeaponAssignment($owner: String!) {
    onCreateWeaponAssignment(owner: $owner) {
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
export const onUpdateWeaponAssignment = /* GraphQL */ `
  subscription OnUpdateWeaponAssignment($owner: String!) {
    onUpdateWeaponAssignment(owner: $owner) {
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
export const onDeleteWeaponAssignment = /* GraphQL */ `
  subscription OnDeleteWeaponAssignment($owner: String!) {
    onDeleteWeaponAssignment(owner: $owner) {
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
export const onCreateSkillAssignment = /* GraphQL */ `
  subscription OnCreateSkillAssignment($owner: String!) {
    onCreateSkillAssignment(owner: $owner) {
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
export const onUpdateSkillAssignment = /* GraphQL */ `
  subscription OnUpdateSkillAssignment($owner: String!) {
    onUpdateSkillAssignment(owner: $owner) {
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
export const onDeleteSkillAssignment = /* GraphQL */ `
  subscription OnDeleteSkillAssignment($owner: String!) {
    onDeleteSkillAssignment(owner: $owner) {
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
export const onCreateCharacterCompanion = /* GraphQL */ `
  subscription OnCreateCharacterCompanion($owner: String!) {
    onCreateCharacterCompanion(owner: $owner) {
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
export const onUpdateCharacterCompanion = /* GraphQL */ `
  subscription OnUpdateCharacterCompanion($owner: String!) {
    onUpdateCharacterCompanion(owner: $owner) {
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
export const onDeleteCharacterCompanion = /* GraphQL */ `
  subscription OnDeleteCharacterCompanion($owner: String!) {
    onDeleteCharacterCompanion(owner: $owner) {
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
export const onCreateMagicalItemAssignment = /* GraphQL */ `
  subscription OnCreateMagicalItemAssignment($owner: String!) {
    onCreateMagicalItemAssignment(owner: $owner) {
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
export const onUpdateMagicalItemAssignment = /* GraphQL */ `
  subscription OnUpdateMagicalItemAssignment($owner: String!) {
    onUpdateMagicalItemAssignment(owner: $owner) {
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
export const onDeleteMagicalItemAssignment = /* GraphQL */ `
  subscription OnDeleteMagicalItemAssignment($owner: String!) {
    onDeleteMagicalItemAssignment(owner: $owner) {
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

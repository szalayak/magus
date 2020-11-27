/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace {
    onCreateRace {
      id
      descriptions {
        locale
        title
        description
      }
      playable
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
      playable
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
      playable
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
      movementPreventionValue
      weight
      price
      damage {
        dice
        iterationCount
        modifier
      }
      attacksPerTurn
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
      movementPreventionValue
      weight
      price
      damage {
        dice
        iterationCount
        modifier
      }
      attacksPerTurn
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
      movementPreventionValue
      weight
      price
      damage {
        dice
        iterationCount
        modifier
      }
      attacksPerTurn
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
        dice
        iterationCount
        modifier
      }
      attacksPerTurn
      ranged
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
        dice
        iterationCount
        modifier
      }
      attacksPerTurn
      ranged
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
        dice
        iterationCount
        modifier
      }
      attacksPerTurn
      ranged
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
export const onCreateThrow = /* GraphQL */ `
  subscription OnCreateThrow {
    onCreateThrow {
      id
      throwScenario {
        dice
        iterationCount
        modifier
      }
      throwResults
      throwSum
      total
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateThrow = /* GraphQL */ `
  subscription OnUpdateThrow {
    onUpdateThrow {
      id
      throwScenario {
        dice
        iterationCount
        modifier
      }
      throwResults
      throwSum
      total
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteThrow = /* GraphQL */ `
  subscription OnDeleteThrow {
    onDeleteThrow {
      id
      throwScenario {
        dice
        iterationCount
        modifier
      }
      throwResults
      throwSum
      total
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter($owner: String, $dungeonMaster: String) {
    onCreateCharacter(owner: $owner, dungeonMaster: $dungeonMaster) {
      id
      name
      playerCharacter
      startDate
      dungeonMaster
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
        identifier
        family
        attire
        personalityTraits
        specialAbilities
        likes
        dislikes
        fears
        companions
        enemies
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
      health {
        vitality {
          current
          max
        }
        baseVitality
        vitalityModifier
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointModifier
        hitPointsPerLevel {
          dice
          iterationCount
          modifier
        }
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
        playable
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
      psiLevel
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
        notes
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
      combatValueModifiersPerLevel
      mandatoryCombatValueModifierDistribution
      wallet {
        money
        mithrill
        gemstones
        misc
      }
      skillPoints {
        base
        current
        perLevel
        intelligence
        dexterity
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
      armour {
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
      armourMastery
      shield {
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
        movementPreventionValue
        weight
        price
        damage {
          dice
          iterationCount
          modifier
        }
        attacksPerTurn
        createdAt
        updatedAt
      }
      shieldMastery
      weapons {
        items {
          id
          characterId
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
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
              dice
              iterationCount
              modifier
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          mastery
          inHand
          breakWeapon
          disarm
          arrowCount
          specialProjectileCount
          aim
          horseback
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          name
          type
          health {
            vitality {
              current
              max
            }
            baseVitality
            vitalityModifier
            hitPoints {
              current
              max
            }
            baseHitPoints
            hitPointModifier
            hitPointsPerLevel {
              dice
              iterationCount
              modifier
            }
          }
          combatValues {
            initiation
            offence
            defence
            aiming
          }
          damage {
            dice
            iterationCount
            modifier
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
              dice
              iterationCount
              modifier
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
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          notes
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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter($owner: String, $dungeonMaster: String) {
    onUpdateCharacter(owner: $owner, dungeonMaster: $dungeonMaster) {
      id
      name
      playerCharacter
      startDate
      dungeonMaster
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
        identifier
        family
        attire
        personalityTraits
        specialAbilities
        likes
        dislikes
        fears
        companions
        enemies
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
      health {
        vitality {
          current
          max
        }
        baseVitality
        vitalityModifier
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointModifier
        hitPointsPerLevel {
          dice
          iterationCount
          modifier
        }
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
        playable
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
      psiLevel
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
        notes
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
      combatValueModifiersPerLevel
      mandatoryCombatValueModifierDistribution
      wallet {
        money
        mithrill
        gemstones
        misc
      }
      skillPoints {
        base
        current
        perLevel
        intelligence
        dexterity
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
      armour {
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
      armourMastery
      shield {
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
        movementPreventionValue
        weight
        price
        damage {
          dice
          iterationCount
          modifier
        }
        attacksPerTurn
        createdAt
        updatedAt
      }
      shieldMastery
      weapons {
        items {
          id
          characterId
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
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
              dice
              iterationCount
              modifier
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          mastery
          inHand
          breakWeapon
          disarm
          arrowCount
          specialProjectileCount
          aim
          horseback
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          name
          type
          health {
            vitality {
              current
              max
            }
            baseVitality
            vitalityModifier
            hitPoints {
              current
              max
            }
            baseHitPoints
            hitPointModifier
            hitPointsPerLevel {
              dice
              iterationCount
              modifier
            }
          }
          combatValues {
            initiation
            offence
            defence
            aiming
          }
          damage {
            dice
            iterationCount
            modifier
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
              dice
              iterationCount
              modifier
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
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          notes
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter($owner: String, $dungeonMaster: String) {
    onDeleteCharacter(owner: $owner, dungeonMaster: $dungeonMaster) {
      id
      name
      playerCharacter
      startDate
      dungeonMaster
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
        identifier
        family
        attire
        personalityTraits
        specialAbilities
        likes
        dislikes
        fears
        companions
        enemies
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
      health {
        vitality {
          current
          max
        }
        baseVitality
        vitalityModifier
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointModifier
        hitPointsPerLevel {
          dice
          iterationCount
          modifier
        }
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
        playable
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
      psiLevel
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
        notes
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
      combatValueModifiersPerLevel
      mandatoryCombatValueModifierDistribution
      wallet {
        money
        mithrill
        gemstones
        misc
      }
      skillPoints {
        base
        current
        perLevel
        intelligence
        dexterity
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
      armour {
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
      armourMastery
      shield {
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
        movementPreventionValue
        weight
        price
        damage {
          dice
          iterationCount
          modifier
        }
        attacksPerTurn
        createdAt
        updatedAt
      }
      shieldMastery
      weapons {
        items {
          id
          characterId
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
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
              dice
              iterationCount
              modifier
            }
            attacksPerTurn
            ranged
            createdAt
            updatedAt
          }
          mastery
          inHand
          breakWeapon
          disarm
          arrowCount
          specialProjectileCount
          aim
          horseback
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
          name
          type
          health {
            vitality {
              current
              max
            }
            baseVitality
            vitalityModifier
            hitPoints {
              current
              max
            }
            baseHitPoints
            hitPointModifier
            hitPointsPerLevel {
              dice
              iterationCount
              modifier
            }
          }
          combatValues {
            initiation
            offence
            defence
            aiming
          }
          damage {
            dice
            iterationCount
            modifier
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
              dice
              iterationCount
              modifier
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
          notes
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
          character {
            id
            name
            playerCharacter
            startDate
            dungeonMaster
            owner
            basicInfo {
              sex
              height
              weight
              hair
              eyes
              age
              visibleAge
              identifier
              family
              attire
              personalityTraits
              specialAbilities
              likes
              dislikes
              fears
              companions
              enemies
              fame
              religion
              country
              school
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
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            class {
              id
              mainClassId
              magicUser
              createdAt
              updatedAt
            }
            subclass
            specialisation
            race {
              id
              playable
              createdAt
              updatedAt
            }
            personality {
              id
              type
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
              basePsiPoints
              psiPointsPerLevel
              createdAt
              updatedAt
            }
            psiLevel
            psiPoints {
              current
              max
            }
            magicUser
            magicalAbility {
              notes
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
            combatValueModifiersPerLevel
            mandatoryCombatValueModifierDistribution
            wallet {
              money
              mithrill
              gemstones
              misc
            }
            skillPoints {
              base
              current
              perLevel
              intelligence
              dexterity
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
            armour {
              id
              weight
              movementPreventionValue
              damageReductionValue
              price
              createdAt
              updatedAt
            }
            armourMastery
            shield {
              id
              movementPreventionValue
              weight
              price
              attacksPerTurn
              createdAt
              updatedAt
            }
            shieldMastery
            weapons {
              nextToken
            }
            skills {
              nextToken
            }
            companions {
              nextToken
            }
            magicalItems {
              nextToken
            }
            createdAt
            updatedAt
          }
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
          notes
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
export const onCreateWeaponAssignment = /* GraphQL */ `
  subscription OnCreateWeaponAssignment($owner: String!) {
    onCreateWeaponAssignment(owner: $owner) {
      id
      characterId
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
          dice
          iterationCount
          modifier
        }
        attacksPerTurn
        ranged
        createdAt
        updatedAt
      }
      mastery
      inHand
      breakWeapon
      disarm
      arrowCount
      specialProjectileCount
      aim
      horseback
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
          dice
          iterationCount
          modifier
        }
        attacksPerTurn
        ranged
        createdAt
        updatedAt
      }
      mastery
      inHand
      breakWeapon
      disarm
      arrowCount
      specialProjectileCount
      aim
      horseback
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
          dice
          iterationCount
          modifier
        }
        attacksPerTurn
        ranged
        createdAt
        updatedAt
      }
      mastery
      inHand
      breakWeapon
      disarm
      arrowCount
      specialProjectileCount
      aim
      horseback
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      type
      health {
        vitality {
          current
          max
        }
        baseVitality
        vitalityModifier
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointModifier
        hitPointsPerLevel {
          dice
          iterationCount
          modifier
        }
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        dice
        iterationCount
        modifier
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
          dice
          iterationCount
          modifier
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      type
      health {
        vitality {
          current
          max
        }
        baseVitality
        vitalityModifier
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointModifier
        hitPointsPerLevel {
          dice
          iterationCount
          modifier
        }
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        dice
        iterationCount
        modifier
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
          dice
          iterationCount
          modifier
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      type
      health {
        vitality {
          current
          max
        }
        baseVitality
        vitalityModifier
        hitPoints {
          current
          max
        }
        baseHitPoints
        hitPointModifier
        hitPointsPerLevel {
          dice
          iterationCount
          modifier
        }
      }
      combatValues {
        initiation
        offence
        defence
        aiming
      }
      damage {
        dice
        iterationCount
        modifier
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
          dice
          iterationCount
          modifier
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
      notes
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
      character {
        id
        name
        playerCharacter
        startDate
        dungeonMaster
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
          identifier
          family
          attire
          personalityTraits
          specialAbilities
          likes
          dislikes
          fears
          companions
          enemies
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
        health {
          vitality {
            current
            max
          }
          baseVitality
          vitalityModifier
          hitPoints {
            current
            max
          }
          baseHitPoints
          hitPointModifier
          hitPointsPerLevel {
            dice
            iterationCount
            modifier
          }
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
          playable
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
        psiLevel
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
          notes
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
        combatValueModifiersPerLevel
        mandatoryCombatValueModifierDistribution
        wallet {
          money
          mithrill
          gemstones
          misc
        }
        skillPoints {
          base
          current
          perLevel
          intelligence
          dexterity
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
        armour {
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
        armourMastery
        shield {
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
          movementPreventionValue
          weight
          price
          damage {
            dice
            iterationCount
            modifier
          }
          attacksPerTurn
          createdAt
          updatedAt
        }
        shieldMastery
        weapons {
          items {
            id
            characterId
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
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
              createdAt
              updatedAt
            }
            mastery
            inHand
            breakWeapon
            disarm
            arrowCount
            specialProjectileCount
            aim
            horseback
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            skill {
              id
              percentageSkill
              skillGroupId
              basicCost
              masterCost
              createdAt
              updatedAt
            }
            mastery
            percentageValue
            skillPointsUsed
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            name
            type
            health {
              baseVitality
              vitalityModifier
              baseHitPoints
              hitPointModifier
            }
            combatValues {
              initiation
              offence
              defence
              aiming
            }
            damage {
              dice
              iterationCount
              modifier
            }
            weapon {
              id
              weaponTypeId
              weight
              price
              attackRange
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
            notes
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
            character {
              id
              name
              playerCharacter
              startDate
              dungeonMaster
              owner
              subclass
              specialisation
              psiUser
              psiLevel
              magicUser
              combatValueModifiersPerLevel
              mandatoryCombatValueModifierDistribution
              notes
              armourMastery
              shieldMastery
              createdAt
              updatedAt
            }
            magicalItemId
            magicalItem {
              id
              manaCost
              duration
              price
              createdAt
              updatedAt
            }
            location
            notes
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
      }
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
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;

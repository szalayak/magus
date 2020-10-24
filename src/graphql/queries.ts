/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        createdAt
        updatedAt
      }
      nextToken
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
        dice
        iterationCount
        modifier
      }
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
          dice
          iterationCount
          modifier
        }
        createdAt
        updatedAt
      }
      nextToken
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
      nextToken
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
          createdAt
          updatedAt
        }
        basicCost
        masterCost
        createdAt
        updatedAt
      }
      nextToken
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
      nextToken
    }
  }
`;
export const getThrow = /* GraphQL */ `
  query GetThrow($id: ID!) {
    getThrow(id: $id) {
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
export const listThrows = /* GraphQL */ `
  query ListThrows(
    $filter: ModelThrowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThrows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
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
              dice
              iterationCount
              modifier
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
            dice
            iterationCount
            modifier
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
              weaponTypeId
              weight
              price
              attackRange
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
              dice
              iterationCount
              modifier
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
      nextToken
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
              dice
              iterationCount
              modifier
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
            dice
            iterationCount
            modifier
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
              weaponTypeId
              weight
              price
              attackRange
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
              dice
              iterationCount
              modifier
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
      nextToken
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
        dice
        iterationCount
        modifier
      }
      attacksPerTurn
      ranged
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
          dice
          iterationCount
          modifier
        }
        attacksPerTurn
        ranged
        createdAt
        updatedAt
        owner
      }
      nextToken
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
        createdAt
        updatedAt
        owner
      }
      nextToken
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
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
      nextToken
    }
  }
`;

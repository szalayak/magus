<template>
  <character-page-layout
    :character="character"
    :notification="notification"
    :messages="messages"
    @refresh="refresh"
    v-if="character"
    :loading="loading"
  >
    <v-row dense no-gutters>
      <v-col id="appearance" cols="12">
        <appearance :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="administrative-info" cols="12">
        <administrative-info
          :id="id"
          :character="character"
          :editable="editable"
        />
      </v-col>
      <v-col id="properties" cols="12">
        <properties :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="likes-and-dislikes" cols="12">
        <likes-and-dislikes
          :id="id"
          :editable="editable"
          :character="character"
        />
      </v-col>
      <v-col id="connections" cols="12">
        <connections :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="core-information" cols="12">
        <core-information
          :id="id"
          :editable="editable"
          :character="character"
        />
      </v-col>
      <v-col id="abilities" cols="12">
        <abilities :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="health" cols="12">
        <health :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="combat-values" cols="12">
        <combat-values :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="spell-resistance" cols="12">
        <spell-resistance
          :id="id"
          :editable="editable"
          :character="character"
        />
      </v-col>
      <v-col id="psi" v-if="character.psiUser">
        <psi :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="magical-ability" v-if="character.magicUser" cols="12">
        <magical-ability :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="armour" cols="12">
        <armour :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="shield" cols="12">
        <shield :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="weapon-assignments" cols="12">
        <weapon-assignments
          :id="id"
          :editable="editable"
          :character="character"
        />
      </v-col>
      <v-col id="ranged-weapon-assignments" cols="12">
        <ranged-weapon-assignments
          :id="id"
          :editable="editable"
          :character="character"
        />
      </v-col>
      <v-col id="skill-assignments" cols="12">
        <skill-assignments
          :id="id"
          :editable="editable"
          :character="character"
        />
      </v-col>
      <v-col id="skill-points" cols="12">
        <skill-points :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="magical-item-assignments" cols="12">
        <magical-item-assignments
          :id="id"
          :editable="editable"
          :character="character"
        />
      </v-col>
      <v-col id="languages" cols="12">
        <languages :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="wallet" cols="12">
        <wallet :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="inventory" cols="12">
        <inventory :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="poisons" cols="12">
        <poisons :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="animals" cols="12">
        <animals :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="servants" cols="12">
        <servants :id="id" :editable="editable" :character="character" />
      </v-col>
      <v-col id="notes" cols="12">
        <notes :id="id" :editable="editable" :character="character" />
      </v-col>
    </v-row>
  </character-page-layout>
  <skeleton-cards v-else :count="12" />
</template>
<script lang="ts">
import CharacterPage from "./CharacterPage";
import Component from "vue-class-component";
import AppearanceCard from "@/components/character/AppearanceCard.vue";
import PropertiesCard from "@/components/character/PropertiesCard.vue";
import LikesAndDislikesCard from "@/components/character/LikesAndDislikesCard.vue";
import ConnectionsCard from "@/components/character/ConnectionsCard.vue";
import AdministrativeInfoCard from "@/components/character/AdministrativeInfoCard.vue";
import CoreInformationCard from "@/components/character/CoreInformationCard.vue";
import AbilitiesCard from "@/components/character/AbilitiesCard.vue";
import HealthCard from "@/components/character/HealthCard.vue";
import PsiCard from "@/components/character/PsiCard.vue";
import MagicalAbilityCard from "@/components/character/MagicalAbilityCard.vue";
import SpellResistanceCard from "@/components/character/SpellResistanceCard.vue";
import CombatValuesCard from "@/components/character/CombatValuesCard.vue";
import ArmourCard from "@/components/character/ArmourCard.vue";
import ShieldCard from "@/components/character/ShieldCard.vue";
import WeaponAssignmentCard from "@/components/character/WeaponAssignmentCard.vue";
import RangedWeaponAssignmentCard from "@/components/character/RangedWeaponAssignmentCard.vue";
import SkillAssignmentCard from "@/components/character/SkillAssignmentCard.vue";
import SkillPointsCard from "@/components/character/SkillPointsCard.vue";
import LanguageCard from "@/components/character/LanguageCard.vue";
import WalletCard from "@/components/character/WalletCard.vue";
import NotesCard from "@/components/character/NotesCard.vue";
import InventoryCard from "@/components/character/InventoryCard.vue";
import PoisonCard from "@/components/character/PoisonCard.vue";
import MagicalItemAssignmentCard from "@/components/character/MagicalItemCard.vue";
import AnimalsCard from "@/components/character/AnimalsCard.vue";
import ServantsCard from "@/components/character/ServantsCard.vue";
import CharacterPageLayout from "@/components/CharacterPageLayout.vue";
import SkeletonCards from "@/components/SkeletonCards.vue";

@Component({
  name: "non-player-character",
  components: {
    appearance: AppearanceCard,
    properties: PropertiesCard,
    "likes-and-dislikes": LikesAndDislikesCard,
    connections: ConnectionsCard,
    "administrative-info": AdministrativeInfoCard,
    "core-information": CoreInformationCard,
    abilities: AbilitiesCard,
    health: HealthCard,
    psi: PsiCard,
    "magical-ability": MagicalAbilityCard,
    "spell-resistance": SpellResistanceCard,
    "combat-values": CombatValuesCard,
    armour: ArmourCard,
    shield: ShieldCard,
    "weapon-assignments": WeaponAssignmentCard,
    "ranged-weapon-assignments": RangedWeaponAssignmentCard,
    "skill-assignments": SkillAssignmentCard,
    "skill-points": SkillPointsCard,
    languages: LanguageCard,
    wallet: WalletCard,
    notes: NotesCard,
    inventory: InventoryCard,
    poisons: PoisonCard,
    "magical-item-assignments": MagicalItemAssignmentCard,
    animals: AnimalsCard,
    servants: ServantsCard,
    "character-page-layout": CharacterPageLayout,
    "skeleton-cards": SkeletonCards,
  },
})
export default class NonPlayerCharacter extends CharacterPage {}
</script>

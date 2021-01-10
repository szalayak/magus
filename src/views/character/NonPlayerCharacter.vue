<template>
  <vue-pull-refresh :on-refresh="refresh" :config="pullToRefreshConfig">
    <v-card flat>
      <v-toolbar v-if="$vuetify.breakpoint.mdAndUp" flat>
        <v-card-title class="pl-1">{{ character.name }}</v-card-title>
        <v-btn text icon @click="refresh"><v-icon>mdi-refresh</v-icon></v-btn>
        <v-spacer />
        <v-btn-toggle dense tile color="primary" group v-model.number="page">
          <v-btn><v-icon>mdi-eye</v-icon></v-btn>
          <v-btn>1</v-btn>
          <v-btn>2</v-btn>
          <v-btn>3</v-btn>
          <v-btn>4</v-btn>
        </v-btn-toggle>
      </v-toolbar>
      <v-card-text>
        <character-overview v-if="page === 0" :id="id" />
        <v-row>
          <v-col v-if="page === 1" cols="12">
            <appearance :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 1" cols="12" xs="12" sm="6" lg="4">
            <properties :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 1" cols="12" xs="12" sm="6" lg="4">
            <likes-and-dislikes :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 1" cols="12" xs="12" sm="6" lg="4">
            <connections :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 2" cols="12">
            <core-information :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 2" cols="12" xs="12" sm="6" lg="4" xl="2">
            <abilities :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 2" cols="12" xs="12" sm="6" lg="4" xl="2">
            <health :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 2" cols="12" xs="12" sm="6" lg="4" xl="2">
            <combat-values :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 2" cols="12" xs="12" sm="6" lg="4" xl="2">
            <spell-resistance :id="id" :editable="editable" />
          </v-col>
          <v-col
            v-if="page === 2 && character.psiUser"
            cols="12"
            xs="12"
            sm="6"
            lg="2"
          >
            <psi :id="id" :editable="editable" />
          </v-col>
          <v-col
            v-if="page === 2 && character.magicUser"
            cols="12"
            xs="12"
            sm="3"
            lg="2"
          >
            <magical-ability :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 2" cols="12" xs="12" sm="3" lg="2">
            <armour :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 2" cols="12" xs="12" sm="3" lg="2">
            <shield :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 3" cols="12">
            <weapon-assignments :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 3" cols="12">
            <ranged-weapon-assignments :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 3" cols="12">
            <skill-assignments :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12" xs="12" sm="6" md="4">
            <magical-item-assignments :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12" xs="12" sm="6" md="4">
            <wallet :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12" xs="12" sm="6" md="4">
            <inventory :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12">
            <animals :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12">
            <servants :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12" xs="12" sm="6">
            <languages :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12" xs="12" sm="6">
            <poisons :id="id" :editable="editable" />
          </v-col>
          <v-col v-if="page === 4" cols="12">
            <notes :id="id" :editable="editable" />
          </v-col>
        </v-row>
        <v-snackbar
          v-for="message in messages"
          v-model="notification"
          :key="message"
        >
          {{ message }}

          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="notification = false">
              {{ $t("close") }}
            </v-btn>
          </template>
        </v-snackbar>
      </v-card-text>
      <v-card-actions>
        <v-bottom-navigation
          v-if="$vuetify.breakpoint.smAndDown"
          app
          v-model="page"
          color="primary"
          fixed
        >
          <v-btn><span></span><v-icon>mdi-eye</v-icon></v-btn>
          <v-btn><span>1</span></v-btn>
          <v-btn><span>2</span></v-btn>
          <v-btn><span>3</span></v-btn>
          <v-btn><span>4</span></v-btn>
        </v-bottom-navigation>
      </v-card-actions>
    </v-card>
  </vue-pull-refresh>
</template>
<script lang="ts">
import Component from "vue-class-component";
import AppearanceCard from "@/components/character/AppearanceCard.vue";
import PropertiesCard from "@/components/character/PropertiesCard.vue";
import LikesAndDislikesCard from "@/components/character/LikesAndDislikesCard.vue";
import ConnectionsCard from "@/components/character/ConnectionsCard.vue";
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
import LanguageCard from "@/components/character/LanguageCard.vue";
import WalletCard from "@/components/character/WalletCard.vue";
import NotesCard from "@/components/character/NotesCard.vue";
import InventoryCard from "@/components/character/InventoryCard.vue";
import PoisonCard from "@/components/character/PoisonCard.vue";
import MagicalItemAssignmentCard from "@/components/character/MagicalItemCard.vue";
import AnimalsCard from "@/components/character/AnimalsCard.vue";
import ServantsCard from "@/components/character/ServantsCard.vue";
import CharacterPage from "./CharacterPage";
import CharacterOverview from "@/components/character/CharacterOverview.vue";
import VuePullRefresh from "vue-pull-refresh";

@Component({
  name: "non-player-character",
  components: {
    appearance: AppearanceCard,
    properties: PropertiesCard,
    "likes-and-dislikes": LikesAndDislikesCard,
    connections: ConnectionsCard,
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
    languages: LanguageCard,
    wallet: WalletCard,
    notes: NotesCard,
    inventory: InventoryCard,
    poisons: PoisonCard,
    "magical-item-assignments": MagicalItemAssignmentCard,
    animals: AnimalsCard,
    servants: ServantsCard,
    "character-overview": CharacterOverview,
    "vue-pull-refresh": VuePullRefresh,
  },
})
export default class NonPlayerCharacter extends CharacterPage {}
</script>

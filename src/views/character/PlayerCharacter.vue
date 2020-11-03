<template>
  <v-container fluid>
    <v-toolbar flat>
      <v-toolbar-title>{{ character.name }}</v-toolbar-title>
      <v-spacer />
      <!-- <v-text-field
        clearable
        prepend-inner-icon="mdi-magnify"
        label="search"
        single-line
        hide-details
        @input="search"
      /> -->
      <v-btn-toggle dense tile color="primary" group v-model="page">
        <v-btn>1</v-btn>
        <v-btn>2</v-btn>
        <v-btn>3</v-btn>
        <v-btn>4</v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <v-row>
      <v-col v-show="page === 0" cols="12" xs="12" lg="10">
        <appearance :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 0" cols="12" xs="12" sm="6" lg="2">
        <administrative-info :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 0" cols="12" xs="12" sm="6" lg="4">
        <properties :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 0" cols="12" xs="12" sm="6" lg="4">
        <likes-and-dislikes :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 0" cols="12" xs="12" sm="6" lg="4">
        <connections :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 1" cols="12">
        <core-information :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 1" cols="12" xs="12" sm="6" lg="4" xl="2">
        <abilities :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 1" cols="12" xs="12" sm="6" lg="4" xl="2">
        <health :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 1" cols="12" xs="12" sm="6" lg="4" xl="2">
        <combat-values :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 1" cols="12" xs="12" sm="6" lg="4" xl="2">
        <spell-resistance :id="id" :editable="editable" />
      </v-col>
      <v-col
        v-show="page === 1 && character.psiUser"
        cols="12"
        xs="12"
        sm="6"
        lg="2"
      >
        <psi :id="id" :editable="editable" />
      </v-col>
      <v-col
        v-show="page === 1 && character.magicUser"
        cols="12"
        xs="12"
        sm="3"
        lg="2"
      >
        <magical-ability :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 1" cols="12" xs="12" sm="3" lg="2">
        <armour :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 1" cols="12" xs="12" sm="3" lg="2">
        <shield :id="id" :editable="editable" />
      </v-col>
      <v-col v-show="page === 2" cols="12">
        <weapon-assignments :id="id" :editable="false" />
      </v-col>
      <v-col v-show="page === 2" cols="12">
        <v-card>
          <v-card-title>Ranged Weapons</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 2" cols="12">
        <v-card>
          <v-card-title>Skills</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Magical Items</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Languages</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Wallet</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Inventory</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Animals</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Companions</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Poisons</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Notes</v-card-title>
        </v-card>
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
  </v-container>
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Vue from "vue";
import Component from "vue-class-component";
import Appearance from "@/components/character/Appearance.vue";
import Properties from "@/components/character/Properties.vue";
import LikesAndDislikes from "@/components/character/LikesAndDislikes.vue";
import Connections from "@/components/character/Connections.vue";
import AdministrativeInfo from "@/components/character/AdministrativeInfo.vue";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CoreInformation from "@/components/character/CoreInformation.vue";
import AbilitiesCard from "@/components/character/Abilities.vue";
import HealthCard from "@/components/character/HealthCard.vue";
import PsiCard from "@/components/character/PsiCard.vue";
import MagicalAbilityCard from "@/components/character/MagicalAbilityCard.vue";
import SpellResistanceCard from "@/components/character/SpellResistanceCard.vue";
import CombatValuesCard from "@/components/character/CombatValuesCard.vue";
import ArmourCard from "@/components/character/ArmourCard.vue";
import ShieldCard from "@/components/character/ShieldCard.vue";
import WeaponAssignmentCard from "@/components/character/WeaponAssignmentCard.vue";

@Component({
  name: "player-character",
  components: {
    appearance: Appearance,
    properties: Properties,
    "likes-and-dislikes": LikesAndDislikes,
    connections: Connections,
    "administrative-info": AdministrativeInfo,
    "core-information": CoreInformation,
    abilities: AbilitiesCard,
    health: HealthCard,
    psi: PsiCard,
    "magical-ability": MagicalAbilityCard,
    "spell-resistance": SpellResistanceCard,
    "combat-values": CombatValuesCard,
    armour: ArmourCard,
    shield: ShieldCard,
    "weapon-assignments": WeaponAssignmentCard,
  },
})
export default class PlayerCharacter extends Vue {
  id = this.$route.params.id;
  messages: string[] = [];
  notification = false;

  get page() {
    return this.$route.params.page ? parseInt(this.$route.params.page) - 1 : 0;
  }

  set page(page) {
    this.$router.push({
      name: this.$route.name || undefined,
      params: { ...this.$route.params, page: (page + 1).toString() },
    });
  }

  get editable(): boolean {
    return (
      this.character.owner === this.$store.getters["currentUser"] ||
      this.$store.getters["isCurrentUserAdmin"]
    );
  }

  get character(): Character {
    return (
      this.$store.getters["character/listTransient"].find(
        (char: Character) => char.id === this.id
      ) || {}
    );
  }

  mounted() {
    this.$store.dispatch("character/loadItem", this.id);
  }

  created() {
    Promise.all([
      this.$store.dispatch("race/load"),
      this.$store.dispatch("class/load"),
      this.$store.dispatch("valueRange/load"),
      this.$store.dispatch("psiSchool/load"),
      this.$store.dispatch("shield/load"),
      this.$store.dispatch("armour/load"),
      this.$store.dispatch("weapon/load"),
    ]).catch((error: GraphQLResult<Character>) => {
      this.messages = error.errors?.map(err => err.message) || [];
      this.notification = true;
    });
  }
}
</script>

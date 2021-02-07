<template>
  <page-template>
    <template v-slot:app-bar>
      <app-bar>
        <template v-slot:actions>
          <slot name="actions">
            <v-btn icon text :to="`${characterToLink()}/details`"
              ><v-icon>mdi-account-details</v-icon></v-btn
            >
            <v-btn icon text @click="refresh"
              ><v-icon>mdi-refresh</v-icon></v-btn
            >
          </slot>
        </template>
      </app-bar>
    </template>
    <vue-pull-refresh :on-refresh="refresh" :config="pullToRefreshConfig">
      <v-card v-if="character" flat>
        <v-card-title>{{ character.name }}</v-card-title>
        <v-card-subtitle>{{ characterToString() }}</v-card-subtitle>
        <v-card-text class="pa-0">
          <!-- <header-quick-view :character="character" /> -->
          <abilities-quick-view :character="character" />
          <combat-values-quick-view :character="character" />
        </v-card-text>
      </v-card>
      <skeleton-cards v-else />
    </vue-pull-refresh>
  </page-template>
</template>
<script lang="ts">
import Component from "vue-class-component";
import VuePullRefresh from "vue-pull-refresh";
import PageTemplate from "@/components/PageTemplate.vue";
import CharacterPage from "./CharacterPage";
import AppBar from "@/components/AppBar.vue";
import { characterToLink } from "@/utils";
import HeaderQuickView from "@/components/character/quick-view/HeaderQuickView.vue";
import AbilitiesQuickView from "@/components/character/quick-view/AbilitiesQuickView.vue";
import CombatValuesQuickView from "@/components/character/quick-view/CombatValuesQuickView.vue";
import SkeletonCards from "@/components/SkeletonCards.vue";

@Component({
  name: "player-character",
  components: {
    "vue-pull-refresh": VuePullRefresh,
    PageTemplate,
    "app-bar": AppBar,
    SkeletonCards,
    HeaderQuickView,
    AbilitiesQuickView,
    CombatValuesQuickView,
  },
})
export default class CharacterOverview extends CharacterPage {
  characterToLink() {
    return this.character ? characterToLink(this.character) : "";
  }
}
</script>

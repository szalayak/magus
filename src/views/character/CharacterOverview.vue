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
    <template v-slot:navbar-items="{}">
      <v-list-group :value="true">
        <template v-slot:activator>
          <v-list-item-title>{{ character.name }}</v-list-item-title>
        </template>
        <v-list-item :to="characterToLink('abilities')">
          <v-list-item-icon>
            <v-icon>mdi-arm-flex</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("abilities") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="characterToLink('combat-values')">
          <v-list-item-icon>
            <v-icon>mdi-sword</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("combat-values") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="characterToLink('vitality')">
          <v-list-item-icon>
            <v-icon>mdi-stethoscope</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("vitality") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="characterToLink('psi-mana-points')">
          <v-list-item-icon>
            <v-icon>mdi-head-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("psi") }}/{{ $t("mana-points") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="characterToLink('spell-resistance')">
          <v-list-item-icon>
            <v-icon>mdi-shield-sun</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("spell-resistance") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="characterToLink('wallet')">
          <v-list-item-icon>
            <v-icon>mdi-language-ruby</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("wallet") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="characterToLink('percentage-skills')">
          <v-list-item-icon>
            <v-icon>mdi-certificate</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("percentage-skills") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="characterToLink('skills')">
          <v-list-item-icon>
            <v-icon>mdi-certificate</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("skills") }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="`${characterToLink()}/details`">
          <v-list-item-icon>
            <v-icon>mdi-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t("details") }}
          </v-list-item-title>
        </v-list-item>
      </v-list-group>
    </template>
    <vue-pull-refresh :on-refresh="refresh" :config="pullToRefreshConfig">
      <v-card v-if="character" flat>
        <v-card-title>{{ character.name }}</v-card-title>
        <v-card-subtitle>{{ characterToString() }}</v-card-subtitle>
        <v-card-text class="pa-0">
          <abilities-quick-view id="abilities" :character="character" />
          <combat-values-quick-view id="combat-values" :character="character" />
          <vitality-quick-view id="vitality" :character="character" />
          <psi-mana-points-quick-view
            id="psi-mana-points"
            :character="character"
          />
          <spell-resistance-quick-view
            id="spell-resistance"
            :character="character"
          />
          <wallet-quick-view id="wallet" :character="character" />
          <percentage-skills-quick-view
            id="percentage-skills"
            :character="character"
          />
          <skills-quick-view id="skills" :character="character" />
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
import VitalityQuickView from "@/components/character/quick-view/VitalityQuickView.vue";
import PsiManaPointsQuickView from "@/components/character/quick-view/PsiManaPointsQuickView.vue";
import SpellResistanceQuickView from "@/components/character/quick-view/SpellResistanceQuickView.vue";
import PercentageSkillsQuickView from "@/components/character/quick-view/PercentageSkillsQuickView.vue";
import SkillsQuickView from "@/components/character/quick-view/SkillsQuickView.vue";
import WalletQuickView from "@/components/character/quick-view/WalletQuickView.vue";
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
    VitalityQuickView,
    PsiManaPointsQuickView,
    SpellResistanceQuickView,
    PercentageSkillsQuickView,
    SkillsQuickView,
    WalletQuickView,
  },
})
export default class CharacterOverview extends CharacterPage {
  characterToLink(selector?: string) {
    return this.character ? characterToLink(this.character, selector) : "";
  }
}
</script>

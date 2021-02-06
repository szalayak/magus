<template>
  <v-card class="pa-0" flat tile>
    <v-toolbar flat class="character-info-card-toolbar "
      ><v-toolbar-title>{{ $t("overview") }}</v-toolbar-title></v-toolbar
    >
    <v-card-text class="pa-0">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6" xl="3">
          <character-combat-values-quick-view
            :character="character"
            @error="onError"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3" xl="2"
          ><character-vitality-quick-view
            :character="character"
            @error="onError"
        /></v-col>
        <v-col
          v-if="character.psiUser || character.magicUser"
          cols="12"
          xs="12"
          md="6"
          lg="3"
          xl="2"
          ><character-psi-mana-points-quick-view
            :character="character"
            @error="onError"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <character-abilities-quick-view
            :character="character"
            @error="onError"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3" xl="2">
          <character-spell-resistance-quick-view
            :character="character"
            @error="onError"
          />
        </v-col>
        <v-col v-if="hasPercentageSkills" cols="12" xs="12" md="6" lg="3" xl="2"
          ><character-percentage-skills-quick-view
            :character="character"
            @error="onError"
        /></v-col>
        <v-col v-if="hasSkills" cols="12" xs="12" sm="6" lg="3" xl="2"
          ><character-skills-quick-view :character="character" @error="onError"
        /></v-col>
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
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style>
.character-info-card-toolbar .v-toolbar__content {
  padding: 0px !important;
}
</style>

<script lang="ts">
import Component from "vue-class-component";
import CharacterAbilitiesQuickView from "./dm-quick-view/CharacterAbilitiesQuickView.vue";
import CharacterCombatValuesQuickView from "./dm-quick-view/CharacterCombatValuesQuickView.vue";
import CharacterInfo from "./CharacterInfo";
import CharacterPercentageSkillsQuickView from "./dm-quick-view/CharacterPercentageSkillsQuickView.vue";
import CharacterPsiManaPointsQuickView from "./dm-quick-view/CharacterPsiManaPointsQuickView.vue";
import CharacterSkillsQuickView from "./dm-quick-view/CharacterSkillsQuickView.vue";
import CharacterSpellResistanceQuickView from "./dm-quick-view/CharacterSpellResistanceQuickView.vue";
import CharacterVitalityQuickView from "./dm-quick-view/CharacterVitalityQuickView.vue";
@Component({
  name: "character-overview",
  components: {
    "character-abilities-quick-view": CharacterAbilitiesQuickView,
    "character-vitality-quick-view": CharacterVitalityQuickView,
    "character-combat-values-quick-view": CharacterCombatValuesQuickView,
    "character-spell-resistance-quick-view": CharacterSpellResistanceQuickView,
    "character-psi-mana-points-quick-view": CharacterPsiManaPointsQuickView,
    "character-percentage-skills-quick-view": CharacterPercentageSkillsQuickView,
    "character-skills-quick-view": CharacterSkillsQuickView,
  },
})
export default class CharacterOverview extends CharacterInfo {
  messages: string[] = [];
  notification = false;

  get hasPercentageSkills() {
    return !!this.character.skills?.find(s => s.skill?.percentageSkill);
  }

  get hasSkills() {
    return !!this.character.skills?.find(s => !s.skill?.percentageSkill);
  }

  onError(error: { messages: string[] }) {
    this.messages = error.messages;
    this.notification = true;
  }
}
</script>

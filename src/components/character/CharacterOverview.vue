<template>
  <v-container fluid>
    <v-row dense>
      <v-col id="abilities" cols="12" xs="12" md="6" lg="3" xl="2">
        <character-abilities-quick-view
          :character="character"
          @error="onError"
        />
      </v-col>
      <v-col id="vitality" cols="12" xs="12" md="6" lg="3" xl="2"
        ><character-vitality-quick-view :character="character" @error="onError"
      /></v-col>
      <v-col id="combat-values" cols="12" xs="12" md="6" lg="3" xl="3">
        <character-combat-values-quick-view
          :character="character"
          @error="onError"
        />
      </v-col>
      <v-col id="spell-resistance" cols="12" xs="12" md="6" lg="3" xl="2">
        <character-spell-resistance-quick-view
          :character="character"
          @error="onError"
        />
      </v-col>
      <v-col
        id="psi-mana-points"
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
      <v-col id="percentage-skills" cols="12" xs="12" md="6" lg="3" xl="2"
        ><character-percentage-skills-quick-view
          :character="character"
          @error="onError"
      /></v-col>
      <v-col id="skills" cols="12" xs="12" md="6" lg="3" xl="2"
        ><character-skills-quick-view :character="character" @error="onError"
      /></v-col>
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
import Component from "vue-class-component";
import CharacterAbilitiesQuickView from "./CharacterAbilitiesQuickView.vue";
import CharacterCombatValuesQuickView from "./CharacterCombatValuesQuickView.vue";
import CharacterInfo from "./CharacterInfo";
import CharacterPercentageSkillsQuickView from "./CharacterPercentageSkillsQuickView.vue";
import CharacterPsiManaPointsQuickView from "./CharacterPsiManaPointsQuickView.vue";
import CharacterSkillsQuickView from "./CharacterSkillsQuickView.vue";
import CharacterSpellResistanceQuickView from "./CharacterSpellResistanceQuickView.vue";
import CharacterVitalityQuickView from "./CharacterVitalityQuickView.vue";
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

  onError(error: { messages: string[] }) {
    this.messages = error.messages;
    this.notification = true;
  }
}
</script>

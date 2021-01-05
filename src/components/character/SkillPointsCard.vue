<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('skill-points')"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="skillPoints.base"
            type="number"
            :label="$t('base')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            class="font-weight-bold"
            v-model.number="skillPoints.current"
            type="number"
            :label="$t('current')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model.number="skillPoints.perLevel"
            type="number"
            :label="$t('skill-points-per-level')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="skillPoints.intelligence"
            type="number"
            :label="$t('intelligence')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="skillPoints.dexterity"
            type="number"
            :label="$t('dexterity')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { SkillPoints } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";

@Component({
  name: "skill-points-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class SkillPointsCard extends CharacterInfo {
  get skillPoints() {
    if (!this.character.skillPoints) this.character.skillPoints = {};
    return this.character.skillPoints || {};
  }

  set skillPoints(skillPoints: SkillPoints) {
    if (this.character.skillPoints)
      Object.assign(this.character.skillPoints, skillPoints);
    else this.character.skillPoints = skillPoints;
  }
}
</script>

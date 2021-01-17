<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('skill-points')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            class="font-weight-bold"
            v-model.number="skillPoints.current"
            type="number"
            :label="$t('current')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-text-field
            v-model.number="skillPoints.base"
            type="number"
            :label="$t('base')"
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

const copySkillPoints = (skillPoints?: SkillPoints): SkillPoints => ({
  base: skillPoints?.base,
  current: skillPoints?.current,
  perLevel: skillPoints?.perLevel,
  intelligence: skillPoints?.intelligence,
  dexterity: skillPoints?.dexterity,
});

@Component({
  name: "skill-points-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class SkillPointsCard extends CharacterInfo {
  skillPoints = copySkillPoints(this.character.skillPoints);

  save() {
    this.update({ id: this.character.id, skillPoints: this.skillPoints });
  }

  cancel() {
    this.skillPoints = copySkillPoints(this.character.skillPoints);
  }
}
</script>

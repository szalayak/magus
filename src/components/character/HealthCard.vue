<template>
  <character-info-card :id="id" :editable="editable" :title="$t('health')">
    <template v-slot:fields="{ edit }">
      <v-subheader class="pl-0">{{ $t("vitality") }}</v-subheader>
      <v-row dense>
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="health.vitality.current"
            :label="$t('current')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="health.vitality.max"
            :label="$t('max')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="health.baseVitality"
            :label="$t('base')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
      <v-subheader class="pl-0">{{ $t("hit-points") }}</v-subheader>
      <v-row dense>
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="health.hitPoints.current"
            :label="$t('current')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="health.hitPoints.max"
            :label="$t('max')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" md="4">
          <v-text-field
            v-model.number="health.baseHitPoints"
            :label="$t('base')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" md="4">
          <throw-scenario-dialog
            v-bind.sync="health.hitPointsPerLevel"
            :title="$t('hit-points-per-level')"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="throwScenarioToString(health.hitPointsPerLevel)"
                :label="$t('hit-points-per-level')"
                :disabled="!edit"
                v-on="on"
                v-bind="attrs"
              />
            </template>
          </throw-scenario-dialog>
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { HealthInformation, ThrowScenario } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import ThrowScenarioDialog from "../ThrowScenarioDialog.vue";
import { getThrowScenarioString } from "@/utils/throwScenario";

@Component({
  name: "health-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "throw-scenario-dialog": ThrowScenarioDialog,
  },
})
export default class HealthCard extends CharacterInfo {
  get health() {
    const defaultHealth = {
      vitality: {},
      hitPoints: {},
      hitPointsPerLevel: {
        dice: undefined,
        iterationCount: 1,
        modifier: undefined,
      },
    };
    if (!this.character.health) this.character.health = defaultHealth;
    return this.character.health || defaultHealth;
  }

  set health(health: HealthInformation) {
    Object.assign(this.character.health, health);
  }

  throwScenarioToString(scenario: ThrowScenario) {
    return getThrowScenarioString(scenario, this.$i18n);
  }
}
</script>

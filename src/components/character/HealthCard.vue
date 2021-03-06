<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('vitality')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-subheader class="pl-0">{{ $t("vitality") }}</v-subheader>
      <v-row dense>
        <v-col cols="4">
          <v-text-field
            class="font-weight-bold"
            v-model.number="health.vitality.current"
            :label="$t('current')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model.number="health.vitality.max"
            :label="$t('max')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
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
        <v-col cols="6" sm="3">
          <v-text-field
            class="font-weight-bold"
            v-model.number="health.hitPoints.current"
            :label="$t('current')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" sm="3">
          <v-text-field
            v-model.number="health.hitPoints.max"
            :label="$t('max')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" sm="3">
          <v-text-field
            v-model.number="health.baseHitPoints"
            :label="$t('base')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6" sm="3">
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

// vitality?: MutablePointValue;
// baseVitality?: number;
// vitalityModifier?: number;
// hitPoints?: MutablePointValue;
// baseHitPoints?: number;
// hitPointModifier?: number;
// hitPointsPerLevel?: ThrowScenario;

const copyHealth = (health?: HealthInformation): HealthInformation => ({
  vitality: {
    current: health?.vitality?.current,
    max: health?.vitality?.max,
  },
  baseVitality: health?.baseVitality,
  vitalityModifier: health?.vitalityModifier,
  hitPoints: {
    current: health?.hitPoints?.current,
    max: health?.hitPoints?.max,
  },
  baseHitPoints: health?.baseHitPoints,
  hitPointModifier: health?.hitPointModifier,
  hitPointsPerLevel: {
    iterationCount: health?.hitPointsPerLevel?.iterationCount,
    dice: health?.hitPointsPerLevel?.dice,
    modifier: health?.hitPointsPerLevel?.modifier,
  },
});

@Component({
  name: "health-card",
  components: {
    "character-info-card": CharacterInfoCard,
    "throw-scenario-dialog": ThrowScenarioDialog,
  },
})
export default class HealthCard extends CharacterInfo {
  health = copyHealth(this.character.health);

  throwScenarioToString(scenario: ThrowScenario) {
    return getThrowScenarioString(scenario);
  }

  save() {
    this.update({ id: this.character.id, health: this.health });
  }

  cancel() {
    this.health = copyHealth(this.character.health);
  }
}
</script>

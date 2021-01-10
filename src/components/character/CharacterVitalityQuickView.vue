<template>
  <v-card outlined>
    <v-toolbar class="pl-0" flat>
      <v-card-title class="pl-0"
        ><slot name="title"
          ><router-link :to="characterToLink(character, 2, 'health')">{{
            $t("vitality")
          }}</router-link></slot
        ></v-card-title
      >
      <v-spacer />
      <v-switch
        v-if="!!character.armour"
        :input-value="character.armourActive"
        class="pt-4 mt-2"
        :label="$t('armour')"
        @change="toggleArmourActive"
      />
    </v-toolbar>
    <v-card-text>
      <v-row dense>
        <v-col cols="4"></v-col>
        <v-col cols="4"
          ><strong>{{ $t("current") }}</strong></v-col
        >
        <v-col cols="4"
          ><strong>{{ $t("max") }}</strong></v-col
        >
        <v-col cols="4"
          ><strong>{{ $t("vp") }}: </strong></v-col
        >
        <v-col cols="4">
          <quick-update-property-field
            :value="health.vitality.current || 0"
            :title="$t('current-vp')"
            @save="onCurrentVitalityChanged"
          />
        </v-col>
        <v-col cols="4">
          {{ health.vitality.max || 0 }}
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("hp") }}: </strong></v-col
        >
        <v-col cols="4">
          <quick-update-property-field
            :value="health.hitPoints.current || 0"
            :title="$t('current-hp')"
            @save="onCurrentHitPointsChanged"
          />
        </v-col>
        <v-col cols="4">
          {{ health.hitPoints.max || 0 }}
        </v-col>
        <template v-if="character.armour && character.armourActive">
          <v-col cols="4"
            ><strong>{{ $t("drv") }}: </strong></v-col
          >
          <v-col cols="4">
            <strong>{{
              character.armourCurrentDamageReductionValue ||
                armour.damageReductionValue ||
                0
            }}</strong>
          </v-col>
          <v-col cols="4">
            {{ armour.damageReductionValue || 0 }}
          </v-col>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { HealthInformation } from "@/store";
import Component from "vue-class-component";
import CharacterQuickView from "./CharacterQuickView";
import QuickUpdatePropertyField from "./QuickUpdatePropertyField.vue";
import ThrowScenarioTriggerField from "./ThrowScenarioTriggerField.vue";
@Component({
  name: "character-vitality-quick-view",
  components: {
    "throw-scenario-trigger-field": ThrowScenarioTriggerField,
    "quick-update-property-field": QuickUpdatePropertyField,
  },
})
export default class CharacterVitalityQuickView extends CharacterQuickView {
  get health() {
    return (
      this.character.health || {
        vitality: {},
        hitPoints: {},
      }
    );
  }

  get armour() {
    return this.character.armour || {};
  }

  async onCurrentVitalityChanged(newValue: number) {
    const health = { ...this.character.health } || { vitality: {} };
    if (health.vitality) health.vitality.current = newValue;
    return await this.save(this.character.id, health);
  }

  async onCurrentHitPointsChanged(newValue: number) {
    const health = { ...this.character.health } || { hitPoints: {} };
    if (health.hitPoints) health.hitPoints.current = newValue;
    return await this.save(this.character.id, health);
  }

  async save(id?: string, health?: HealthInformation) {
    try {
      await this.$store.dispatch("character/update", { id, health });
    } catch (error) {
      this.throwError(error);
    }
  }

  async toggleArmourActive() {
    const armourActive = this.character.armourActive ? false : true;
    try {
      await this.$store.dispatch("character/update", {
        id: this.character.id,
        armourActive,
      });
    } catch (error) {
      this.throwError(error);
    }
  }
}
</script>

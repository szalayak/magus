<template>
  <v-card outlined>
    <v-card-title
      ><slot name="title"
        ><router-link :to="characterToLink(character, 2, 'health')">{{
          $t("vitality")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-subtitle><slot name="subtitle"></slot></v-card-subtitle>
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
            v-if="isCurrentUser"
            :value="health.vitality.current || 0"
            :title="$t('current-vp')"
            @save="onCurrentVitalityChanged"
          />
          <template v-else
            ><strong>{{ health.vitality.current || 0 }}</strong></template
          >
        </v-col>
        <v-col cols="4">
          {{ health.vitality.max || 0 }}
        </v-col>
        <v-col cols="4"
          ><strong>{{ $t("hp") }}: </strong></v-col
        >
        <v-col cols="4">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="health.hitPoints.current || 0"
            :title="$t('current-hp')"
            @save="onCurrentHitPointsChanged"
          />
          <template v-else
            ><strong>{{ health.hitPoints.current || 0 }}</strong></template
          >
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
    <v-card-actions v-if="isCurrentUser">
      <v-switch
        v-if="!!character.armour"
        :input-value="character.armourActive"
        class="pl-2"
        :label="$t('armour')"
        @change="toggleArmourActive"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Component from "vue-class-component";
import CharacterVitalityQuickViewBase from "../CharacterVitalityQuickViewBase";
import QuickUpdatePropertyField from "../QuickUpdatePropertyField.vue";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";
@Component({
  name: "character-vitality-quick-view",
  components: {
    "throw-scenario-trigger-field": ThrowScenarioTriggerField,
    "quick-update-property-field": QuickUpdatePropertyField,
  },
})
export default class CharacterVitalityQuickView extends CharacterVitalityQuickViewBase {}
</script>

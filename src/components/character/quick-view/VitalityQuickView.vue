<template>
  <v-card :loading="loading" flat>
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{ $t("vitality") }}</v-toolbar-title>
      <v-spacer />
      <v-switch
        :disabled="!isCurrentUser"
        v-if="!!character.armour"
        :input-value="character.armourActive"
        class="pt-4"
        :label="$t('armour')"
        @change="toggleArmourActive"
      />
    </v-app-bar>
    <v-card-text class="pt-0">
      <v-alert
        :value="error"
        dense
        outlined
        type="error"
        dismissible
        @input="dismissError"
      >
        {{ messages }}
      </v-alert>
      <v-row dense>
        <v-col cols="5">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="health.hitPoints.current || 0"
            :title="$t('current-hp')"
            @save="onCurrentHitPointsChanged"
          >
            <quick-view-output-field
              :caption="$t('current-hp')"
              :value="`${health.hitPoints.current || 0}/${
                health.hitPoints.max || 0
              }`"
            />
          </quick-update-property-field>
          <quick-view-output-field
            v-else
            :caption="$t('current-hp')"
            :value="`${health.hitPoints.current || 0}/${
              health.hitPoints.max || 0
            }`"
          />
        </v-col>
        <v-col cols="5">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="health.vitality.current || 0"
            :title="$t('current-vp')"
            @save="onCurrentVitalityChanged"
          >
            <quick-view-output-field
              :caption="$t('current-vp')"
              :value="`${health.vitality.current || 0}/${
                health.vitality.max || 0
              }`"
            />
          </quick-update-property-field>
          <quick-view-output-field
            v-else
            :caption="$t('current-vp')"
            :value="`${health.vitality.current || 0}/${
              health.vitality.max || 0
            }`"
          />
        </v-col>
        <v-col v-if="character.armour && character.armourActive" cols="2">
          <quick-view-output-field
            :caption="$t('drv')"
            :value="
              character.armourCurrentDamageReductionValue ||
              armour.damageReductionValue ||
              0
            "
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterVitalityQuickViewBase from "../CharacterVitalityQuickViewBase";
import QuickViewOutputField from "./QuickViewOutputField.vue";
import QuickUpdatePropertyField from "../QuickUpdatePropertyField.vue";
@Component({
  components: { QuickViewOutputField, QuickUpdatePropertyField },
  name: "vitality-quick-view",
})
export default class VitalityQuickView extends CharacterVitalityQuickViewBase {}
</script>

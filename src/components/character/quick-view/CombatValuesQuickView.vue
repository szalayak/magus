<template>
  <v-card flat>
    <v-card-title>{{ $t("combat-values") }}</v-card-title>
    <v-card-text>
      <div class="text-h7 mb-2">{{ $t("no-weapons") }}</div>
      <v-row dense>
        <v-col cols="3">
          <throw-scenario-trigger-field
            throwScenarioString="D10"
            :title="$t('initiation')"
          >
            <quick-view-output-field
              :caption="$t('initiation')"
              :value="combatValuesWithoutWeapon.initiation"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3">
          <throw-scenario-trigger-field
            throwScenarioString="D100"
            :title="$t('offence')"
          >
            <quick-view-output-field
              :caption="$t('offence')"
              :value="combatValuesWithoutWeapon.offence"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3">
          <quick-view-output-field
            :caption="$t('defence')"
            :value="combatValuesWithoutWeapon.defence"
          />
        </v-col>
        <v-col cols="3">
          <throw-scenario-trigger-field
            throwScenarioString="D100"
            :title="$t('aiming')"
          >
            <quick-view-output-field
              :caption="$t('aiming')"
              :value="combatValuesWithoutWeapon.aiming"
            />
          </throw-scenario-trigger-field>
        </v-col>
      </v-row>
      <template v-for="weapon in combatValuesWithWeapons">
        <div :key="`${weapon.id}-label`" class="text-h7 mb-2">
          {{ weapon.weapon.description.title }}
        </div>
        <v-row :key="weapon.id" dense>
          <v-col cols="3">
            <throw-scenario-trigger-field
              throwScenarioString="D10"
              :title="$t('initiation')"
            >
              <quick-view-output-field
                :caption="$t('initiation')"
                :value="weapon.combatValues.initiation"
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col cols="3">
            <throw-scenario-trigger-field
              throwScenarioString="D100"
              :title="$t('offence')"
            >
              <quick-view-output-field
                :caption="$t('offence')"
                :value="weapon.combatValues.offence"
              />
            </throw-scenario-trigger-field>
          </v-col>
          <v-col cols="3">
            <quick-view-output-field
              :caption="$t('defence')"
              :value="weapon.combatValues.defence"
            />
          </v-col>
          <v-col cols="3">
            <throw-scenario-trigger-field
              throwScenarioString="D100"
              :title="$t('aiming')"
            >
              <quick-view-output-field
                :caption="$t('aiming')"
                :value="weapon.combatValues.aiming"
              />
            </throw-scenario-trigger-field>
          </v-col>
        </v-row>
      </template>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterCombatValuesQuickViewBase from "../CharacterCombatValuesQuickViewBase";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";
import QuickViewOutputField from "./QuickViewOutputField.vue";
@Component({
  components: { QuickViewOutputField, ThrowScenarioTriggerField },
  name: "combat-values-quick-view",
})
export default class CombatValuesQuickView extends CharacterCombatValuesQuickViewBase {}
</script>

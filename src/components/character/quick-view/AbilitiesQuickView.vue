<template>
  <v-card flat>
    <v-card-title>{{ $t("abilities") }}</v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('strength-check')"
            :value="abilities.strength"
          >
            <quick-view-output-field
              :caption="$t('strength')"
              :value="abilities.strength"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('dexterity-check')"
            :value="agilityInArmour"
          >
            <quick-view-output-field
              :caption="$t('agility')"
              :value="agilityInArmour"
              :title="$t('agility-check')"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('dexterity-check')"
            :value="dexterityInArmour"
          >
            <quick-view-output-field
              :caption="$t('dexterity')"
              :value="dexterityInArmour"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('stamina-check')"
            :value="abilities.stamina"
          >
            <quick-view-output-field
              :caption="$t('stamina')"
              :value="abilities.stamina"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('health-check')"
            :value="abilities.health"
          >
            <quick-view-output-field
              :caption="$t('health')"
              :value="abilities.health"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('beauty-check')"
            :value="abilities.beauty"
          >
            <quick-view-output-field
              :caption="$t('beauty')"
              :value="abilities.beauty"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('intelligence-check')"
            :value="abilities.intelligence"
          >
            <quick-view-output-field
              :caption="$t('intelligence')"
              :value="abilities.intelligence"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('willpower-check')"
            :value="abilities.willpower"
          >
            <quick-view-output-field
              :caption="$t('willpower')"
              :value="abilities.willpower"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('astral-check')"
            :value="abilities.astral"
          >
            <quick-view-output-field
              :caption="$t('astral')"
              :value="abilities.astral"
            />
          </throw-scenario-trigger-field>
        </v-col>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('perception-check')"
            :value="abilities.perception"
          >
            <quick-view-output-field
              :caption="$t('perception')"
              :value="abilities.perception"
            />
          </throw-scenario-trigger-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterAbilitiesQuickViewBase from "../CharacterAbilitiesQuickViewBase";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";
import QuickViewOutputField from "./QuickViewOutputField.vue";
@Component({
  components: { QuickViewOutputField, ThrowScenarioTriggerField },
  name: "abilities-quick-view",
})
export default class AbilitiesQuickView extends CharacterAbilitiesQuickViewBase {}
</script>

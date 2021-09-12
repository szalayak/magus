<template>
  <v-card flat>
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{ $t("abilities") }}</v-toolbar-title>
    </v-app-bar>
    <v-card-text class="pt-0">
      <v-alert
        dense
        v-if="abilityCheckStatus.show"
        text
        :color="abilityCheckStatus.type"
        dismissible
        @input="abilityCheckResult = null"
      >
        <strong>{{ $t(`${abilityCheckResult.abilityName}-check`) }}</strong>
        <v-row dense no-gutters>
          <v-col cols="6">{{ $t(abilityCheckResult.abilityName) }}:</v-col>
          <v-col cols="6">
            {{ abilityCheckResult.abilityValue || 0
            }}<template v-if="abilityCheckResult.result.modifier">
              + ({{ abilityCheckResult.result.modifier }}) =
              {{
                (abilityCheckResult.abilityValue || 0) +
                abilityCheckResult.result.modifier
              }}</template
            ></v-col
          >
          <v-col cols="6">{{ $t("result") }}:</v-col>
          <v-col cols="6">{{
            abilityCheckResult.result.throwResults[0].result
          }}</v-col>
        </v-row>
      </v-alert>
      <v-row dense>
        <v-col cols="3" sm="2">
          <throw-scenario-trigger-field
            dialog
            throwScenarioString="D10"
            :title="$t('strength-check')"
            :value="abilities.strength"
            @save="onCheckResult($event, 'strength', abilities.strength || 0)"
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
            @save="onCheckResult($event, 'agility', agilityInArmour || 0)"
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
            @save="onCheckResult($event, 'dexterity', dexterityInArmour || 0)"
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
            @save="onCheckResult($event, 'stamina', abilities.stamina || 0)"
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
            @save="onCheckResult($event, 'health', abilities.health || 0)"
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
            @save="onCheckResult($event, 'beauty', abilities.beauty || 0)"
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
            @save="
              onCheckResult($event, 'intelligence', abilities.intelligence || 0)
            "
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
            @save="onCheckResult($event, 'strength', abilities.willpower || 0)"
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
            @save="onCheckResult($event, 'astral', abilities.astral || 0)"
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
            @save="
              onCheckResult($event, 'perception', abilities.perception || 0)
            "
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

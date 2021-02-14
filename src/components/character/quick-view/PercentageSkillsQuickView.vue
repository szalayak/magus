<template>
  <v-card flat>
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{
        $t("percentage-skills")
      }}</v-toolbar-title>
    </v-app-bar>
    <v-card-text class="pt-0">
      <v-alert
        dense
        v-if="skillCheckStatus.show"
        text
        :color="skillCheckStatus.type"
        dismissible
        @input="skillCheckResult = null"
      >
        <strong>{{ $t("skill-check") }}</strong>
        <v-row dense>
          <v-col cols="6"
            >{{ skillCheckResult.skill.skill.description.title }}:</v-col
          >
          <v-col cols="6"
            >{{ skillCheckResult.skill.percentageValue || 0 }}%<template
              v-if="skillCheckResult.result.modifier"
            >
              + ({{ skillCheckResult.result.modifier }}%) =
              {{
                (skillCheckResult.skill.percentageValue || 0) +
                  skillCheckResult.result.modifier
              }}%</template
            ></v-col
          >
          <v-col cols="6">{{ $t("result") }}:</v-col>
          <v-col cols="6">{{
            skillCheckResult.result.throwResults[0].result
          }}</v-col>
        </v-row>
      </v-alert>
      <v-list flat dense class="pa-0">
        <v-list-item class="ps-0" v-for="skill in skills" :key="skill.id">
          <v-list-item-content>
            <v-list-item-title v-text="skill.skill.description.title" />
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text
              ><throw-scenario-trigger-field
                bold
                dialog
                throwScenarioString="D100"
                :title="skill.skill.description.title"
                :value="`${skill.percentageValue}%`"
                @save="onCheckResult($event, skill)"
            /></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import QuickViewOutputField from "./QuickViewOutputField.vue";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";
import CharacterPercentageSkillsQuickViewBase from "../CharacterPercentageSkillsQuickViewBase";
import { executeThrowScenario, parseThrowScenarioString } from "@/utils";
import { SkillAssignment } from "@/store";
@Component({
  components: { QuickViewOutputField, ThrowScenarioTriggerField },
  name: "percentage-skills-quick-view",
})
export default class PercentageSkillsQuickView extends CharacterPercentageSkillsQuickViewBase {
  performThrow(throwScenarioString: string, skill: SkillAssignment) {
    const throwScenario = parseThrowScenarioString(throwScenarioString);
    this.onCheckResult(executeThrowScenario(throwScenario), skill);
  }
}
</script>

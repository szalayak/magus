<template>
  <v-card flat>
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{
        $t("percentage-skills")
      }}</v-toolbar-title>
    </v-app-bar>
    <v-card-text>
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
      <v-row dense>
        <template v-for="skill in skills">
          <v-col :key="`${skill.id}-id`" cols="8">
            <strong>{{ skill.skill.description.title }}</strong></v-col
          ><v-col :key="`${skill.id}-value`" cols="4">
            <throw-scenario-trigger-field
              bold
              dialog
              throwScenarioString="D100"
              :title="skill.skill.description.title"
              :value="`${skill.percentageValue}%`"
              @save="onCheckResult($event, skill)"/></v-col
        ></template>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import QuickViewOutputField from "./QuickViewOutputField.vue";
import ThrowScenarioTriggerField from "../ThrowScenarioTriggerField.vue";
import CharacterPercentageSkillsQuickViewBase from "../CharacterPercentageSkillsQuickViewBase";
@Component({
  components: { QuickViewOutputField, ThrowScenarioTriggerField },
  name: "percentage-skills-quick-view",
})
export default class PercentageSkillsQuickView extends CharacterPercentageSkillsQuickViewBase {}
</script>

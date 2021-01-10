<template>
  <v-card outlined>
    <v-card-title>
      <slot name="title">
        <router-link :to="characterToLink(character, 3, 'skills')">{{
          $t("percentage-skills")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-text>
      <v-alert
        dense
        v-if="skillTrialStatus.show"
        text
        :color="skillTrialStatus.type"
        dismissible
        @input="skillTrialResult = null"
      >
        <strong>{{ $t("skill-trial") }}</strong>
        <v-row dense>
          <v-col cols="6"
            >{{ skillTrialResult.skill.skill.description.title }}:</v-col
          >
          <v-col cols="6"
            >{{ skillTrialResult.skill.percentageValue || 0 }}%<template
              v-if="skillTrialResult.result.modifier"
            >
              + ({{ skillTrialResult.result.modifier }}%) =
              {{
                (skillTrialResult.skill.percentageValue || 0) +
                  skillTrialResult.result.modifier
              }}%</template
            ></v-col
          >
          <v-col cols="6">{{ $t("result") }}:</v-col>
          <v-col cols="6">{{
            skillTrialResult.result.throwResults[0].result
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
              @save="onTrialResult($event, skill)"/></v-col
        ></template> </v-row
    ></v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import ThrowScenarioTriggerField from "./ThrowScenarioTriggerField.vue";
import CharacterQuickView from "./CharacterQuickView";
import {
  localiseItem,
  skillTrial,
  SkillTrialResult,
  ThrowScenarioResult,
} from "@/utils";
import { SkillAssignment } from "@/store";
@Component({
  name: "character-percentage-skills-quick-view",
  components: {
    "throw-scenario-trigger-field": ThrowScenarioTriggerField,
  },
})
export default class CharacterPercentageSkillsQuickView extends CharacterQuickView {
  skillTrialResult: SkillTrialResult | null = null;

  get skillTrialStatus() {
    return {
      show: !!this.skillTrialResult,
      type:
        this.skillTrialResult && this.skillTrialResult.success
          ? "success"
          : "error",
    };
  }

  get skills() {
    return this.character.skills
      ?.filter(s => s.skill?.percentageSkill)
      .map(s => ({
        ...s,
        skill: s.skill ? localiseItem(s.skill, this.$i18n.locale) : s.skill,
      }));
  }

  onTrialResult(result: ThrowScenarioResult, skill: SkillAssignment) {
    this.skillTrialResult = skillTrial({ result, skill });
  }
}
</script>

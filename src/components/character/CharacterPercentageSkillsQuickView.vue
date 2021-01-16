<template>
  <v-card outlined>
    <v-card-title>
      <slot name="title">
        <router-link :to="characterToLink(character, 3, 'skills')">{{
          $t("percentage-skills")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-subtitle><slot name="subtitle"></slot></v-card-subtitle>
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
  skillCheck,
  SkillCheckResult,
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
  skillCheckResult: SkillCheckResult | null = null;

  get skillCheckStatus() {
    return {
      show: !!this.skillCheckResult,
      type:
        this.skillCheckResult && this.skillCheckResult.success
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

  onCheckResult(result: ThrowScenarioResult, skill: SkillAssignment) {
    this.skillCheckResult = skillCheck({ result, skill });
  }
}
</script>

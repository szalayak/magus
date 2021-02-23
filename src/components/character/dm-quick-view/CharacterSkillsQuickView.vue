<template>
  <v-card outlined>
    <v-card-title>
      <slot name="title">
        <router-link :to="characterToLink(character, 3, 'skills')">{{
          $t("skills")
        }}</router-link></slot
      ></v-card-title
    >
    <v-card-subtitle><slot name="subtitle"></slot></v-card-subtitle>
    <v-card-text>
      <v-row dense>
        <template v-for="skill in skills">
          <v-col :key="`${skill.id}-id`" cols="8">
            <strong>{{ skill.skill.description.title }}</strong></v-col
          ><v-col :key="`${skill.id}-value`" cols="4">
            {{ masteryToString(skill.mastery) }}</v-col
          ></template
        >
      </v-row></v-card-text
    >
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterSkillsQuickViewBase from "../CharacterSkillsQuickViewBase";
@Component({
  name: "character-skills-quick-view",
})
export default class CharacterSkillsQuickView extends CharacterSkillsQuickViewBase {}
</script>

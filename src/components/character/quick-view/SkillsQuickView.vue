<template>
  <v-card flat>
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{ $t("skills") }}</v-toolbar-title>
    </v-app-bar>
    <v-card-text class="pt-0">
      <v-list class="pa-0" flat dense>
        <v-list-item class="ps-0" v-for="skill in skills" :key="skill.id">
          <v-list-item-content>
            <v-list-item-title v-text="skill.skill.description.title" />
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text v-text="masteryToString(skill.mastery)" />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import CharacterSkillsQuickViewBase from "../CharacterSkillsQuickViewBase";
@Component({
  components: {},
  name: "skills-quick-view",
})
export default class SkillsQuickView extends CharacterSkillsQuickViewBase {}
</script>

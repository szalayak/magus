<template>
  <character-info-card :id="id" :editable="editable" :title="$t('properties')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-textarea
            v-model="basicInfo.personalityTraits"
            :label="$t('personality-traits')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="basicInfo.specialAbilities"
            :label="$t('special-abilities')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { CharacterBasicInfo } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";

@Component({
  name: "properties-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class PropertiesCard extends CharacterInfo {
  get basicInfo() {
    if (!this.character.basicInfo) this.character.basicInfo = {};
    return this.character.basicInfo || {};
  }

  set basicInfo(basicInfo: CharacterBasicInfo) {
    Object.assign(this.character.basicInfo, basicInfo);
  }
}
</script>

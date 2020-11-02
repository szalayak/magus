<template>
  <character-info-card :id="id" :editable="editable" :title="$t('connections')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="basicInfo.family"
            :label="$t('family')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="basicInfo.companions"
            :label="$t('companions')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="basicInfo.enemies"
            :label="$t('enemies')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model.number="basicInfo.fame"
            :label="$t('fame')"
            :disabled="!edit"
            type="number"
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
  name: "connections",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class Connections extends CharacterInfo {
  get basicInfo() {
    if (!this.character.basicInfo) this.character.basicInfo = {};
    return this.character.basicInfo || {};
  }

  set basicInfo(basicInfo: CharacterBasicInfo) {
    Object.assign(this.character.basicInfo, basicInfo);
  }
}
</script>

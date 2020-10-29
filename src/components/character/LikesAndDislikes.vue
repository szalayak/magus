<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('likes-and-dislikes')"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-textarea
            v-model="basicInfo.likes"
            :label="$t('likes')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="basicInfo.dislikes"
            :label="$t('dislikes')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="basicInfo.fears"
            :label="$t('fears')"
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
  name: "likes-and-dislikes",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class LikesAndDislikes extends CharacterInfo {
  get basicInfo() {
    if (!this.character.basicInfo) this.character.basicInfo = {};
    return this.character.basicInfo || {};
  }

  set basicInfo(basicInfo: CharacterBasicInfo) {
    Object.assign(this.character.basicInfo, basicInfo);
  }
}
</script>

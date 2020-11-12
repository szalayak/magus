<template>
  <character-info-card :id="id" :editable="editable" :title="$t('appearance')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-select
            v-model="basicInfo.sex"
            :label="$t('sex')"
            :items="sexes"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="basicInfo.eyes"
            :label="$t('eyes')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="basicInfo.hair"
            :label="$t('hair')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="basicInfo.weight"
            :label="$t('weight')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="basicInfo.height"
            :label="$t('height')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model.number="basicInfo.age"
            type="number"
            :label="$t('age')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="2">
          <v-text-field
            v-model.number="basicInfo.visibleAge"
            type="number"
            :label="$t('visible-age')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="4">
          <v-text-field
            v-model="basicInfo.identifier"
            :label="$t('identifier')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="basicInfo.attire"
            :label="$t('attire')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { Sex } from "@/API";
import { CharacterBasicInfo, DropdownValueList } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";

@Component({
  name: "appearance-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class AppearanceCard extends CharacterInfo {
  get sexes(): DropdownValueList[] {
    return Object.keys(Sex).map(sex => ({
      value: sex.toString(),
      text: this.$i18n.t(sex).toString(),
    }));
  }

  get basicInfo() {
    if (!this.character.basicInfo) this.character.basicInfo = {};
    return this.character.basicInfo || {};
  }

  set basicInfo(basicInfo: CharacterBasicInfo) {
    if (this.character.basicInfo)
      Object.assign(this.character.basicInfo, basicInfo);
    else this.character.basicInfo = basicInfo;
  }
}
</script>
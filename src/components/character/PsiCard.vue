<template>
  <character-info-card :id="id" :editable="editable" :title="$t('psi')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" sm="12">
          <v-select
            v-model="character.psiSchool"
            :label="$t('school')"
            :items="psiSchools"
            item-value="id"
            item-text="description.title"
            :disabled="!edit"
            return-object
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            class="font-weight-bold"
            v-model.number="psiPoints.current"
            :label="$t('current')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="psiPoints.max"
            :label="$t('max')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="character.psiLevel"
            :label="$t('level')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            :label="$t('psi-points-per-level')"
            :value="psiPointsPerLevel"
            disabled
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { localise } from "@/utils/localise";
import { PsiSchool } from "@/store/modules/psiSchool";
import { MutablePointValue } from "@/store/types";

@Component({
  name: "psi-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class PsiCard extends CharacterInfo {
  get psiSchools(): PsiSchool[] {
    return localise(
      this.$store.getters["psiSchool/list"],
      this.$i18n.locale
    ) as PsiSchool[];
  }

  get psiPointsPerLevel() {
    return this.character.psiSchool?.psiPointsPerLevel;
  }

  get psiPoints(): MutablePointValue {
    if (!this.character.psiPoints) this.character.psiPoints = {};
    return this.character.psiPoints || {};
  }

  set psiPoints(psiPoints: MutablePointValue) {
    Object.assign(this.character.psiPoints, psiPoints);
  }
}
</script>

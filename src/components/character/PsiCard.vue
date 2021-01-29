<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('psi')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" sm="12">
          <v-select
            v-model="psi.psiSchool"
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
            v-model.number="psi.psiPoints.current"
            :label="$t('current')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="psi.psiPoints.max"
            :label="$t('max')"
            type="number"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="psi.psiLevel"
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
import { PsiSchool } from "@/store/modules/psiSchool";
import { Character } from "@/store";

type Psi = Pick<Character, "psiSchool" | "psiPoints" | "psiLevel">;

const copyPsi = (psi: Psi): Psi => ({
  psiSchool: psi.psiSchool,
  psiLevel: psi.psiLevel,
  psiPoints: {
    current: psi.psiPoints?.current,
    max: psi.psiPoints?.max,
  },
});

@Component({
  name: "psi-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class PsiCard extends CharacterInfo {
  psi = copyPsi(this.character);

  get psiSchools(): PsiSchool[] {
    return [
      {
        id: null,
        description: {
          title: this.$t("none"),
        },
      },
      ...this.$store.getters["psiSchool/list"],
    ] as PsiSchool[];
  }

  get psiPointsPerLevel() {
    return this.psi.psiSchool?.psiPointsPerLevel;
  }

  save() {
    this.update({ id: this.character.id, ...this.psi });
  }

  cancel() {
    this.psi = copyPsi(this.character);
  }
}
</script>

<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('appearance')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-select
            v-model="appearance.sex"
            :label="$t('sex')"
            :items="sexes"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="appearance.eyes"
            :label="$t('eyes')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="appearance.hair"
            :label="$t('hair')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="appearance.weight"
            :label="$t('weight')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model="appearance.height"
            :label="$t('height')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="1">
          <v-text-field
            v-model.number="appearance.age"
            type="number"
            :label="$t('age')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="2">
          <v-text-field
            v-model.number="appearance.visibleAge"
            type="number"
            :label="$t('visible-age')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3" lg="4">
          <v-text-field
            v-model="appearance.identifier"
            :label="$t('identifier')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="appearance.attire"
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

type Appearance = Pick<
  CharacterBasicInfo,
  | "sex"
  | "weight"
  | "height"
  | "hair"
  | "eyes"
  | "age"
  | "visibleAge"
  | "identifier"
  | "attire"
>;

const copyAppearance = (appearance?: Appearance): Appearance => ({
  sex: appearance?.sex,
  height: appearance?.height,
  weight: appearance?.weight,
  hair: appearance?.hair,
  eyes: appearance?.eyes,
  age: appearance?.age,
  visibleAge: appearance?.visibleAge,
  identifier: appearance?.identifier,
  attire: appearance?.attire,
});

@Component({
  name: "appearance-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class AppearanceCard extends CharacterInfo {
  appearance = copyAppearance(this.character.basicInfo);

  get sexes(): DropdownValueList[] {
    return Object.keys(Sex).map(sex => ({
      value: sex.toString(),
      text: this.$i18n.t(sex).toString(),
    }));
  }

  save() {
    const basicInfo = { ...this.character.basicInfo, ...this.appearance };
    this.update({ id: this.character.id, basicInfo });
  }

  cancel() {
    this.appearance = copyAppearance(this.character.basicInfo);
  }
}
</script>

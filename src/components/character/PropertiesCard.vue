<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('properties')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-textarea
            v-model="properties.personalityTraits"
            :label="$t('personality-traits')"
            :disabled="!edit"
            auto-grow
            rows="1"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="properties.specialAbilities"
            :label="$t('special-abilities')"
            :disabled="!edit"
            auto-grow
            rows="1"
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

type Properties = Pick<
  CharacterBasicInfo,
  "personalityTraits" | "specialAbilities"
>;

const copyProperties = (properties?: Properties): Properties => ({
  personalityTraits: properties?.personalityTraits,
  specialAbilities: properties?.specialAbilities,
});

@Component({
  name: "properties-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class PropertiesCard extends CharacterInfo {
  properties = copyProperties(this.character.basicInfo);

  save(): void {
    const basicInfo = { ...this.character.basicInfo, ...this.properties };
    this.update({ id: this.character.id, basicInfo });
  }

  cancel(): void {
    this.properties = copyProperties(this.character.basicInfo);
  }
}
</script>

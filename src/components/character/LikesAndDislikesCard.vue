<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('likes-and-dislikes')"
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
            v-model="properties.likes"
            :label="$t('likes')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="properties.dislikes"
            :label="$t('dislikes')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="properties.fears"
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

type Properties = Pick<CharacterBasicInfo, "likes" | "dislikes" | "fears">;

const copyProperties = (properties?: Properties): Properties => ({
  likes: properties?.likes,
  dislikes: properties?.dislikes,
  fears: properties?.fears,
});

@Component({
  name: "likes-and-dislikes-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class LikesAndDislikesCard extends CharacterInfo {
  properties = copyProperties(this.character.basicInfo);

  save() {
    const basicInfo = { ...this.character.basicInfo, ...this.properties };
    this.update({ id: this.character.id, basicInfo });
  }

  cancel() {
    this.properties = copyProperties(this.character.basicInfo);
  }
}
</script>

<template>
  <character-info-card :id="id" :editable="editable" :title="$t('notes')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-textarea
            v-model="character.notes"
            :label="$t('notes')"
            :disabled="!edit"
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

@Component({
  name: "notes-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class NotesCard extends CharacterInfo {}
</script>

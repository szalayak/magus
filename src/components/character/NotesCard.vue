<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('notes')"
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
            v-model="notes"
            :label="$t('notes')"
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
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";

@Component({
  name: "notes-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class NotesCard extends CharacterInfo {
  notes = this.character.notes;

  save() {
    this.update({ id: this.character.id, notes: this.notes });
  }

  cancel() {
    this.notes = this.character.notes;
  }
}
</script>

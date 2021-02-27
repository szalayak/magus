<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('connections')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="connections.family"
            :label="$t('family')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="connections.companions"
            :label="$t('companions')"
            :disabled="!edit"
            auto-grow
            rows="1"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="connections.enemies"
            :label="$t('enemies')"
            :disabled="!edit"
            auto-grow
            rows="1"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model.number="connections.fame"
            :label="$t('fame')"
            :disabled="!edit"
            type="number"
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

type Connections = Pick<
  CharacterBasicInfo,
  "family" | "companions" | "enemies" | "fame"
>;

const copyConnections = (connections?: Connections): Connections => ({
  family: connections?.family,
  companions: connections?.companions,
  enemies: connections?.enemies,
  fame: connections?.fame,
});

@Component({
  name: "connections-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class ConnectionsCard extends CharacterInfo {
  connections = copyConnections(this.character.basicInfo);

  save() {
    const basicInfo = { ...this.character.basicInfo, ...this.connections };
    this.update({ id: this.character.id, basicInfo });
  }

  cancel() {
    this.connections = copyConnections(this.character.basicInfo);
  }
}
</script>

<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('administrative-info')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-menu
            v-model="startDatePicker"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="administrativeInfo.startDate"
                :label="$t('start-date')"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="[v => !!v || $t('field-is-mandatory')]"
                required
                :disabled="!edit"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="administrativeInfo.startDate"
              @input="startDatePicker = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-select
            v-model="administrativeInfo.dungeonMaster"
            :label="$t('dungeon-master')"
            :items="users"
            item-value="username"
            item-text="name"
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
import { Character, User } from "@/store";

type AdministrativeInfo = Pick<Character, "startDate" | "dungeonMaster">;

const copyAdministrativeInfo = (
  info?: AdministrativeInfo
): AdministrativeInfo => ({
  startDate: info?.startDate,
  dungeonMaster: info?.dungeonMaster,
});

@Component({
  name: "administrative-info-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class AdministrativeInfoCard extends CharacterInfo {
  startDatePicker = false;
  administrativeInfo = copyAdministrativeInfo(this.character);

  get users(): User[] {
    return this.$store.getters["getUsers"];
  }

  async created() {
    this.$store.dispatch("loadUsers");
  }

  save() {
    this.update({ id: this.character.id, ...this.administrativeInfo });
  }

  cancel() {
    this.administrativeInfo = copyAdministrativeInfo(this.character);
  }
}
</script>

<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('administrative-info')"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
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
                v-model="character.startDate"
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
              v-model="character.startDate"
              @input="startDatePicker = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="character.dungeonMaster"
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
import { User } from "@/store";

@Component({
  name: "administrative-info-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class AdministrativeInfoCard extends CharacterInfo {
  startDatePicker = false;

  get users(): User[] {
    return this.$store.getters["getUsers"];
  }

  async created() {
    this.$store.dispatch("loadUsers");
  }
}
</script>

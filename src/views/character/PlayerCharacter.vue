<template>
  <v-container fluid>
    <v-toolbar flat>
      <v-toolbar-title>{{ character.name }}</v-toolbar-title>
      <v-container>
        <v-row justify="center">
          <v-btn-toggle tile color="primary" group v-model="page">
            <v-btn>Page 1</v-btn>
            <v-btn>Page 2</v-btn>
            <v-btn>Page 3</v-btn>
            <v-btn>Page 4</v-btn>
          </v-btn-toggle>
        </v-row>
      </v-container>
    </v-toolbar>
    <v-row>
      <v-col v-show="page === 0" cols="12" sm="12" md="3" lg="2">
        <appearance :id="character.id" />
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Basic Info</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Abilities</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Health</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Psi</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Spell Resistance</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Magic</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Combat Values</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Armour</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 1" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Shield</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 2" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Weapons</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 2" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Ranged Weapons</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 2" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Skills</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Magical Items</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Languages</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Wallet</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Inventory</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Animals</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Companions</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Poisons</v-card-title>
        </v-card>
      </v-col>
      <v-col v-show="page === 3" cols="12" sm="12" md="3" lg="2">
        <v-card>
          <v-card-title>Notes</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Vue from "vue";
import Component from "vue-class-component";
import Appearance from "./Appearance.vue";

@Component({
  name: "player-character",
  components: {
    appearance: Appearance,
  },
})
export default class PlayerCharacter extends Vue {
  id = this.$route.params.id;
  page = 0;

  get character(): Character {
    return (
      this.$store.getters["character/listTransient"].find(
        (char: Character) => char.id === this.id
      ) || {}
    );
  }

  set character(character: Character) {
    this.$store.commit("race/mergeTransient", character);
  }

  save() {
    this.$store.dispatch("character/update", this.character);
  }

  mounted() {
    this.$store.dispatch("character/loadItem", this.id);
  }
}
</script>

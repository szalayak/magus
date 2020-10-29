<template>
  <v-container fluid>
    <v-data-iterator :items="characters" hide-default-footer>
      <template v-slot:header>
        <v-toolbar flat>
          <v-toolbar-title>{{ $t("player-characters") }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:default="props">
        <v-row class="px-3">
          <v-col
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card :to="`/dm-area/player-characters/${item.id}`" outlined>
              <v-card-title>
                {{ item.name }}
              </v-card-title>
              <v-card-subtitle>{{ characterToString(item) }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-snackbar
      v-for="message in messages"
      v-model="notification"
      :key="message"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification = false">
          {{ $t("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Vue from "vue";
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import PlayerCharacters from "./PlayerCharacters";

type Form = Vue & { validate: () => boolean };

@Component({
  name: "player-characters-as-dm",
})
export default class PlayerCharactersAsDM extends PlayerCharacters {
  get characters(): Character[] {
    return this.$store.getters["character/playerCharactersAsDungeonMaster"];
  }

  mounted() {
    this.$store
      .dispatch(
        "character/loadByDungeonMaster",
        this.$store.state.app.user.username
      )
      .catch((error: GraphQLResult<Character>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
  }
}
</script>

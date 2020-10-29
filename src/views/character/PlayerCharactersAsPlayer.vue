<template>
  <v-container fluid>
    <v-data-iterator :items="characters" hide-default-footer>
      <template v-slot:header>
        <v-toolbar flat>
          <v-toolbar-title>{{ $t("my-characters") }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="createDialog" persistent max-width="50%">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on">
                <v-icon class="mr-2">mdi-plus</v-icon>
                {{ $t("new-character") }}
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ $t("new-character") }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="create" v-model="createValid">
                  <v-row>
                    <v-subheader>{{ $t("general-properties") }}</v-subheader>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6" lg="4">
                      <v-text-field
                        v-model="editedItem.name"
                        :label="$t('name')"
                        :rules="[v => !!v || $t('field-is-mandatory')]"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="4">
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
                            v-model="editedItem.startDate"
                            :label="$t('start-date')"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            :rules="[v => !!v || $t('field-is-mandatory')]"
                            required
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.startDate"
                          @input="startDatePicker = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="4">
                      <v-text-field
                        v-model="editedItem.dungeonMaster"
                        :label="$t('dungeon-master')"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-subheader>{{ $t("race-and-class") }} </v-subheader>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-select
                        v-model="editedItem.race"
                        :items="races"
                        item-text="description.title"
                        item-value="id"
                        :label="$t('race')"
                        return-object
                        :rules="[v => !!v || $t('field-is-mandatory')]"
                        required
                      />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-select
                        v-model="editedItem.class"
                        :items="classes"
                        item-text="description.title"
                        item-value="id"
                        :label="$t('class')"
                        return-object
                        :rules="[v => !!v || $t('field-is-mandatory')]"
                        required
                      />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-text-field
                        v-model="editedItem.subclass"
                        :label="$t('subclass')"
                      />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="3">
                      <v-text-field
                        v-model="editedItem.specialisation"
                        :label="$t('specialisation')"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-subheader>{{ $t("level") }}</v-subheader>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6" lg="4">
                      <v-text-field
                        v-model.number="editedItem.level.currentLevel"
                        type="number"
                        :label="$t('current-level')"
                        :rules="[v => !!v || $t('field-is-mandatory')]"
                        required
                      />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="4">
                      <v-text-field
                        v-model.number="editedItem.level.currentExperience"
                        type="number"
                        :label="$t('current-experience')"
                      />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="4">
                      <v-text-field
                        v-model.number="editedItem.level.experienceForNextLevel"
                        type="number"
                        :label="$t('experience-for-next-level')"
                      />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="createDialog = false">
                  {{ $t("cancel") }}
                </v-btn>
                <v-btn color="primary" text @click="save">
                  {{ $t("save") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
            <v-card :to="`/player-area/player-characters/${item.id}`" outlined>
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
import { Class } from "@/store/modules/class";
import { Race } from "@/store/modules/race";
import { localise, localiseItem } from "@/utils/localise";
import Vue from "vue";
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import PlayerCharacters from "./PlayerCharacters";

type Form = Vue & { validate: () => boolean };

@Component({
  name: "player-characters-as-player",
})
export default class PlayerCharactersAsPlayer extends PlayerCharacters {
  createDialog = false;
  createValid = false;
  startDatePicker = false;
  editedItem: Character = {
    name: "",
    level: { currentLevel: 1, currentExperience: 0 },
    playerCharacter: true,
  };

  get characters(): Character[] {
    return this.$store.getters["character/playerCharactersAsPlayer"];
  }

  get races(): Race[] {
    return localise(
      this.$store.getters["race/getPlayableRaces"],
      this.$i18n.locale
    );
  }

  get classes(): Class[] {
    return localise(this.$store.getters["class/list"], this.$i18n.locale);
  }

  save() {
    if ((this.$refs.create as Form).validate()) {
      this.createDialog = false;
      this.$store
        .dispatch("character/create", this.editedItem)
        .catch((error: GraphQLResult<Character>) => {
          this.messages = error.errors?.map(err => err.message) || [];
          this.notification = true;
        });
    }
  }

  mounted() {
    this.$store
      .dispatch("character/loadByOwner", this.$store.state.app.user.username)
      .catch((error: GraphQLResult<Character>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
  }

  created() {
    Promise.all([
      this.$store.dispatch("race/load"),
      this.$store.dispatch("class/load"),
    ]).catch((error: GraphQLResult<Character>) => {
      this.messages = error.errors?.map(err => err.message) || [];
      this.notification = true;
    });
  }
}
</script>

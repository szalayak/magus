<template>
  <character-list
    :characters="characters"
    :messages.sync="messages"
    :notification.sync="notification"
    :title="$t('my-characters')"
    :editable="true"
  >
    <template v-slot:toolbar-buttons>
      <v-dialog v-model="createDialog" persistent max-width="50%">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on" text>
            <v-icon>mdi-plus</v-icon>
            <div class="ml-2 d-none d-sm-flex">
              {{ $t("new-character") }}
            </div>
            <div class="ml-2 d-flex d-sm-none">{{ $t("new") }}</div>
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
                  <v-select
                    v-model="editedItem.dungeonMaster"
                    :label="$t('dungeon-master')"
                    :items="users"
                    item-value="username"
                    item-text="name"
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
    </template>
  </character-list>
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import { Class } from "@/store/modules/class";
import { Race } from "@/store/modules/race";
import { localise } from "@/utils/localise";
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CharacterList from "@/components/CharacterList.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { User } from "@/store";
import { Form } from "@/utils";

@Component({
  name: "player-characters-as-player",
  components: {
    "character-list": CharacterList,
  },
})
export default class PlayerCharactersAsPlayer extends TitleComponent {
  title = this.$t("my-characters");
  messages: string[] = [];
  notification = false;
  createDialog = false;
  createValid = false;
  startDatePicker = false;
  editedItem: Character = {
    name: "",
    level: { currentLevel: 1, currentExperience: 0 },
    playerCharacter: true,
  };

  get users(): User[] {
    return this.$store.getters["getUsers"];
  }

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

  created() {
    this.$store
      .dispatch("character/loadByOwner", this.$store.state.app.user.username)
      .catch((error: GraphQLResult<Character>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
    Promise.all([
      this.$store.dispatch("race/load"),
      this.$store.dispatch("class/load"),
    ]).catch((error: GraphQLResult<Character>) => {
      this.messages = error.errors?.map(err => err.message) || [];
      this.notification = true;
    });
    this.$store
      .dispatch("loadUsers")
      .then(() => this.$forceUpdate())
      .catch((error: GraphQLResult<unknown>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
  }
}
</script>

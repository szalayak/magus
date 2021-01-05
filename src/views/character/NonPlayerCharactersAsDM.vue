<template>
  <character-list
    :characters="characters"
    :messages="messages"
    :notification="notification"
    :title="$t('non-player-characters')"
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
              <v-row dense>
                <v-subheader class="pl-1">{{
                  $t("general-properties")
                }}</v-subheader>
              </v-row>
              <v-row dense>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    v-model="editedItem.name"
                    :label="$t('name')"
                    :rules="[v => !!v || $t('field-is-mandatory')]"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row dense>
                <v-subheader class="pl-1"
                  >{{ $t("race-and-class") }}
                </v-subheader>
              </v-row>
              <v-row dense>
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
              <v-row dense>
                <v-subheader class="pl-1">{{ $t("level") }}</v-subheader>
              </v-row>
              <v-row dense>
                <v-col cols="12" sm="12" md="6" lg="4">
                  <v-text-field
                    v-model.number="editedItem.level.currentLevel"
                    type="number"
                    :label="$t('current-level')"
                    :rules="[v => !!v || $t('field-is-mandatory')]"
                    required
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
import { Form } from "@/utils";

@Component({
  name: "non-player-characters-as-dm",
  components: {
    "character-list": CharacterList,
  },
})
export default class NonPlayerCharactersAsDM extends TitleComponent {
  title = this.$t("non-player-characters");
  messages: string[] = [];
  notification = false;
  createDialog = false;
  createValid = false;
  startDatePicker = false;
  editedItem: Character = {
    name: "",
    level: { currentLevel: 1 },
    playerCharacter: false,
  };

  get characters(): Character[] {
    return this.$store.getters["character/nonPlayerCharactersAsDM"];
  }

  get races(): Race[] {
    return localise(this.$store.getters["race/list"], this.$i18n.locale);
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
  }
}
</script>

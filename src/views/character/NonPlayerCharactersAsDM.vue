<template>
  <character-list
    :characters="characters"
    :messages="messages"
    :notification="notification"
    :title="$t('non-player-characters')"
  />
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import { Class } from "@/store/modules/class";
import { Race } from "@/store/modules/race";
import { localise } from "@/utils/localise";
import Vue from "vue";
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CharacterList from "./CharacterList.vue";

type Form = Vue & { validate: () => boolean };

@Component({
  name: "non-player-characters-as-dm",
  components: {
    "character-list": CharacterList,
  },
})
export default class NonPlayerCharactersAsDM extends Vue {
  createDialog = false;
  createValid = false;
  startDatePicker = false;
  editedItem: Character = {
    name: "",
    level: { currentLevel: 1, currentExperience: 0 },
    playerCharacter: true,
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

<template>
  <character-list
    :characters="characters"
    :messages="messages"
    :notification="notification"
    :title="$t('player-characters')"
  />
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Vue from "vue";
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CharacterList from "./CharacterList.vue";

@Component({
  name: "player-characters-as-dm",
  components: {
    "character-list": CharacterList,
  },
})
export default class PlayerCharactersAsDM extends Vue {
  messages: string[] = [];
  notification = false;

  get characters(): Character[] {
    return this.$store.getters["character/playerCharactersAsDM"];
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

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
import Component from "vue-class-component";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CharacterList from "@/components/CharacterList.vue";
import TitleComponent from "@/mixins/TitleComponent";

@Component({
  name: "player-characters-as-dm",
  components: {
    "character-list": CharacterList,
  },
})
export default class PlayerCharactersAsDM extends TitleComponent {
  title = this.$t("player-characters");
  messages: string[] = [];
  notification = false;

  get characters(): Character[] {
    return this.$store.getters["character/playerCharactersAsDM"];
  }

  created() {
    this.$store
      .dispatch(
        "character/loadByDungeonMaster",
        this.$store.state.app.user.username
      )
      .catch((error: GraphQLResult<Character>) => {
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

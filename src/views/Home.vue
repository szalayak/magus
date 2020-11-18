<template>
  <player-characters-as-player />
  <!-- <character-list
    :characters="characters"
    :messages="messages"
    :notification="notification"
    :title="$t('my-characters')"
  /> -->
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
// import { GraphQLResult } from "@aws-amplify/api-graphql";
// import CharacterList from "@/components/CharacterList.vue";
// import { Character } from "@/store/modules/character";
import TitleComponent from "@/mixins/TitleComponent";
import { mixins } from "vue-class-component";
import PlayerCharactersAsPlayer from "./character/PlayerCharactersAsPlayer.vue";

@Component({
  components: {
    // "character-list": CharacterList,
    "player-characters-as-player": PlayerCharactersAsPlayer,
  },
})
export default class Home extends mixins(TitleComponent) {
  // messages: string[] = [];
  // notification = false;
  title = this.$t("home");

  // get characters(): Character[] {
  //   return this.$store.getters["character/playerCharactersAsPlayer"];
  // }

  // created() {
  //   this.$store
  //     .dispatch("character/loadByOwner", this.$store.state.app.user.username)
  //     .catch((error: GraphQLResult<Character>) => {
  //       this.messages = error.errors?.map(err => err.message) || [];
  //       this.notification = true;
  //     });
  // }
}
</script>

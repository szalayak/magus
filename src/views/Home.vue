<template>
  <character-list
    :characters="characters"
    :messages="messages"
    :notification="notification"
    :title="$t('my-characters')"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import CharacterList from "@/views/character/CharacterList.vue";
import { Character } from "@/store/modules/character";

@Component({
  components: {
    "character-list": CharacterList,
  },
})
export default class Home extends Vue {
  messages: string[] = [];
  notification = false;

  get characters(): Character[] {
    return this.$store.getters["character/playerCharactersAsPlayer"];
  }

  mounted() {
    this.$store
      .dispatch("character/loadByOwner", this.$store.state.app.user.username)
      .catch((error: GraphQLResult<Character>) => {
        this.messages = error.errors?.map(err => err.message) || [];
        this.notification = true;
      });
  }
}
</script>

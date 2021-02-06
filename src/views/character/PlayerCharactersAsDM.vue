<template>
  <character-list
    :characters="characters"
    :messages.sync="messages"
    :notification.sync="notification"
    :title="$t('player-characters')"
    :loading="loading"
  />
</template>
<script lang="ts">
import { Character } from "@/store/modules/character";
import Component from "vue-class-component";
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
  loading = false;

  get characters(): Character[] {
    return this.$store.getters["character/playerCharactersAsDM"];
  }

  async refresh() {
    this.loading = true;
    try {
      await this.$store.dispatch(
        "character/loadByDungeonMaster",
        this.$store.state.app.user.username
      );
    } catch (error) {
      this.messages =
        error.errors?.map((err: { message: string }) => err.message) || [];
      this.notification = true;
    }
    try {
      await this.$store.dispatch("loadUsers");
      this.$forceUpdate();
    } catch (error) {
      this.messages =
        error.errors?.map((err: { message: string }) => err.message) || [];
      this.notification = true;
    }
    this.loading = false;
  }

  created() {
    this.refresh();
  }
}
</script>

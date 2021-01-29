<template>
  <player-characters-as-player />
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import TitleComponent from "@/mixins/TitleComponent";
import { mixins } from "vue-class-component";
import PlayerCharactersAsPlayer from "./character/PlayerCharactersAsPlayer.vue";

@Component({
  components: {
    "player-characters-as-player": PlayerCharactersAsPlayer,
  },
})
export default class NavigationDrawerHome extends mixins(TitleComponent) {
  title = this.$t("home");
}
</script>

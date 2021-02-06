<template>
  <page-template>
    <template v-slot:app-bar>
      <app-bar>
        <template v-slot:actions>
          <slot name="actions">
            <v-btn icon text :to="`${characterToLink()}/details`"
              ><v-icon>mdi-account-details</v-icon></v-btn
            >
            <v-btn icon text @click="refresh"
              ><v-icon>mdi-refresh</v-icon></v-btn
            >
          </slot>
        </template>
      </app-bar>
    </template>
    <vue-pull-refresh :on-refresh="refresh" :config="pullToRefreshConfig">
      <v-card flat>
        <v-card-text class="pt-1"> </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>
    </vue-pull-refresh>
  </page-template>
</template>
<script lang="ts">
import Component from "vue-class-component";
import VuePullRefresh from "vue-pull-refresh";
import PageTemplate from "@/components/PageTemplate.vue";
import CharacterPage from "./CharacterPage";
import { LooseObject } from "@/store";
import AppBar from "@/components/AppBar.vue";
import { characterToLink } from "@/utils";

@Component({
  name: "player-character",
  components: {
    "vue-pull-refresh": VuePullRefresh,
    PageTemplate,
    "app-bar": AppBar,
  },
})
export default class CharacterPageLayout extends CharacterPage {
  pullToRefreshConfig = {
    loadingLabel: this.$t("loading-indicator"),
    startLabel: this.$t("loading-indicator"),
    readyLabel: this.$t("pull-to-refresh"),
    errorLabel: this.$t("error"),
  };

  characterToLink() {
    return this.character ? characterToLink(this.character) : "";
  }

  async refresh() {
    try {
      // load character
      await this.$store.dispatch("character/loadItem", this.id);

      // set title
      this.$store.commit("setAppTitle", this.character?.name || "");
    } catch (error) {
      this.messages =
        typeof error === "string"
          ? [error]
          : error.errors?.map((err: LooseObject) => err.message) || [];
      this.notification = true;
    }
  }
}
</script>

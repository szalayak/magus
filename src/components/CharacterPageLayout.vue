<template>
  <page-template>
    <template v-slot:app-bar>
      <app-bar>
        <template v-slot:actions>
          <slot name="actions">
            <v-btn icon text :to="`${characterToLink(null, false)}`"
              ><v-icon>mdi-eye</v-icon></v-btn
            >
            <v-btn icon text @click="refresh"
              ><v-icon>mdi-refresh</v-icon></v-btn
            >
          </slot>
        </template>
      </app-bar>
    </template>
    <template v-slot:navbar-items="{}">
      <v-list-group :value="true">
        <template v-slot:activator>
          <v-list-item-title>{{ character.name }}</v-list-item-title>
        </template>
        <v-list-item
          :key="component.id"
          v-for="component in characterComponents"
          :to="characterToLink(component.id)"
        >
          <v-list-item-icon>
            <v-icon>{{ component.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t(component.title) }}
          </v-list-item-title>
        </v-list-item>
      </v-list-group>
    </template>
    <vue-pull-refresh :on-refresh="refresh" :config="pullToRefreshConfig">
      <v-card flat :loading="loading">
        <v-card-text class="pt-1">
          <v-alert
            :value="notification"
            dense
            outlined
            type="error"
            dismissible
            @input="$emit('update:notification', false)"
          >
            {{ messages }}
          </v-alert>
          <slot :character="character"></slot>
        </v-card-text>
      </v-card>
    </vue-pull-refresh>
  </page-template>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import VuePullRefresh from "vue-pull-refresh";
import { Character } from "@/store";
import { Prop } from "vue-property-decorator";
import PageTemplate from "./PageTemplate.vue";
import characterComponents from "@/utils/characterComponents";
import { characterToLink } from "@/utils";
import AppBar from "./AppBar.vue";

@Component({
  name: "player-character",
  components: {
    "vue-pull-refresh": VuePullRefresh,
    PageTemplate,
    "app-bar": AppBar,
  },
})
export default class CharacterPageLayout extends Vue {
  @Prop({ type: Object })
  character!: Character;

  @Prop({ type: Boolean })
  notification: boolean | undefined;

  @Prop({ type: Array })
  messages: string[] | undefined;

  @Prop({ type: Boolean })
  loading: boolean | undefined;

  get characterComponents() {
    return characterComponents(this.character);
  }

  pullToRefreshConfig = {
    loadingLabel: this.$t("loading-indicator"),
    startLabel: this.$t("loading-indicator"),
    readyLabel: this.$t("pull-to-refresh"),
    errorLabel: this.$t("error"),
  };

  characterToLink(selector?: string, details = true) {
    return characterToLink(this.character, selector, details);
  }

  refresh() {
    this.$emit("refresh");
  }
}
</script>

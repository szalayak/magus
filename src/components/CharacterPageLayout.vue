<template>
  <page-template>
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
      <v-card flat>
        <v-card-text class="pt-1">
          <slot :character="character"></slot>
          <v-snackbar
            v-for="message in messages"
            :value="notification"
            :key="message"
            @input="$emit('update:notification', $event)"
          >
            {{ message }}

            <template v-slot:action="{ attrs }">
              <v-btn text v-bind="attrs" @click="notification = false">
                {{ $t("close") }}
              </v-btn>
            </template>
          </v-snackbar>
        </v-card-text>
        <v-card-actions>
          <v-bottom-navigation v-if="$vuetify.breakpoint.smAndDown" app>
            <v-btn @click="nav = true">
              <span>{{ $t("navigate-to") }}</span>
              <v-icon>mdi-share</v-icon>
            </v-btn></v-bottom-navigation
          >
          <v-bottom-sheet v-model="nav">
            <v-list>
              <v-subheader>{{ $t("navigate-to") }}</v-subheader>
              <v-list-item
                :key="`${component.id}-bottom`"
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
            </v-list>
          </v-bottom-sheet>
        </v-card-actions>
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

@Component({
  name: "player-character",
  components: {
    "vue-pull-refresh": VuePullRefresh,
    PageTemplate,
  },
})
export default class CharacterPageLayout extends Vue {
  @Prop({ type: Object })
  character!: Character;

  @Prop({ type: Boolean })
  notification: boolean | undefined;

  @Prop({ type: Array })
  messages: string[] | undefined;

  get page() {
    return this.$route.params.page ? parseInt(this.$route.params.page) : 0;
  }

  set page(page) {
    if (page !== undefined) {
      this.$router.push({
        name: this.$route.name || undefined,
        params: { ...this.$route.params, page: page.toString() },
      });
    }
  }

  get characterComponents() {
    return characterComponents(this.character);
  }

  nav = false;

  pullToRefreshConfig = {
    loadingLabel: this.$t("loading-indicator"),
    startLabel: this.$t("loading-indicator"),
    readyLabel: this.$t("pull-to-refresh"),
    errorLabel: this.$t("error"),
  };

  characterToLink(selector?: string) {
    return characterToLink(this.character, selector);
  }

  refresh() {
    this.$emit("refresh");
  }
}
</script>

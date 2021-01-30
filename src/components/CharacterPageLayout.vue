<template>
  <page-template>
    <template v-slot:navbar-items="{}">
      <v-subheader>{{ character.name }}</v-subheader>
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
    </template>
    <vue-pull-refresh
      v-if="character"
      :on-refresh="refresh"
      :config="pullToRefreshConfig"
    >
      <v-card flat>
        <v-hover v-slot="{ hover }">
          <v-toolbar v-if="$vuetify.breakpoint.mdAndUp" flat>
            <v-card-title class="pl-1">{{ character.name }}</v-card-title>
            <v-btn v-show="hover" text icon @click="refresh"
              ><v-icon>mdi-refresh</v-icon></v-btn
            >
            <v-spacer />
            <v-btn-toggle dense tile color="primary" group v-model="page">
              <slot name="pages-top" :character="character">
                <v-btn><v-icon>mdi-eye</v-icon></v-btn>
                <v-btn>1</v-btn>
                <v-btn>2</v-btn>
                <v-btn>3</v-btn>
                <v-btn>4</v-btn>
              </slot>
            </v-btn-toggle>
          </v-toolbar>
        </v-hover>
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
          <v-bottom-navigation
            v-if="$vuetify.breakpoint.smAndDown"
            app
            v-model="page"
            color="primary"
            fixed
          >
            <slot name="pages-top" :character="character">
              <v-btn><span></span><v-icon>mdi-eye</v-icon></v-btn>
              <v-btn><span>1</span></v-btn>
              <v-btn><span>2</span></v-btn>
              <v-btn><span>3</span></v-btn>
              <v-btn><span>4</span></v-btn>
            </slot>
          </v-bottom-navigation>
        </v-card-actions>
      </v-card>
    </vue-pull-refresh>
    <skeleton-cards v-else :count="12" />
  </page-template>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import VuePullRefresh from "vue-pull-refresh";
import SkeletonCards from "@/components/SkeletonCards.vue";
import { Character } from "@/store";
import { Prop } from "vue-property-decorator";
import PageTemplate from "./PageTemplate.vue";
import characterComponents from "@/utils/characterComponents";
import { characterToLink } from "@/utils";

@Component({
  name: "player-character",
  components: {
    "vue-pull-refresh": VuePullRefresh,
    "skeleton-cards": SkeletonCards,
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
    return characterComponents;
  }

  pullToRefreshConfig = {
    loadingLabel: this.$t("loading-indicator"),
    startLabel: this.$t("loading-indicator"),
    readyLabel: this.$t("pull-to-refresh"),
    errorLabel: this.$t("error"),
  };

  characterToLink(selector?: string) {
    return characterToLink(this.character, 1, selector);
  }

  refresh() {
    this.$emit("refresh");
  }
}
</script>

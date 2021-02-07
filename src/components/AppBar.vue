<template>
  <v-app-bar clipped-left app elevate-on-scroll color="background">
    <v-app-bar-nav-icon
      v-if="isLoggedIn"
      @click="$store.commit('toggleNavDrawer')"
    ></v-app-bar-nav-icon>

    <v-avatar width="32px" height="32px" tile>
      <img :src="require('@/assets/favicon-32x32.png')" alt="logo" />
    </v-avatar>

    <v-toolbar-title
      ><slot name="title">{{ title }}</slot></v-toolbar-title
    >

    <v-spacer></v-spacer>
    <slot name="actions"></slot>
    <template v-if="!hideDefaultActions">
      <throw-dice v-if="isLoggedIn" />
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapState } from "vuex";
import { Component } from "vue-property-decorator";
import ThrowDice from "./ThrowDice.vue";

@Component({
  name: "app-bar",
  props: {
    hideDefaultActions: { type: Boolean, default: false },
  },
  components: {
    "throw-dice": ThrowDice,
  },
  computed: { ...mapState(["app"]), ...mapGetters(["isLoggedIn", "title"]) },
})
export default class AppBar extends Vue {}
</script>

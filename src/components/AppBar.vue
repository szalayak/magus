<template>
  <v-app-bar clipped-left app elevate-on-scroll :color="color">
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
      <v-menu offset-y v-if="isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon text v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>{{
              app.user.attributes.name
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$store.dispatch('logout')">
            <v-list-item-title>{{ $t("sign-out") }}</v-list-item-title>
          </v-list-item>
          <user-attributes />
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapState } from "vuex";
import UserAttributes from "@/components/UserAttributes.vue";
import { Component } from "vue-property-decorator";
import ThrowDice from "./ThrowDice.vue";

@Component({
  name: "app-bar",
  props: {
    hideDefaultActions: { type: Boolean, default: false },
  },
  components: {
    "user-attributes": UserAttributes,
    "throw-dice": ThrowDice,
  },
  computed: { ...mapState(["app"]), ...mapGetters(["isLoggedIn", "title"]) },
})
export default class AppBar extends Vue {
  get color() {
    return this.$vuetify.theme.dark ? "#1E1E1E" : "white";
  }
}
</script>

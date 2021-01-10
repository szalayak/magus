<template>
  <v-app-bar clipped-left app color="primary" dark>
    <v-app-bar-nav-icon
      v-if="isLoggedIn"
      @click="$store.commit('toggleNavDrawer')"
    ></v-app-bar-nav-icon>

    <v-avatar width="32px" height="32px" tile>
      <img :src="require('@/assets/favicon-32x32.png')" alt="logo" />
    </v-avatar>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <throw-dice v-if="isLoggedIn" />
    <v-menu offset-y v-if="isLoggedIn">
      <template v-slot:activator="{ on, attrs }">
        <v-btn :icon="$vuetify.breakpoint.xs" text v-bind="attrs" v-on="on">
          <div class="d-none d-sm-flex">{{ app.user.attributes.name }}</div>
          <v-icon class="ml-sm-2">mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item class="d-flex d-sm-none">
          <v-list-item-title>{{ app.user.attributes.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$store.dispatch('logout')">
          <v-list-item-title>{{ $t("sign-out") }}</v-list-item-title>
        </v-list-item>
        <user-attributes />
      </v-list>
    </v-menu>
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
  components: {
    "user-attributes": UserAttributes,
    "throw-dice": ThrowDice,
  },
  computed: { ...mapState(["app"]), ...mapGetters(["isLoggedIn", "title"]) },
})
export default class AppBar extends Vue {}
</script>

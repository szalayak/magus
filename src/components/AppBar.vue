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
    <v-menu offset-y v-if="isLoggedIn && $vuetify.breakpoint.mdAndUp">
      <template v-slot:activator="{ on, attrs }">
        <v-btn :icon="$vuetify.breakpoint.xs" text v-bind="attrs" v-on="on"
          ><div class="d-none d-sm-flex">{{ $t("throw-dice") }}</div>
          <v-icon class="ml-sm-2">mdi-dice-5</v-icon></v-btn
        >
      </template>
      <v-list>
        <v-list-item
          v-for="diceObject in dice()"
          :key="diceObject.id"
          @click="doThrow(diceObject)"
        >
          <v-list-item-title>{{ diceObject.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog
      v-model="diceDialog"
      v-if="isLoggedIn && $vuetify.breakpoint.smAndDown"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn :icon="$vuetify.breakpoint.xs" text v-bind="attrs" v-on="on"
          ><div class="d-none d-sm-flex">{{ $t("throw-dice") }}</div>
          <v-icon class="ml-sm-2">mdi-dice-5</v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-text class="pb-0">
          <v-list>
            <v-list-item
              v-for="diceObject in dice()"
              :key="diceObject.id"
              @click="doThrow(diceObject)"
            >
              <v-list-item-title>{{ diceObject.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
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
    <v-snackbar v-model="throwResultNotification" timeout="-1">
      {{ $t("result") }}: {{ throwResult }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="throwResultNotification = false">
          {{ $t("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapState } from "vuex";
import { DiceObject, getDice, throwDice } from "@/utils";
import UserAttributes from "@/components/UserAttributes.vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "app-bar",
  components: {
    "user-attributes": UserAttributes,
  },
  computed: { ...mapState(["app"]), ...mapGetters(["isLoggedIn", "title"]) },
})
export default class AppBar extends Vue {
  throwResult = 0;
  throwResultNotification = false;
  diceDialog = false;

  doThrow(diceObject: DiceObject) {
    this.throwResult = throwDice(diceObject.id);
    this.throwResultNotification = true;
    this.diceDialog = false;
  }
  dice() {
    return getDice(this.$i18n);
  }
}
</script>

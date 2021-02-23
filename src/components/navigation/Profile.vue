<template>
  <v-list-group :value="open" @click="open = !open">
    <template v-slot:activator>
      <v-list-item-title>{{ $t("profile") }}</v-list-item-title>
    </template>
    <v-list-item to="/profile">
      <v-list-item-icon>
        <v-icon>mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ app.user.attributes.name }}
      </v-list-item-title>
    </v-list-item>
    <v-list-item @click="$store.dispatch('logout')">
      <v-list-item-icon>
        <v-icon>mdi-logout</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t("sign-out") }}
      </v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "profile",
  data: () => ({
    open: true,
  }),
  computed: { ...mapState(["app"]) },
});
</script>

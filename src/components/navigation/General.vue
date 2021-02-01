<template>
  <v-list-group :value="open" @click="open = !open">
    <template v-slot:activator>
      <v-list-item-title>{{ $t("general") }}</v-list-item-title>
    </template>
    <v-list-item to="/">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t("home") }}
      </v-list-item-title>
    </v-list-item>
    <v-list-item to="/about">
      <v-list-item-icon>
        <v-icon>mdi-information</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t("about") }}
      </v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "general",
  data: () => ({
    open: true,
  }),
});
</script>

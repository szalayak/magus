<template>
  <v-list-group :value="open" @click="open = !open">
    <template v-slot:activator>
      <v-list-item-title class="pl-0">{{
        $t("encyclopedia")
      }}</v-list-item-title>
    </template>
    <v-list-item
      v-for="adminRoute in adminRoutes"
      :key="adminRoute.name"
      :to="adminRoute.path"
    >
      <v-list-item-icon>
        <v-icon>{{ adminRoute.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ $t(adminRoute.title) }}
      </v-list-item-title>
    </v-list-item>
  </v-list-group>
</template>
<script lang="ts">
import Vue from "vue";
import { adminRoutes } from "@/router/admin";
export default Vue.extend({
  name: "encyclopedia",
  data: () => ({
    adminRoutes,
    open: false,
  }),
});
</script>

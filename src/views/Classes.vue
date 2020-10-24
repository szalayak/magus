<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <class-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ClassAdmin from "@/components/admin/ClassAdmin.vue";

@Component({
  name: "classes",
  components: {
    "class-admin": ClassAdmin,
  },
})
export default class Classes extends Vue {}
</script>

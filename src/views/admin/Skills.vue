<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <skill-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import SkillAdmin from "@/components/admin/SkillAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "skills",
  components: {
    "skill-admin": SkillAdmin,
  },
})
export default class Skills extends Vue {}
</script>

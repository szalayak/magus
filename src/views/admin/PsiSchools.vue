<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <psi-school-admin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import PsiSchoolAdmin from "@/components/admin/PsiSchoolAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "psi-schools",
  components: {
    "psi-school-admin": PsiSchoolAdmin,
  },
})
export default class PsiSchools extends Vue {}
</script>

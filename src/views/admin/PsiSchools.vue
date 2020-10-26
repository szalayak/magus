<template>
  <psi-school-admin />
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

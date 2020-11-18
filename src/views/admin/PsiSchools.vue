<template>
  <psi-school-admin />
</template>

<script lang="ts">
import PsiSchoolAdmin from "@/components/admin/PsiSchoolAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { Component } from "vue-property-decorator";

@Component({
  name: "psi-schools",
  components: {
    "psi-school-admin": PsiSchoolAdmin,
  },
})
export default class PsiSchools extends TitleComponent {
  title = this.$t("psi-schools");
}
</script>

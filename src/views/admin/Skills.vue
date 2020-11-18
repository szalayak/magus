<template>
  <skill-admin />
</template>

<script lang="ts">
import SkillAdmin from "@/components/admin/SkillAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { Component } from "vue-property-decorator";

@Component({
  name: "skills",
  components: {
    "skill-admin": SkillAdmin,
  },
})
export default class Skills extends TitleComponent {
  title = this.$t("skills");
}
</script>

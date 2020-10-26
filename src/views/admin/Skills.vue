<template>
  <skill-admin />
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

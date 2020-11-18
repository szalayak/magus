<template>
  <class-admin />
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import ClassAdmin from "@/components/admin/ClassAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";

@Component({
  name: "classes",
  components: {
    "class-admin": ClassAdmin,
  },
})
export default class Classes extends TitleComponent {
  title = this.$t("classes");
}
</script>

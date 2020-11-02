<template>
  <class-admin />
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

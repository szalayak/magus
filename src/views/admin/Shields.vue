<template>
  <shield-admin />
</template>

<script lang="ts">
import ShieldAdmin from "@/components/admin/ShieldAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "shields",
  components: {
    "shield-admin": ShieldAdmin,
  },
})
export default class Shields extends Vue {}
</script>

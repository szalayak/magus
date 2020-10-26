<template>
  <magical-item-admin />
</template>

<script lang="ts">
import MagicalItemAdmin from "@/components/admin/MagicalItemAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "magical-items",
  components: {
    "magical-item-admin": MagicalItemAdmin,
  },
})
export default class MagicalItems extends Vue {}
</script>

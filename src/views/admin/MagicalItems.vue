<template>
  <magical-item-admin />
</template>

<script lang="ts">
import MagicalItemAdmin from "@/components/admin/MagicalItemAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { Component } from "vue-property-decorator";

@Component({
  name: "magical-items",
  components: {
    "magical-item-admin": MagicalItemAdmin,
  },
})
export default class MagicalItems extends TitleComponent {
  title = this.$t("magical-items");
}
</script>

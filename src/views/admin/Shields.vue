<template>
  <shield-admin />
</template>

<script lang="ts">
import ShieldAdmin from "@/components/admin/ShieldAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { Component } from "vue-property-decorator";

@Component({
  name: "shields",
  components: {
    "shield-admin": ShieldAdmin,
  },
})
export default class Shields extends TitleComponent {
  title = this.$t("shields");
}
</script>

<template>
  <armour-admin />
</template>

<script lang="ts">
import ArmourAdmin from "@/components/admin/ArmourAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { Component } from "vue-property-decorator";

@Component({
  name: "armours",
  components: {
    "armour-admin": ArmourAdmin,
  },
})
export default class Armours extends TitleComponent {
  title = this.$t("armours");
}
</script>

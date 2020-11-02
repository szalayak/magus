<template>
  <armour-admin />
</template>

<script lang="ts">
import ArmourAdmin from "@/components/admin/ArmourAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "armours",
  components: {
    "armour-admin": ArmourAdmin,
  },
})
export default class Armours extends Vue {}
</script>

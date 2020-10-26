<template>
  <weapon-admin />
</template>

<script lang="ts">
import WeaponAdmin from "@/components/admin/WeaponAdmin.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "weapons",
  components: {
    "weapon-admin": WeaponAdmin,
  },
})
export default class Weapons extends Vue {}
</script>

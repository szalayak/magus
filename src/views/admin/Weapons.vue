<template>
  <weapon-admin />
</template>

<script lang="ts">
import WeaponAdmin from "@/components/admin/WeaponAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { Component } from "vue-property-decorator";

@Component({
  name: "weapons",
  components: {
    "weapon-admin": WeaponAdmin,
  },
})
export default class Weapons extends TitleComponent {
  title = this.$t("weapons");
}
</script>

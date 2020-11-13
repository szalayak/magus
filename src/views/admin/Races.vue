<template>
  <race-admin />
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import RaceAdmin from "@/components/admin/RaceAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";

@Component({
  name: "races",
  components: {
    "race-admin": RaceAdmin,
  },
})
export default class Races extends TitleComponent {
  get title() {
    return this.$t("races");
  }
}
</script>

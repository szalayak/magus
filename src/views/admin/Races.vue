<template>
  <race-admin />
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import RaceAdmin from "@/components/admin/RaceAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";
import { TranslateResult } from "vue-i18n";

@Component({
  name: "races",
  components: {
    "race-admin": RaceAdmin,
  },
})
export default class Races extends TitleComponent {
  get title(): TranslateResult | undefined {
    return this.$t("races");
  }
}
</script>

<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center" align-content="center">
      <v-btn href="https://github.com/szalayak/magus/issues" color="primary">{{
        $t("report-bug")
      }}</v-btn>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import TitleComponent from "@/mixins/TitleComponent";
import Component from "vue-class-component";
@Component
export default class About extends TitleComponent {
  title = this.$t("about");
}
</script>

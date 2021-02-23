<template>
  <page-template>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" align-content="center">
        <v-btn
          href="https://github.com/szalayak/magus/issues"
          color="primary"
          >{{ $t("report-bug") }}</v-btn
        >
      </v-row>
    </v-container>
  </page-template>
</template>
<script lang="ts">
import PageTemplate from "@/components/PageTemplate.vue";
import TitleComponent from "@/mixins/TitleComponent";
import Component from "vue-class-component";
@Component({
  components: {
    "page-template": PageTemplate,
  },
})
export default class About extends TitleComponent {
  title = this.$t("about");
}
</script>

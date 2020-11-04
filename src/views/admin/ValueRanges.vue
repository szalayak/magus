<template>
  <value-range-admin />
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import ValueRangeAdmin from "@/components/admin/ValueRangeAdmin.vue";
import TitleComponent from "@/mixins/TitleComponent";

@Component({
  name: "races",
  components: {
    "value-range-admin": ValueRangeAdmin,
  },
})
export default class ValueRanges extends TitleComponent {
  title = this.$t("value-ranges");
}
</script>

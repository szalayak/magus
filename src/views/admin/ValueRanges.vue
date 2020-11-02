<template>
  <value-range-admin />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ValueRangeAdmin from "@/components/admin/ValueRangeAdmin.vue";

@Component({
  name: "races",
  components: {
    "value-range-admin": ValueRangeAdmin,
  },
})
export default class ValueRanges extends Vue {}
</script>

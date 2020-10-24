<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <value-range-admin />
      </v-col>
    </v-row>
  </v-container>
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

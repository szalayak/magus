<template>
  <div>
    <div class="text-caption">{{ caption }}</div>
    <div class="text-h4">{{ value }}</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "quick-view-output-field",
  props: ["caption", "value"],
});
</script>

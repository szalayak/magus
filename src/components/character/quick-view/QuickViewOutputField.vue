<template>
  <div>
    <div :class="[`text-caption`, clickable && `pointer`]">
      {{ caption }}
    </div>
    <div :class="[`text-h4`, clickable && `pointer`]">{{ value }}</div>
  </div>
</template>
<style>
.pointer {
  cursor: pointer;
}
</style>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "quick-view-output-field",
  props: ["caption", "value", "clickable"],
});
</script>

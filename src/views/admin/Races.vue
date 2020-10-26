<template>
  <race-admin />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RaceAdmin from "@/components/admin/RaceAdmin.vue";

@Component({
  name: "races",
  components: {
    "race-admin": RaceAdmin,
  },
})
export default class Races extends Vue {}
</script>

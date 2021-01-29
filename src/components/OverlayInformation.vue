<template>
  <v-overlay :value="active">
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" align-self="center">
          <v-row align="center" justify="center">
            <h1 class="text-h1" color="white">{{ text }}</h1>
          </v-row>
        </v-col>
        <v-col cols="12" align-self="center">
          <v-row align="center" justify="center">
            <v-btn icon text @click="$emit('close')"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-overlay>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "overlay-information",
  props: {
    active: Boolean,
    text: String,
  },
});
</script>

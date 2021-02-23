<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <amplify-authenticator
        ><amplify-sign-in slot="sign-in" hide-sign-up
      /></amplify-authenticator>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "sign-in",
});
</script>

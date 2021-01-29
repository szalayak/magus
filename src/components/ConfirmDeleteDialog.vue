<template>
  <v-dialog :value="open" max-width="500px" @input="$emit('update:open')">
    <v-card>
      <v-card-title class="headline">{{
        $t("confirm-delete-message")
      }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="$emit('cancel')">{{
          $t("cancel")
        }}</v-btn>
        <v-btn color="primary" text @click="$emit('confirm')">{{
          $t("ok")
        }}</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({ name: "confirm-delete-dialog" })
export default class ConfirmDeleteDialog extends Vue {
  @Prop({ type: Boolean })
  open: boolean | undefined;
}
</script>

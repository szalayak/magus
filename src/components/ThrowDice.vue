<template>
  <v-menu offset-y v-if="$vuetify.breakpoint.mdAndUp">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon text v-bind="attrs" v-on="on">
        <v-icon>mdi-dice-5</v-icon></v-btn
      >
    </template>
    <v-list>
      <v-list-item
        v-for="diceObject in dice()"
        :key="diceObject.id"
        @click="doThrow(diceObject)"
      >
        <v-list-item-title>{{ diceObject.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <v-dialog v-model="diceDialog" v-else @click:outside="closeDialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn :icon="$vuetify.breakpoint.xs" text v-bind="attrs" v-on="on"
        ><div class="d-none d-sm-flex">{{ $t("throw-dice") }}</div>
        <v-icon class="ml-sm-2">mdi-dice-5</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-card-title v-if="!throwResultNotification">{{
        $t("throw-dice")
      }}</v-card-title>
      <v-card-title v-if="throwResultNotification"
        >{{ $t("result") }}: {{ throwResult }}</v-card-title
      >
      <v-card-text v-if="!throwResultNotification" class="pb-0">
        <v-list>
          <v-list-item
            v-for="diceObject in dice()"
            :key="diceObject.id"
            @click="doThrow(diceObject)"
          >
            <v-list-item-title>{{ diceObject.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions v-if="throwResultNotification">
        <v-spacer />
        <v-btn text color="primary" @click="closeDialog">{{
          $t("close")
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { DiceObject, getDice, throwDice } from "@/utils";
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";
@Component({
  name: "throw-dice",
  computed: { ...mapGetters(["throwResult", "throwResultNotification"]) },
})
export default class ThrowDice extends Vue {
  diceDialog = false;

  closeDialog(): void {
    this.diceDialog = false;
    this.$store.commit("setThrowResult", { throwResultNotification: false });
  }

  doThrow(diceObject: DiceObject): void {
    this.$store.commit("setThrowResult", {
      throwResultNotification: true,
      throwResult: throwDice(diceObject.id),
    });
  }
  dice(): DiceObject[] {
    return getDice(this.$i18n);
  }
}
</script>

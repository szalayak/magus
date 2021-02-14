<template>
  <v-card flat :loading="loading">
    <v-app-bar dense flat color="transparent">
      <v-toolbar-title class="text-h6">{{ $t("wallet") }}</v-toolbar-title>
    </v-app-bar>
    <v-card-text class="pt-0">
      <v-alert
        :value="error"
        dense
        outlined
        type="error"
        dismissible
        @input="dismissError"
      >
        {{ messages }}
      </v-alert>
      <v-row dense>
        <v-col cols="4">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="gold"
            :title="$t('gold')"
            @save="gold = $event"
          >
            <quick-view-output-field :caption="$t('gold')" :value="gold" />
          </quick-update-property-field>
          <quick-view-output-field :caption="$t('gold')" :value="gold" v-else />
        </v-col>
        <v-col cols="4">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="silver"
            :title="$t('silver')"
            @save="silver = $event"
          >
            <quick-view-output-field :caption="$t('silver')" :value="silver" />
          </quick-update-property-field>
          <quick-view-output-field
            :caption="$t('silver')"
            :value="silver"
            v-else
          />
        </v-col>
        <v-col cols="4">
          <quick-update-property-field
            v-if="isCurrentUser"
            :value="copper"
            :title="$t('copper')"
            @save="copper = $event"
          >
            <quick-view-output-field :caption="$t('copper')" :value="copper" />
          </quick-update-property-field>
          <quick-view-output-field
            :caption="$t('copper')"
            :value="copper"
            v-else
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Wallet } from "@/store";
import { convertFromCopper, convertToCopper } from "@/utils";
import Component from "vue-class-component";
import CharacterQuickView from "../CharacterQuickView";
import QuickViewOutputField from "./QuickViewOutputField.vue";
import QuickUpdatePropertyField from "../QuickUpdatePropertyField.vue";

const copyWallet = (wallet?: Wallet): Wallet => ({
  money: wallet?.money,
  mithrill: wallet?.mithrill,
  gemstones: wallet?.gemstones,
  misc: wallet?.misc,
});

@Component({
  components: { QuickUpdatePropertyField, QuickViewOutputField },
  name: "wallet-quick-view",
})
export default class WalletQuickView extends CharacterQuickView {
  wallet = copyWallet(this.character.wallet);

  get currency() {
    return convertFromCopper(this.wallet.money || 0);
  }

  get gold() {
    return this.currency.gold;
  }
  set gold(gold: number) {
    const currency = this.currency;
    currency.gold = gold;
    this.wallet.money = convertToCopper(currency);
    this.save();
  }

  get silver() {
    return this.currency.silver;
  }

  set silver(silver: number) {
    const currency = this.currency;
    currency.silver = silver;
    this.wallet.money = convertToCopper(currency);
    this.save();
  }

  get copper() {
    return this.currency.copper;
  }

  set copper(copper: number) {
    const currency = this.currency;
    currency.copper = copper;
    this.wallet.money = convertToCopper(currency);
    this.save();
  }

  async save() {
    this.loading = true;
    try {
      await this.$store.dispatch(`character/update`, {
        id: this.character.id,
        wallet: this.wallet,
      });
    } catch (error) {
      this.throwError(error);
    }
    this.loading = false;
  }

  cancel() {
    this.wallet = copyWallet(this.wallet);
  }
}
</script>

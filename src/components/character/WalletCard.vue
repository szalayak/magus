<template>
  <character-info-card :id="id" :editable="editable" :title="$t('wallet')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-text-field
            v-model.number="gold"
            type="number"
            :label="$t('gold')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-text-field
            v-model.number="silver"
            type="number"
            :label="$t('silver')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-text-field
            v-model.number="copper"
            type="number"
            :label="$t('copper')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-text-field
            v-model="wallet.mithrill"
            :label="$t('mithril')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-text-field
            v-model="wallet.gemstones"
            :label="$t('gemstones')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-text-field
            v-model.number="wallet.other"
            :label="$t('other')"
            :disabled="!edit"
          />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import { Wallet } from "@/store/types";
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { convertFromCopper, convertToCopper } from "@/utils/price";

@Component({
  name: "wallet",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class WalletCard extends CharacterInfo {
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
  }

  get silver() {
    return this.currency.silver;
  }

  set silver(silver: number) {
    const currency = this.currency;
    currency.silver = silver;
    this.wallet.money = convertToCopper(currency);
  }

  get copper() {
    return this.currency.copper;
  }

  set copper(copper: number) {
    const currency = this.currency;
    currency.copper = copper;
    this.wallet.money = convertToCopper(currency);
  }

  get wallet() {
    if (!this.character.wallet) this.character.wallet = {};
    return this.character.wallet || {};
  }

  set wallet(wallet: Wallet) {
    if (this.character.wallet) Object.assign(this.character.wallet, wallet);
    else this.character.wallet = wallet;
  }
}
</script>

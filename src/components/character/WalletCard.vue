<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('wallet')"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="4">
          <v-text-field
            v-model.number="gold"
            type="number"
            :label="$t('gold')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model.number="silver"
            type="number"
            :label="$t('silver')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model.number="copper"
            type="number"
            :label="$t('copper')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="wallet.mithrill"
            :label="$t('mithril')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="wallet.gemstones"
            :label="$t('gemstones')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="wallet.misc"
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
import { convertFromCopper, convertToCopper, Currency } from "@/utils/price";

const copyWallet = (wallet?: Wallet): Wallet => ({
  money: wallet?.money,
  mithrill: wallet?.mithrill,
  gemstones: wallet?.gemstones,
  misc: wallet?.misc,
});

@Component({
  name: "wallet",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class WalletCard extends CharacterInfo {
  wallet = copyWallet(this.character.wallet);

  get currency(): Currency {
    return convertFromCopper(this.wallet.money || 0);
  }

  get gold(): number {
    return this.currency.gold;
  }
  set gold(gold: number) {
    const currency = this.currency;
    currency.gold = gold;
    this.wallet.money = convertToCopper(currency);
  }

  get silver(): number {
    return this.currency.silver;
  }

  set silver(silver: number) {
    const currency = this.currency;
    currency.silver = silver;
    this.wallet.money = convertToCopper(currency);
  }

  get copper(): number {
    return this.currency.copper;
  }

  set copper(copper: number) {
    const currency = this.currency;
    currency.copper = copper;
    this.wallet.money = convertToCopper(currency);
  }

  save(): void {
    this.update({ id: this.character.id, wallet: this.wallet });
  }

  cancel(): void {
    this.wallet = copyWallet(this.wallet);
  }
}
</script>

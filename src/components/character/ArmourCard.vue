<template>
  <character-info-card :id="id" :editable="editable" :title="$t('armour')">
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="12">
          <v-select
            v-model="armour"
            :items="armours"
            item-text="description.title"
            item-value="id"
            :label="$t('armour')"
            return-object
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            :label="$t('mpv')"
            :value="armour.movementPreventionValue"
            disabled
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            :label="$t('drv')"
            :value="armour.damageReductionValue"
            disabled
          />
        </v-col>
        <v-col cols="12">
          <v-text-field :label="$t('weight')" :value="armour.weight" disabled />
        </v-col>
        <v-col cols="12">
          <v-text-field :label="$t('price')" :value="price(armour)" disabled />
        </v-col>
      </v-row>
    </template>
  </character-info-card>
</template>
<script lang="ts">
import CharacterInfo from "./CharacterInfo";
import Component from "vue-class-component";
import CharacterInfoCard from "./CharacterInfoCard.vue";
import { Armour } from "@/store/modules/armour";
import { localise } from "@/utils/localise";
import { getPriceString } from "@/utils/price";

@Component({
  name: "armour-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class ArmourCard extends CharacterInfo {
  price(armour: Armour) {
    return getPriceString(armour.price || 0, this.$i18n);
  }

  get armours(): Armour[] {
    return localise(
      this.$store.getters["armour/list"],
      this.$i18n.locale
    ) as Armour[];
  }
  get armour(): Armour {
    if (!this.character.armour) this.character.armour = {};
    return this.character.armour || {};
  }

  set armour(armour: Armour) {
    Object.assign(this.character.armour, armour);
  }
}
</script>

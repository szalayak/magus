<template>
  <character-info-card
    :id="id"
    :editable="editable"
    :title="$t('armour')"
    :error.sync="error"
    :messages="messages"
    :edit.sync="edit"
    @save="save"
    @cancel="cancel"
  >
    <template v-slot:fields="{ edit }">
      <v-row dense>
        <v-col cols="6">
          <v-select
            v-model="armourData.armour"
            :items="armours"
            item-text="description.title"
            item-value="id"
            :label="$t('armour')"
            return-object
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="armourData.armourMastery"
            :items="masteryLevels"
            :label="$t('mastery')"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('mpv')"
            :value="armourData.armour.movementPreventionValue"
            disabled
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('drv')"
            :value="armourData.armour.damageReductionValue"
            disabled
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            :label="$t('current-drv')"
            v-model="armourData.armourCurrentDamageReductionValue"
            :disabled="!edit"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            :label="$t('weight')"
            :value="armourData.armour.weight"
            disabled
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            :label="$t('price')"
            :value="price(armourData.armour)"
            disabled
          />
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="armourData.armourActive"
            :label="$t('armour-active')"
            :disabled="!edit"
          />
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
import { getPriceString } from "@/utils/price";
import { Character } from "@/store";

type ArmourData = Pick<
  Character,
  | "armour"
  | "armourMastery"
  | "armourActive"
  | "armourCurrentDamageReductionValue"
>;

const copyArmourData = (armourData: ArmourData): ArmourData => ({
  armour: {
    id: armourData.armour?.id,
    descriptions: armourData.armour?.descriptions,
    description: armourData.armour?.description,
    weight: armourData.armour?.weight,
    movementPreventionValue: armourData.armour?.movementPreventionValue,
    damageReductionValue: armourData.armour?.damageReductionValue,
    price: armourData.armour?.price,
  },
  armourMastery: armourData.armourMastery,
  armourActive: armourData.armourActive,
  armourCurrentDamageReductionValue:
    armourData.armourCurrentDamageReductionValue,
});

@Component({
  name: "armour-card",
  components: {
    "character-info-card": CharacterInfoCard,
  },
})
export default class ArmourCard extends CharacterInfo {
  armourData = copyArmourData(this.character);

  price(armour: Armour) {
    return getPriceString(armour.price);
  }

  get armours(): Armour[] {
    return [
      {
        id: null,
        description: {
          title: this.$t("none"),
        },
      },
      ...this.$store.getters["armour/list"],
    ] as Armour[];
  }

  save() {
    this.update({ id: this.character.id, ...this.armourData });
  }

  cancel() {
    this.armourData = copyArmourData(this.character);
  }
}
</script>

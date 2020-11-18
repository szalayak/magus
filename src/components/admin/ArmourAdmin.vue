<template>
  <admin-table
    :defaultItem="defaultItem"
    module="armour"
    :headers="headers"
    newText="new-armour"
    editText="edit-armour"
    title="armours"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <v-text-field
            v-model.number="editedItem.movementPreventionValue"
            type="number"
            :label="$t('movement-prevention-value')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <v-text-field
            v-model.number="editedItem.damageReductionValue"
            type="number"
            :label="$t('damage-reduction-value')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <v-text-field
            v-model="editedItem.weight"
            :label="$t('weight')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <v-text-field
            v-model.number="editedItem.price"
            type="number"
            :label="$t('price')"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
    <template v-slot:[`item.price`]="{ item }">
      {{ priceToString(item.price) }}
    </template>
  </admin-table>
</template>
<script lang="ts">
import { Armour } from "@/store/modules/armour";
import { getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import { Locale } from "@/API";
import AdminTable from "./AdminTable.vue";
import { getPriceString } from "@/utils/price";

@Component({
  name: "armour-admin",
  components: {
    "admin-table": AdminTable,
  },
})
export default class ArmourAdmin extends Vue {
  defaultItem: Armour = {
    id: "",
    description: { locale: this.$i18n.locale as Locale, title: "" },
    descriptions: getDescriptionsForLocales(),
    movementPreventionValue: 0,
    damageReductionValue: 0,
  };
  customColumns = ["price"];

  get headers() {
    return [
      { text: this.$t("title"), value: "description.title" },
      {
        text: this.$t("movement-prevention-value"),
        value: "movementPreventionValue",
      },
      {
        text: this.$t("damage-reduction-value"),
        value: "damageReductionValue",
      },
      { text: this.$t("weight"), value: "weight" },
      { text: this.$t("price"), value: "price" },
      { text: this.$t("actions"), value: "actions", sortable: false },
    ];
  }

  priceToString(price: number) {
    return getPriceString(price, this.$i18n);
  }
}
</script>

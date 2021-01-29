<template>
  <admin-table
    :defaultItem="defaultItem"
    module="magicalItem"
    :headers="headers"
    newText="new-magical-item"
    editText="edit-magical-item"
    title="magical-items"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <v-select
            v-model="editedItem.class"
            :items="classes"
            item-text="description.title"
            item-value="id"
            :label="$t('can-be-made-by')"
            return-object
          ></v-select>
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <v-text-field
            v-model.number="editedItem.manaCost"
            type="number"
            :label="$t('mana-cost')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" lg="3">
          <v-text-field
            v-model="editedItem.duration"
            :label="$t('duration')"
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
import { getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import { MagicalItem } from "@/store/modules/magicalItem";
import { Class } from "@/store/modules/class";
import { Locale } from "@/API";
import AdminTable from "./AdminTable.vue";
import { getPriceString } from "@/utils/price";

@Component({
  name: "magical-item-admin",
  components: {
    "admin-table": AdminTable,
  },
})
export default class MagicalItemAdmin extends Vue {
  defaultItem: MagicalItem = {
    id: "",
    class: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    description: { locale: this.$i18n.locale as Locale, title: "" },
    descriptions: getDescriptionsForLocales(),
  };
  customColumns = ["price"];

  get headers() {
    return [
      { text: this.$t("title"), value: "description.title" },
      { text: this.$t("can-be-made-by"), value: "class.description.title" },
      { text: this.$t("mana-cost"), value: "manaCost" },
      { text: this.$t("duration"), value: "duration" },
      { text: this.$t("price"), value: "price" },
      { text: this.$t("actions"), value: "actions", sortable: false },
    ];
  }

  get classes(): Class[] {
    return this.$store.getters["class/getMagicUserClasses"];
  }

  priceToString(price: number) {
    return getPriceString(price);
  }

  created() {
    this.$store.dispatch("class/load");
  }
}
</script>

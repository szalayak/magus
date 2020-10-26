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
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="3">
          <v-select
            v-model="editedItem.class"
            :items="classes"
            item-text="description.title"
            item-value="id"
            :label="$t('class')"
            return-object
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3">
          <v-text-field
            v-model.number="editedItem.manaCost"
            type="number"
            :label="$t('mana-cost')"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3">
          <v-text-field
            v-model="editedItem.duration"
            :label="$t('duration')"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="3">
          <v-text-field
            v-model.number="editedItem.price"
            type="number"
            :label="$t('price')"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
    <template v-slot:[`item.class`]="{ item }">
      {{ classToString(item.class) }}
    </template>
    <template v-slot:[`item.price`]="{ item }">
      {{ priceToString(item.price) }}
    </template>
  </admin-table>
</template>
<script lang="ts">
import { localise, getDescriptionsForLocales } from "@/utils/localise";
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
  headers = [
    { text: this.$t("id"), value: "id" },
    { text: this.$t("title"), value: "description.title" },
    { text: this.$t("class"), value: "class" },
    { text: this.$t("mana-cost"), value: "manaCost" },
    { text: this.$t("duration"), value: "duration" },
    { text: this.$t("price"), value: "price" },
    { text: this.$t("actions"), value: "actions", sortable: false },
  ];
  defaultItem: MagicalItem = {
    id: "",
    class: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    description: { locale: this.$i18n.locale as Locale, title: "" },
    descriptions: getDescriptionsForLocales(),
  };
  customColumns = ["price", "class"];

  get classes(): Class[] {
    const classes = this.$store.getters["class/getMagicUserClasses"];
    return localise(classes, this.$i18n.locale) as Class[];
  }

  classToString(classValue?: Class): string | undefined {
    return this.classes.find(cl => cl.id === classValue?.id)?.description
      ?.title;
  }

  priceToString(price: number) {
    return getPriceString(price, this.$i18n);
  }

  created() {
    this.$store.dispatch("class/load");
  }
}
</script>

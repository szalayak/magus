<template>
  <admin-table
    :defaultItem="defaultItem"
    module="valueRange"
    :headers="headers"
    newText="new-value"
    editText="edit-value"
    title="value-ranges"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-select
            v-model="editedItem.type"
            :items="valueRangeTypes"
            item-text="title"
            item-value="id"
            :label="$t('type')"
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </template>
    <template v-slot:[`item.type`]="{ item }">
      {{ valueRangeTypeToString(item.type) }}
    </template>
  </admin-table>
</template>
<script lang="ts">
import { getDescriptionsForLocales } from "@/utils/localise";
import { getValueRangeTypes } from "@/utils/valueRangeTypes";
import Component from "vue-class-component";
import Vue from "vue";
import { ValueRange } from "@/store/modules/valueRange";
import AdminTable from "./AdminTable.vue";
import { Locale, ValueRangeType } from "@/API";

@Component({
  name: "value-range-admin",
  components: {
    "admin-table": AdminTable,
  },
})
export default class ValueRangeAdmin extends Vue {
  defaultItem: ValueRange = {
    id: "",
    descriptions: getDescriptionsForLocales(),
    description: { locale: this.$i18n.locale as Locale, title: "" },
  };
  customColumns = ["type"];

  get valueRangeTypes() {
    return getValueRangeTypes(this.$i18n);
  }

  get headers() {
    return [
      { text: this.$t("type"), value: "type" },
      { text: this.$t("title"), value: "description.title" },
      { text: this.$t("actions"), value: "actions", sortable: false },
    ];
  }

  valueRangeTypeToString(valueRangeType?: ValueRangeType): string | undefined {
    return this.valueRangeTypes.find(vt => vt.id === valueRangeType)?.title;
  }
}
</script>

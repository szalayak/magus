<template>
  <admin-table
    :defaultItem="defaultItem"
    module="class"
    :headers="headers"
    newText="new-class"
    editText="edit-class"
    title="classes"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12" xs="12" sm="6">
          <v-select
            v-model="editedItem.mainClass"
            :items="mainClasses"
            item-text="description.title"
            item-value="id"
            :label="$t('main-class')"
            return-object
          ></v-select>
        </v-col>
        <v-col cols="12" xs="12" sm="6">
          <v-checkbox
            v-model="editedItem.magicUser"
            :label="$t('magic-user')"
          />
        </v-col>
      </v-row>
    </template>
    <template v-slot:[`item.magicUser`]="{ item }">
      <v-simple-checkbox v-model="item.magicUser" disabled></v-simple-checkbox>
    </template>
    <template v-slot:[`item.mainClass`]="{ item }">
      {{ mainClassToString(item.mainClass) }}
    </template>
  </admin-table>
</template>
<script lang="ts">
import { localise, getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import { Class } from "@/store/modules/class";
import { ValueRange } from "@/store/modules/valueRange";
import { Locale, ValueRangeType } from "@/API";
import AdminTable from "./AdminTable.vue";

@Component({
  name: "class-admin",
  components: {
    "admin-table": AdminTable,
  },
})
export default class ClassAdmin extends Vue {
  defaultItem: Class = {
    id: "",
    mainClass: {
      id: "",
      description: { locale: this.$i18n.locale as Locale, title: "" },
    },
    description: { locale: this.$i18n.locale as Locale, title: "" },
    descriptions: getDescriptionsForLocales(),
  };
  customColumns = ["magicUser", "mainClass"];

  get headers() {
    return [
      { text: this.$t("id"), value: "id" },
      { text: this.$t("main-class"), value: "mainClass" },
      { text: this.$t("title"), value: "description.title" },
      { text: this.$t("magic-user"), value: "magicUser" },
      { text: this.$t("actions"), value: "actions", sortable: false },
    ];
  }

  get mainClasses(): ValueRange[] {
    const mainClasses = this.$store.getters["valueRange/getMainClasses"];
    return localise(mainClasses, this.$i18n.locale) as ValueRange[];
  }

  mainClassToString(mainClass?: ValueRange): string | undefined {
    return this.mainClasses.find(wt => wt.id === mainClass?.id)?.description
      ?.title;
  }

  created() {
    this.$store.dispatch("valueRange/loadByType", ValueRangeType.MAIN_CLASS);
  }
}
</script>

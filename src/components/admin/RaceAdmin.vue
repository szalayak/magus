<template>
  <admin-table
    :defaultItem="defaultItem"
    module="race"
    :headers="headers"
    newText="new-race"
    editText="edit-race"
    title="races"
    :customColumns="customColumns"
  >
    <template v-slot:editable-fields="{ editedItem }">
      <v-row dense>
        <v-col cols="12">
          <v-checkbox v-model="editedItem.playable" :label="$t('playable')" />
        </v-col>
      </v-row>
    </template>
    <template v-slot:[`item.playable`]="{ item }">
      <v-simple-checkbox v-model="item.playable" disabled></v-simple-checkbox>
    </template>
  </admin-table>
</template>
<script lang="ts">
import { Race } from "@/store/modules/race";
import { localise, getDescriptionsForLocales } from "@/utils/localise";
import Component from "vue-class-component";
import Vue from "vue";
import { Locale } from "@/API";
import AdminTable from "./AdminTable.vue";

@Component({
  name: "race-admin",
  components: {
    "admin-table": AdminTable,
  },
})
export default class RaceAdmin extends Vue {
  defaultItem: Race = {
    id: "",
    description: { locale: this.$i18n.locale as Locale, title: "" },
    descriptions: getDescriptionsForLocales(),
  };
  customColumns = ["playable"];

  get headers() {
    return [
      { text: this.$t("id"), value: "id" },
      { text: this.$t("title"), value: "description.title" },
      { text: this.$t("playable"), value: "playable" },
      { text: this.$t("actions"), value: "actions", sortable: false },
    ];
  }

  get items(): Race[] {
    return localise(
      this.$store.state.race.result?.listRaces?.items,
      this.$i18n.locale
    ) as Race[];
  }
}
</script>

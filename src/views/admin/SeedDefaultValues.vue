<template>
  <v-container fluid>
    <v-toolbar extended flat>
      <v-toolbar-title>{{ $t("seed-default-values") }} </v-toolbar-title>
      <v-spacer />
      <v-btn color="primary" text @click="selectAll">{{
        $t("select-all")
      }}</v-btn>
      <v-btn color="error" text @click="deselectAll">{{
        $t("select-none")
      }}</v-btn>
      <template v-slot:extension>
        <v-checkbox
          v-model="deleteBeforeInsert"
          :label="$t('delete-existing-values')"
        />
      </template>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="item in items" :key="item.id">
        <v-list-item-action>
          <v-checkbox v-model="item.selected"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script lang="ts">
import TitleComponent from "@/mixins/TitleComponent";
import Component from "vue-class-component";
import { loadDataForModule, ModuleResults } from "@/utils/csv";

@Component({ name: "seed-default-values" })
export default class SeedDefaultValues extends TitleComponent {
  title = this.$t("seed-default-values");
  deleteBeforeInsert = false;
  items = [
    {
      id: "weapons",
      selected: false,
      title: this.$t("weapons"),
      module: "weapon",
    },
  ];
  fixtures: ModuleResults = {};

  selectAll() {
    this.items.forEach(i => (i.selected = true));
  }

  deselectAll() {
    this.items.forEach(i => (i.selected = false));
  }

  async created() {
    this.items.forEach(i => this.$store.dispatch(`${i.module}/load`));
    try {
      const results = await Promise.all(
        this.items.map(i => {
          return [i.module, loadDataForModule(i.module)];
        })
      );
      this.fixtures = Object.fromEntries(results);
      console.log(this.fixtures);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

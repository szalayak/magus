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
        <v-spacer />
        <v-list-item-action>
          <v-dialog scrollable v-model="item.dialog" max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon text v-on="on" v-bind="attrs"
                ><v-icon>mdi-information</v-icon></v-btn
              >
            </template>
            <v-card>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <div v-html="fixture(item.fixture)" />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text @click="item.dialog = false">{{
                  $t("close")
                }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script lang="ts">
import TitleComponent from "@/mixins/TitleComponent";
import Component from "vue-class-component";
import VueI18n from "vue-i18n";
import fixtures from "@/fixtures/index";
import JSONFormatter from "json-formatter-js";

interface Fixture {
  id: string;
  fixture: string;
  selected: boolean;
  title: string | VueI18n.TranslateResult;
  module: string;
  dialog: boolean;
}

@Component({ name: "seed-default-values" })
export default class SeedDefaultValues extends TitleComponent {
  title = this.$t("seed-default-values");
  deleteBeforeInsert = false;
  items: Fixture[] = [
    {
      id: "weapons",
      fixture: "weapons",
      selected: false,
      title: this.$t("weapons"),
      module: "weapon",
      dialog: false,
    },
  ];

  fixture(fixture: string) {
    return new JSONFormatter(fixtures[fixture], 2, {
      hoverPreviewEnabled: true,
    }).render().outerHTML;
  }

  selectAll() {
    this.items.forEach(i => (i.selected = true));
  }

  deselectAll() {
    this.items.forEach(i => (i.selected = false));
  }

  async created() {
    this.items.forEach(i => this.$store.dispatch(`${i.module}/load`));
  }
}
</script>

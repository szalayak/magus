<template>
  <v-container fluid>
    <v-toolbar extended flat>
      <v-toolbar-title>{{ $t("seed-default-values") }} </v-toolbar-title>
      <v-spacer />
      <v-btn
        :disabled="!itemSelected"
        :loading="updateInProgress"
        color="error"
        text
        @click="deleteExisting"
        >{{ $t("delete") }}</v-btn
      >
      <v-btn
        :disabled="!itemSelected"
        :loading="updateInProgress"
        color="primary"
        text
        @click="upload"
        >{{ $t("start") }}</v-btn
      >
      <template v-slot:extension>
        <v-radio-group v-model="updateMode" row>
          <v-radio :label="$t('insert-values-only')" value="INSERT" />
          <v-radio :label="$t('update-existing-values')" value="UPDATE" />
        </v-radio-group>
        <v-spacer />
        <v-btn
          icon
          color="primary"
          text
          @click="selectAll"
          :disabled="allSelected"
          ><v-icon>mdi-check-all</v-icon></v-btn
        >
        <v-btn
          icon
          color="error"
          text
          @click="deselectAll"
          :disabled="!itemSelected"
          ><v-icon>mdi-check-all</v-icon></v-btn
        >
      </template>
    </v-toolbar>
    <v-alert v-if="notification" dense outlined type="error" dismissible>
      {{ messages }}
    </v-alert>
    <v-list>
      <v-list-item v-for="item in items" :key="item.id">
        <v-list-item-action>
          <v-checkbox v-model="item.selected"></v-checkbox>
        </v-list-item-action>
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
        <v-list-item-content>
          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item-content>
        <v-spacer />
        <v-list-item-icon>
          <v-progress-circular
            v-show="item.inProgress"
            indeterminate
            color="primary"
          ></v-progress-circular
          ><v-icon v-show="item.done" :color="item.colour"
            >mdi-check</v-icon
          ></v-list-item-icon
        >
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
import { Editable, LooseObject } from "@/store/types";

interface Fixture {
  id: string;
  fixture: string;
  selected: boolean;
  title: string | VueI18n.TranslateResult;
  module: string;
  dialog?: boolean;
  colour?: string;
  done?: boolean;
  inProgress?: boolean;
}

const [INSERT, UPDATE] = ["INSERT", "UPDATE"];

@Component({ name: "seed-default-values" })
export default class SeedDefaultValues extends TitleComponent {
  title = this.$t("seed-default-values");
  notification = false;
  messages: string[] = [];
  updateMode = INSERT;
  updateInProgress = false;
  items: Fixture[] = [
    {
      id: "valueRanges",
      fixture: "valueRanges",
      selected: false,
      title: "value-ranges",
      module: "valueRange",
      done: false,
      inProgress: false,
    },
    {
      id: "races",
      fixture: "races",
      selected: false,
      title: "races",
      module: "race",
      done: false,
      inProgress: false,
    },
    {
      id: "classes",
      fixture: "classes",
      selected: false,
      title: "classes",
      module: "class",
      done: false,
      inProgress: false,
    },
    {
      id: "psiSchools",
      fixture: "psiSchools",
      selected: false,
      title: "psi-schools",
      module: "psiSchool",
      done: false,
      inProgress: false,
    },
    {
      id: "armours",
      fixture: "armours",
      selected: false,
      title: "armours",
      module: "armour",
      done: false,
      inProgress: false,
    },
    {
      id: "shields",
      fixture: "shields",
      selected: false,
      title: "shields",
      module: "shield",
      done: false,
      inProgress: false,
    },
    {
      id: "skills",
      fixture: "skills",
      selected: false,
      title: "skills",
      module: "skill",
      done: false,
      inProgress: false,
    },
    {
      id: "weapons",
      fixture: "weapons",
      selected: false,
      title: "weapons",
      module: "weapon",
      done: false,
      inProgress: false,
    },
    {
      id: "magicalItems",
      fixture: "magicalItems",
      selected: false,
      title: "magical-items",
      module: "magicalItem",
      done: false,
      inProgress: false,
    },
  ];

  get itemSelected() {
    return !!this.items.find(i => i.selected);
  }

  get allSelected() {
    return this.items.every(i => i.selected);
  }

  fixture(fixture: string) {
    return new JSONFormatter(fixtures[fixture], 3, {
      hoverPreviewEnabled: true,
    }).render().outerHTML;
  }

  selectAll() {
    this.items.forEach(i => (i.selected = true));
  }

  deselectAll() {
    this.items.forEach(i => (i.selected = false));
  }

  async processOperations(operations: Promise<unknown>[], item: Fixture) {
    try {
      await Promise.all(operations);
      item.done = true;
      item.colour = "success";
    } catch (e) {
      item.done = true;
      item.colour = "error";
      this.notification = true;
      this.messages.concat(
        typeof e === "string"
          ? [e]
          : e.errors?.map((err: LooseObject) => err.message) || []
      );
    }
  }

  async deleteExisting() {
    this.updateInProgress = true;
    const items = this.items.filter(i => i.selected);
    for (const item of items) {
      item.inProgress = true;
      item.done = false;
      const existingData: Editable[] = this.$store.getters[
        `${item.module}/list`
      ];
      const deletions = existingData.map(d =>
        this.$store.dispatch(`${item.module}/delete`, d.id)
      );
      await this.processOperations(deletions, item);
      item.inProgress = false;
    }
    this.updateInProgress = false;
  }

  async upload() {
    this.updateInProgress = true;
    const items = this.items.filter(i => i.selected);

    for (const item of items) {
      item.inProgress = true;
      item.done = false;
      const existingData: Editable[] = this.$store.getters[
        `${item.module}/list`
      ];
      const itemFixtures = fixtures[item.fixture];
      const operations = itemFixtures
        .map(f => {
          const existing = existingData.find(d => d.id === f.id);
          if (existing && this.updateMode === UPDATE) {
            return this.$store.dispatch(`${item.module}/update`, f);
          } else if (!existing) {
            return this.$store.dispatch(`${item.module}/create`, f);
          }
        })
        .filter(o => o) as Promise<unknown>[];
      await this.processOperations(operations, item);
      item.inProgress = false;
    }
    this.updateInProgress = false;
  }

  async created() {
    this.items.forEach(i => this.$store.dispatch(`${i.module}/load`));
  }
}
</script>

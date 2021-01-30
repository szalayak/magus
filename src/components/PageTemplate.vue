<template>
  <div class="v-main">
    <slot name="app-bar"><app-bar /></slot>
    <slot name="nav-bar"
      ><nav-drawer encyclopedia administration>
        <template v-slot:navbar-items="{}"
          ><slot name="navbar-items"></slot>
        </template> </nav-drawer
    ></slot>
    <v-main>
      <slot></slot>
    </v-main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppBar from "./AppBar.vue";
import NavigationDrawer from "./NavigationDrawer.vue";
export default Vue.extend({
  name: "page-template",
  components: {
    "app-bar": AppBar,
    "nav-drawer": NavigationDrawer,
  },
});
</script>

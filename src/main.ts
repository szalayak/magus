import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import Amplify from "aws-amplify";
import { Auth } from "@aws-amplify/auth";
import "@aws-amplify/ui-vue";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
Auth.configure(awsExports);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount("#app");

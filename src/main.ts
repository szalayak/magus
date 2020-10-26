import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-vue";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (to.path.match(/admin/g))
//     if (!store.state.app.isAdmin) next(from.path);
//     else next();
//   else next();
// });

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount("#app");

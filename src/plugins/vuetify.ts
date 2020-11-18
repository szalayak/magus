import locale from "@/locale";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import en from "vuetify/src/locale/en";
import hu from "vuetify/src/locale/hu";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { en, hu },
    current: locale,
  },
});

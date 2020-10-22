import Vue from "vue";
import Vuetify from "vuetify/lib";
import VueI18n from "vue-i18n";
import en from "vuetify/src/locale/en";
import hu from "vuetify/src/locale/hu";

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  en: { $vuetify: en },
  hu: { $vuetify: hu },
};

const i18n = new VueI18n({
  locale: "en", // set locale
  messages, // set locale messages
});

export default new Vuetify({
  lang: {
    t: (key: string, ...params: unknown[]) => i18n.t(key, params) as string,
    locales: { en, hu },
    current: "en",
  },
});

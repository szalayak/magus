export default new URLSearchParams(window.location.search).get("locale") ||
  window?.navigator?.language ||
  process.env.VUE_APP_I18N_LOCALE ||
  "en";

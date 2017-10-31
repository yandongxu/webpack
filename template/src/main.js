import 'es6-promise/auto';
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#vuex}}
import store from './store';
{{/vuex}}
{{#i18n}}
import i18n from './i18n';
{{/i18n}}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#i18n}}
  i18n,
  {{/i18n}}
  render: h => h(App)
});

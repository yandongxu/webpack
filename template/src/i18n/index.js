import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enUS from './en-us';
import zhCN from './zh-cn';

Vue.use(VueI18n);

const messages = {
  'en-US': enUS,
  'zh-CN': zhCN
};

export default new VueI18n({
  locale: 'en-US',
  messages
});

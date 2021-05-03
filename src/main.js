import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false
Vue.use(VueI18n);

new Vue({
  router,
  vuetify,
  VueI18n,

  render: h => h(App)
}).$mount('#app')

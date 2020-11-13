// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import ViewUI from 'view-design';
import i18n from "./language"
import 'view-design/dist/styles/iview.css';

import less from 'less'
Vue.use(less)
Vue.use(ViewUI);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})


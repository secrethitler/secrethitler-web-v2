import Vue from 'vue';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import plugin from './plugin';


Vue.config.productionTip = false;
Vue.use(VueGtag, {
  config: { id: 'UA-125629095-7' },
}, router);
Vue.use(plugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

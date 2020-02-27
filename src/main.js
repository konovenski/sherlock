import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import Loading from "components/lib/loading";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component("loading", Loading);

new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')

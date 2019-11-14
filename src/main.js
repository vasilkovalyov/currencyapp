import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import VueResource from "vue-resource";
import Vuelidate from "vuelidate"

Vue.config.productionTip = false;

Vue.use(VueResource, Vuelidate);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

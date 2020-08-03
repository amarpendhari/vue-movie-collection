import Vue from "vue";
import vueResource from "vue-resource";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(vueResource);

new Vue({
  render: h => h(App),
  el: "#app"
}).$mount("#app");

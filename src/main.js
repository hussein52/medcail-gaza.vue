import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/App.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // render: (h) => h(App),
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

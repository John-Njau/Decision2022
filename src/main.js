import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import axios from 'axios'
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import Maps from "highcharts/modules/map";

Maps(Highcharts);


Vue.config.productionTip = false
Vue.use(HighchartsVue);


axios.defaults.baseURL = 'http://127.0.0.1:8000/'

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

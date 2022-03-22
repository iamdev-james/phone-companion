import Vue from 'vue'
import App from './App.vue'
import "@/assets/styles/main.css";
import SlitherSlider from 'slither-slider';

Vue.use(SlitherSlider);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

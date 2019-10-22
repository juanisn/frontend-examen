import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      appName: "Tareas"
    }
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

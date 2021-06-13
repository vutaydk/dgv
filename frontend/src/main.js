import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App), 
  apolloProvider: createProvider({
    httpEndpoint: 'http://localhost:8000/graphql',
    wsEnpoint: null
  })
}).$mount('#app')

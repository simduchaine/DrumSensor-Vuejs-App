import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import App from './App.vue'

export const SocketInstance = socketio('http://localhost:3000')

Vue.use(VueSocketIO, SocketInstance)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

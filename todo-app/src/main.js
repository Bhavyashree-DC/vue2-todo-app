import App from './App.vue'
import Vue from 'vue'

import { store } from './store/store'

import './assets/main.css'

new Vue({
  el: '#app',
  render: (h) => h(App),
  store: store,
})

import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.prototype.$store = store 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
		store,
    ...App
})
app.$mount()

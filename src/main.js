import './common/base.css'
import './common/tool.js'
import 'es6-promise/auto'
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/mint-cover.css'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
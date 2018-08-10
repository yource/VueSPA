import './common/base.css'
import './common/tool.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/mint-cover.css'
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
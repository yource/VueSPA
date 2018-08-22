import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login/login.vue'
import home from './components/home/home.vue'
import home1 from './components/home/home1.vue'
import home2 from './components/home/home2.vue'
import home3 from './components/home/home3.vue'
import home4 from './components/home/home4.vue'
import setting from './components/setting/setting.vue'
import settingAccount from './components/setting/account.vue'
import settingNotifications from './components/setting/notifications.vue'
import settingPrivacy from './components/setting/privacy.vue'
import settingGeneral from './components/setting/general.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/home',
        name: 'home',
        component: home,
        children: [{
            path: "home1",
            component: home1,
            meta: { scrollTop: 0 }
        }, {
            path: "home2",
            component: home2,
            meta: { scrollTop: 0 }
        }, {
            path: "home3",
            component: home3,
            meta: { scrollTop: 0 }
        }, {
            path: "home4",
            component: home4,
            meta: { scrollTop: 0 }
        }]
    },{
        path:"/setting",
        component:setting
    },{
        path:"/setting/notifications",
        component:settingNotifications
    },{
        path:"/setting/account",
        component:settingAccount
    },{
        path:"/setting/privacy",
        component:settingPrivacy
    },{
        path:"/setting/general",
        component:settingGeneral
    }],
    // meta.scrollTop记录滚动位置
    scrollBehavior(to, from, savedPosition) {
        var position = { x: 0, y: (to.meta&&to.meta.scrollTop)? to.meta.scrollTop:0 };
        return position;
    }
})
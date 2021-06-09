import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../components/AppMain'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: AppMain
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
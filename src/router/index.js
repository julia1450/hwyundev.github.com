import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../components/AppMain'
import WorkList from '../components/works/WorkList'

Vue.use(VueRouter);

const routes = [
    {
        path: process.env.NODE_ENV === 'production'? '/portfolio' : '/',
        component: AppMain,
        meta: { scrollToTop: true }
    },
    {
        path: process.env.NODE_ENV === 'production'? '/portfolio/works' : '/works',
        component: WorkList
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
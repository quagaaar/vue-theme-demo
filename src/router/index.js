import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/variant1',
        name: 'Variant1',
        component: () => import(/* webpackChunkName: "variant1" */ '@/views/Variant1'),
        children: [
            {
                path: 'items',
                name: 'Variant1Items',
                component: () => import(/* webpackChunkName: "variant1" */ '@/views/variant1/Items')
            },
            {
                path: 'volume',
                name: 'Variant1Volume',
                component: () => import(/* webpackChunkName: "variant1" */ '@/views/variant1/Volume')
            }
        ]
    },
    {
        path: '/variant2',
        name: 'Variant2',
        component: () => import(/* webpackChunkName: "variant2" */ '@/views/Variant2'),
        children: [
            {
                path: 'items',
                name: 'Variant2Items',
                component: () => import(/* webpackChunkName: "variant2" */ '@/views/variant2/Items')
            },
            {
                path: 'volume',
                name: 'Variant2Volume',
                component: () => import(/* webpackChunkName: "variant2" */ '@/views/variant2/Volume')
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import footer from '@/components/common/footer.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('./views/detail/index.vue')
      }
    },
    {
      path: '/det/:id',
      name: 'det',
      components: {
        default: () => import('./views/det/det.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/register/index.vue')
        // footer: footer
      }
    },
    {
      path: '/findpwd',
      name: 'findpwd',
      components: {
        default: () => import('./views/findpwd/index.vue')
        // footer: footer
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/login/index.vue')
        // footer: footer
      }
    },
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('./views/home/index.vue'),
        footer: footer
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/home/index.vue'),
        footer: footer
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/home/articleinfo',
      name: 'articleinfo',
      components: {
        default: () => import('./views/articleinfo/index.vue'),
        footer: footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('./views/kind/index.vue'),
        footer: footer
      }
    },
    {
      path: '/mouseshop',
      name: 'mouseshop',
      components: {
        default: () => import('./views/mouseshop/index.vue'),
        footer: footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/cart/index.vue'),
        footer: footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/user/index.vue'),
        footer: footer
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

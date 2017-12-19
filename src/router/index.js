import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Details from '@/components/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/details',
      name: 'Details',
      component: Details//详情页面 我先画页面dabu
    },
    {
      path: '/shopdetail',
      name: 'ShopDetail',
      component: ShopDetail//详情页面 我先画页面dabu
    },
  ]
})

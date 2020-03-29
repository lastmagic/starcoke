export default {
  routes: [
    {
      title: 'home',
      path: '/',
      name: 'home',
      component: function(resolve) {
        require(['@/components/index.vue'], resolve)
      },
    },
    {
      title: 'header',
      path: '/header',
      name: 'header',
      component: function(resolve) {
        require(['@/components/header.vue'], resolve)
      },
    },
    {
      title: 'detail',
      path: '/:idolId(\\d+)',
      name: 'detail',
      component: function(resolve) {
        require(['@/components/detail.vue'], resolve)
      },
    },
    {
      title: 'product',
      path: '/product',
      name: 'product',
      component: function(resolve) {
        require(['@/components/product.vue'], resolve)
      },
    },
    {
      title: 'my',
      path: '/my',
      name: 'my',
      component: function(resolve) {
        require(['@/components/my.vue'], resolve)
      },
    },
    {
      title: 'login',
      path: '/login',
      name: 'login',
      component: function(resolve) {
        require(['@/components/login.vue'], resolve)
      },
    },
    {
      title: 'register',
      path: '/register',
      name: 'register',
      component: function(resolve) {
        require(['@/components/register.vue'], resolve)
      },
    },
  ],
}

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/basic',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('./layout/BasicLayout'),
      children: [
        { path: '', redirect: 'demopage1' },
        { path: 'demopage1', name: 'demopage1', component: () => import('./views/Demo/DemoPage1') },
        { path: 'demopage2', name: 'demopage2', component: () => import('./views/Demo/DemoPage2') },
        { path: 'about', name: 'about', component: () => import('./views/About') },
      ],
    },
  ],
});

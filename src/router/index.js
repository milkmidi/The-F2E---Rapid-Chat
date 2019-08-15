import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import(/* webpackChunkName: "Home" */ '@/pages/Home');
const DemoPage = () => import(/* webpackChunkName: "DemoPage" */'@/pages/DemoPage');

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Home },
  { path: '/demo', component: DemoPage },
  // { path: '*', component: Main },
];

const router = new VueRouter({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes,
});
/* router.beforeEach((to, from, next) => {
  next();
}); */

export default router;

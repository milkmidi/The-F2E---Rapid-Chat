import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';


const Home = () => import('@/pages/Home');
const Login = () => import('@/pages/Login');
const Settingup = () => import('@/pages/Settingup');
const Chatting = () => import('@/pages/Chatting');

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/settingup', component: Settingup },
  { path: '/chatting', component: Chatting },
  { path: '*', component: Home },
];

const router = new VueRouter({
  mode: 'hash',
  // scrollBehavior: () => ({ y: 0 }),
  routes,
});
router.beforeEach((to, from, next) => {
  const { path } = to;
  if (path !== '/' && path !== '/login' && store.state.nickName === '') {
    next('/login');
    return;
  }
  // console.log(to);
  // console.log(store.state.nickName);
  next();
});

export default router;

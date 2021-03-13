import Vue from 'vue';
import VueRouter from 'vue-router'
import List from './List.vue';
import Edit from './Edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/tasks',
    component: List
  },
  {
    path: '/tasks/:id',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import router from './router.js';
import VueHead from 'vue-head';   // Vue.jsでhead要素を管理するライブラリ

Vue.use(VueHead);

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  head: {
    title() {
      return {
        inner: 'TODOアプリ'
      }
    },
    meta: [
      { hid: 'description', name: 'description', content: 'タスク管理をするためのTODOアプリケーションです。' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      }
    ]
  },
  render: h => h(App)
});

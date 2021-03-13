import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        task: 'ログイン画面_詳細',
        detail: 'ログイン画面の詳細設計書を作成する',
        done: 1
      },
      {
        id: 2,
        task: 'ログイン画面_実装',
        detail: 'Vue.jsを使ってログイン画面を実装する',
        done: 0
      },
      {
        id: 3,
        task: 'ログイン画面_テスト',
        detail: 'ログイン画面をテストする',
        done: 0
      },
      {
        id: 4,
        task: 'Vue.jsの本を買う',
        detail: '',
        done: 0
      }
    ],
    nextId: 5
  },
  getters: {
    getOne(state) {
      return function(id) {
        return state.tasks.find(tasks => tasks.id === id);
      }
    }
  },
  mutations: {
    create(state, param) {
      state.tasks.push({
        id: state.nextId,
        task: param.task,
        detail: param.detail,
        done: 0
      });
      state.nextId++;
    },
    update(state, param) {
      const filtered = state.tasks.find(task => {
        return task.id === param.id;
      });
      filtered.done = (filtered.done === 1 ? 0 : 1);
    },
    remove(state, param) {
      const filtered = state.tasks.filter(task => {
        return task.id !== param.id;
      });
      state.tasks = filtered;
    }
  }
});

export default store;

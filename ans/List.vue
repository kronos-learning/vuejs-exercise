<template>
  <div class="row">
    <div class="col-10 pt-4">
      <h2>タスク一覧</h2>
      <form class="form-inline" v-on:submit.prevent="create">
        <input type="text" class="form-control w-50" v-model="task" maxlength="30" 
               placeholder="タスクを入力してください（必須）" required><br>
        <input type="text" class="form-control w-75" v-model="detail" maxlength="100"
               placeholder="詳細を入力してください">
        <button type="submit" class="btn btn-primary">追加</button>
      </form>
      <hr>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>タスク</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.id }}</td>
            <td><router-link :to="{ path: '/tasks/' + task.id }">{{ task.task }}</router-link></td>
            <td v-if="task.done===1"><button type="button" @click="update(task.id)" class="btn btn-secondary">完了</button></td>
            <td v-else><button type="button" @click="update(task.id)" class="btn btn-success">未完了</button></td>
            <td><button type="button" @click="remove(task.id)" class="btn btn-danger">削除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      task: '',
      detail: ''
    }
  },
  mounted() {
    this.tasks = this.$store.state.tasks;
  },
  methods: {
    create() {
      this.$store.commit('create', {
        task: this.task,
        detail: this.detail
      });
      this.task = '';
      this.detail = '';
    },
    update(id) {
      this.$store.commit('update', {
        id: id
      });
      this.tasks = this.$store.state.tasks;
    },
    remove(id) {
      this.$store.commit('remove', {
        id: id
      });
      this.tasks = this.$store.state.tasks;
    }
  }
}
</script>

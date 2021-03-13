<template>
  <div class="row">
    <div class="col-10 pt-4">
      <h2>タスク詳細</h2>
      <table class="table">
        <tr>
          <th>ID</th>
          <td>{{ task.id }}</td>
        </tr>
        <tr>
          <th>タスク</th>
          <td>{{ task.task }}</td>
        </tr>
        <tr>
          <th>詳細</th>
          <td>{{ task.detail }}</td>
        </tr>
        <tr>
          <th>状況</th>
          <td>{{ task.done===0 ? '未完了' : '完了' }}</td>
        </tr>
      </table>
      <router-link to="/tasks">一覧へ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.getOne(parseInt(this.$route.params.id));
    }
  }
}
</script>

<template>
  <div>
    <h2>Edit task id {{ $route.params.task._id }}</h2>
    <TaskForm :the-task="task" />
    <div class="text-end">
      <router-link to="/" class="btn btn-lg btn-warning">Cancel</router-link>
      <button class="btn btn-lg btn-success" @click="editTask">Save</button>
    </div>
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm'

export default {
  components: {
    TaskForm,
  },
  data() {
    return {
      task: this.$route.params.task,
    }
  },
  methods: {
    editTask() {
      const { _id: id } = this.$route.params.task
      this.$axios
        .$patch(`http://127.0.0.1:8000/${id}/edit`, this.task)
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => console.error(err))
    },
  },
}
</script>

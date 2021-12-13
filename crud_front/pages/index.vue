<template>
  <div v-if="tasks">
    <div class="text-start">
      <router-link to="/AddTask"
        >
        <v-btn color="success" large>
          Add task
        </v-btn>
        </router-link
      >
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>
            <nuxt-link :to="{ name: 'task-id-edit', params: { task }}">{{
              task._id
            }}</nuxt-link>
          </td>
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.date }}</td>
          <td class="d-flex">
            <nuxt-link
            class="btn"
              :to="{ name: 'task-id-edit', params: { task }}"
              ><v-btn color="error" large
                >Edit</v-btn
              ></nuxt-link
            >
            <nuxt-link
            class="btn"
              :to="{ name: 'task-id-delete', params: { task }}"
              >
              <v-btn large color="warning">
                Delete
              </v-btn>
              </nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <v-btn
        color="error"
        @click="deleteAll"
      >
        Delete all tasks
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    }
  },
  async mounted() {
    this.tasks = await this.$axios.$get('http://127.0.0.1:8000/')
  },
  methods: {
    deleteAll() {
      this.$axios
        .$delete('http://127.0.0.1:8000/delete/all')
        .then(() => {
          this.tasks = []
        })
        .catch((err) => console.error(err))
    },
  },
}
</script>


<template>
  <section>
    <h2>Delete task id {{ $route.params.task._id }}</h2>
    <p>The action cannot be undone.</p>
    <router-link to="/"
      ><v-btn color="success" large>Cancel</v-btn></router-link
    >
    <v-btn color="error" large @click="deleteTask">Delete</v-btn>
  </section>
</template>

<script>
export default {
  methods: {
    deleteTask() {
      const { _id: id } = this.$route.params.task
      this.$axios
        .$delete(`http://127.0.0.1:8000/${id}`)
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>

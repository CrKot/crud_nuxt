<template>
  <form class="text-start">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input id="name" v-model="task.name" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="description">Description</label>
      <textarea
        id="description"
        v-model="task.description"
        class="form-control"
        placeholder="leave a description here"
      ></textarea>
    </div>
  </form>
</template>

<script>
export default {
  props: ['theTask'],
  data() {
    return {
      task: this.theTask,
    }
  },
}
</script>

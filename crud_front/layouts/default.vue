<template>
  <v-app dark>
    <v-img contain class="img" :src="'/logo.png'" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
    >
      <span>{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style scoped>
.img {
  max-height: 30vh;
}
</style>
<template>
  <div class="container d-flex justify-center gap-3 my-3">
    <v-btn :class="{'active-link': isActive('/')}" text @click="goTo('/')">{{$t('home')}}</v-btn>
    <v-btn :class="{'active-link': isActive('/menu')}" text @click="goTo('/menu')">{{$t('menu')}}</v-btn>
    <v-btn :class="{'active-link': isActive('/news')}" text @click="goTo('/news')">{{$t('news')}}</v-btn>
    <v-btn :class="{'active-link': isActive('/about')}" text @click="goTo('/about')">{{$t('about')}}</v-btn>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isActive = (path) => {
  return route.path === path
}

const goTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
.active-link {
  background-color: #1976d2; /* Active link background color */
  color: white; /* Active link text color */
}
</style>

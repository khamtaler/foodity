<template>
  <div class="flex flex-col items-center">
    <input class="py-4" type="text" placeholder="search for meals" v-model="search" />
    <main class="flex flex-col items-center"></main>
  </div>
</template>

<script setup>
// import TheSearchBar from '../components/TheSearchBar.vue'
import { ref } from 'vue'
const search = ref('')
</script>

<style lang="scss" scoped></style>

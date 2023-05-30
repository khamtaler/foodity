<template>
  <div class="flex flex-col p-5 flex-wrap items-center">
    <main class="flex flex-col items-center"></main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'

import axiosClient from '../axiosClient.js'

const meals = computed(() => {
  return store.state.meals
})

const ingredients = ref([])

onMounted(async () => {
  try {
    const response = await axiosClient.get(`/list.php?i=list`).then((res) => {
      return res.data
    })
    ingredients.value = response
  } catch (err) {
    console.log(err)
  }
})
</script>

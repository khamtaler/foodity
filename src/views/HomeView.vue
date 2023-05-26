<template>
  <main>
    <TheSearchBar />
    <TheAlphabet />
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import store from '../store'
import TheSearchBar from '../components/TheSearchBar.vue'
import TheAlphabet from '../components/TheAlphabet.vue'
import axiosClient from '../axiosClient.js'
import axios from 'axios'

const meals = computed(() => {
  return store.state.meals
})

onMounted(async () => {
  try {
    // const response = await axios
    //   .get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    //   .then((res) => {
    //     return res.data
    //   })
    const response = await axiosClient.get(`/list.php?i=list`).then((res) => {
      return res.data
    })
    console.log(response)
  } catch (err) {
    console.log(err)
  }
})
</script>

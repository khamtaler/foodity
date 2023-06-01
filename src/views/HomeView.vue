<template>
  <div class="flex flex-col p-5 flex-wrap items-center">
    <main class="flex flex-col items-center w-[90%] mx-auto">
      <div
        v-if="savedMeals.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 lg:w-[1000px] w-full"
      >
        <BaseSavedDish v-for="meal in savedMeals" :meal="meal" />
      </div>
      <div v-if="meals === 0">
        <h3>You haven't added any dish to your favorites list yet</h3>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'

import axiosClient from '../axiosClient.js'
import BaseSavedDish from '../components/BaseSavedDish.vue'

const meals = computed(() => {
  return store.state.savedDishesCount
})

const savedMeals = ref([])

onMounted(async () => {
  if (localStorage.getItem('savedRecipes')) {
    savedMeals.value = JSON.parse(localStorage.getItem('savedRecipes'))
  }

  const requests = []
  savedMeals.value.forEach((el) => {
    requests.push(axiosClient.get(`lookup.php?i=${el.id}`))
  })

  const mealsData = await Promise.all(requests)
  store.commit('setCounter', mealsData.length)
  mealsData.forEach((item, index) => {
    savedMeals.value[index] = item.data.meals[0]
  })
})
</script>

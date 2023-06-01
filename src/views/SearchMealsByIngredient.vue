<template>
  <main class="flex flex-col items-center w-[90%] mx-auto">
    <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 lg:w-[1000px] w-full mt-5">
      <BaseDishTile v-for="meal in meals" :meal="meal" />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient'
import { useRoute } from 'vue-router'
import BaseDishTile from '../components/BaseDishTile.vue'
const meals = ref([])
const route = useRoute()

onMounted(async () => {
  try {
    const response = await axiosClient
      .get(`filter.php?i=${route.params.ingredient}`)
      .then((res) => {
        return res.data
      })
    meals.value = response.meals
  } catch (err) {
    console.log(err)
  }
})
</script>

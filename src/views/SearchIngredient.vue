<template>
  <div class="flex flex-col items-center">
    <!-- <input class="py-4" type="text" placeholder="search for meals" v-model="search" /> -->
    <main class="flex flex-col items-center">
      <div
        v-if="ingredients"
        class="grid grid-cols-2 md:grid-cols-8 p-3 gap-5 lg:w-[1000px] w-full"
      >
        <BaseIngredientTile v-for="ingredient in ingredients" :ingredient="ingredient" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient'
import BaseIngredientTile from '../components/BaseIngredientTile.vue'

const ingredients = ref([])

onMounted(async () => {
  try {
    const response = await axiosClient.get('list.php?i=list').then((res) => {
      return res.data
    })
    ingredients.value = response.meals
    console.log(response)
  } catch (err) {
    console.log(err)
  }
})
</script>

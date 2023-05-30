<template>
  <div
    v-if="isSaved"
    :key="meal.idMeal"
    class="relative p-3 bg-white shadow-md rounded-t-xl md:max-w-[300px] w-full"
  >
    <EmptyHeartIcon
      v-if="!isSaved"
      class="absolute w-5 hover:w-6 right-5 bottom-3 z-10 cursor-pointer"
      @click="addToFavorites"
    />
    <FullHeartIcon
      v-if="isSaved"
      class="absolute w-6 hover:w-5 right-5 bottom-3 z-10 cursor-pointer"
      @click="removeFromFavorites"
    />
    <RouterLink
      v-if="meal.strMealThumb"
      :to="{ name: 'MealDetails', params: { id: meal.idMeal } }"
      class="overflow-hidden"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-[200px] md:h-[150px] object-cover w-full hover:transform hover:scale-95 ease-in duration-200"
      />
    </RouterLink>
    <img
      v-if="!meal.strMealThumb"
      src="../assets/images/placeholder.jpg"
      :alt="meal.strMeal"
      class="rounded-t-xl h-[150px] object-cover w-full hover:transform hover:scale-95 ease-in duration-200"
    />

    <h3 v-if="meal.strMeal" class="my-5 font-bold">{{ meal.strMeal }}</h3>
    <!-- <p>{{ meal.strIngredient1 }}</p>
            <p>{{ meal.strInstructions }}</p> -->
    <a v-if="meal.strYoutube" :href="meal.strYoutube" class="hover:text-red-600">View Youtube</a>
  </div>
</template>
<script setup>
import store from '../store'
import EmptyHeartIcon from './icons/EmptyHeartIcon.vue'
import FullHeartIcon from './icons/FullHeartIcon.vue'
import { onBeforeMount, ref } from 'vue'
const props = defineProps({
  meal: Object
})

const savedRecipes = ref([])
const isSaved = ref('')

function deleteFavorite() {
  store.commit('deleteDish', props.meal.idMeal)
  console.log('deltee')
}

function addToFavorites() {
  if (localStorage.getItem('savedRecipes')) {
    savedRecipes.value = JSON.parse(localStorage.getItem('savedRecipes'))
  }
  const objectToSave = {
    id: props.meal.idMeal
  }
  savedRecipes.value.reverse().push(objectToSave)
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes.value.reverse()))
  isSaved.value = true
}

function removeFromFavorites() {
  const saved = JSON.parse(localStorage.getItem('savedRecipes'))
  const updatedList = saved.filter((el) => el.id !== props.meal.idMeal)
  localStorage.setItem('savedRecipes', JSON.stringify(updatedList))
  deleteFavorite()
  isSaved.value = false
}

onBeforeMount(() => {
  const saved = JSON.parse(localStorage.getItem('savedRecipes'))

  if (saved) {
    saved.forEach((el) => {
      if (el.idMeal === props.meal.idMeal) {
        isSaved.value = true
      }
    })
  }
})
</script>

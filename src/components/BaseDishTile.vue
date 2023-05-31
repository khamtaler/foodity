<template>
  <div
    :key="meal.idMeal"
    class="flex flex-col relative p-3 bg-white shadow-md rounded-t-xl md:max-w-[300px] w-full"
  >
    <EmptyHeartIcon
      v-if="!isSaved"
      class="absolute w-5 right-5 bottom-3 z-10 cursor-pointer"
      @click="addToFavorites"
    />
    <FullHeartIcon
      v-if="isSaved"
      class="absolute w-5 right-5 bottom-3 z-10 cursor-pointer"
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
    <div v-if="meal.strTags" class="flex flex-col mb-3">
      <span
        v-if="!showTags"
        @click="showTags = !showTags"
        class="inline-flex gap-2 items-center cursor-pointer"
        ><ArrowDown class="w-5" /> Show Tags
      </span>
      <span
        v-if="showTags"
        @click="showTags = !showTags"
        class="inline-flex gap-2 items-center cursor-pointer"
      >
        <ArrowUp class="w-5" /> Hide Tags</span
      >
      <div v-if="showTags" class="mt-3 mb-5 inline-flex gap-2 flex-wrap border-b-2 border-red-600">
        <span v-for="tag in meal.strTags.split(',')" class="mb-3"> {{ tag }}</span>
      </div>
    </div>
    <div v-if="meal.strCategory" class="flex flex-col mb-3">
      <span
        v-if="!showCats"
        @click="showCats = !showCats"
        class="inline-flex gap-2 items-center cursor-pointer"
        ><ArrowDown class="w-5" /> Show Categories
      </span>
      <span
        v-if="showCats"
        @click="showCats = !showCats"
        class="inline-flex gap-2 items-center cursor-pointer"
      >
        <ArrowUp class="w-5" /> Hide Categories</span
      >
      <div v-if="showCats" class="mt-3 mb-5 inline-flex gap-2 flex-wrap border-b-2 border-red-600">
        <span v-for="tag in meal.strCategory.split(',')" class="mb-3"> {{ tag }}</span>
      </div>
    </div>
    <a
      v-if="meal.strYoutube"
      :href="meal.strYoutube"
      class="inline-flex hover:text-red-600 mt-auto mr-auto"
      >View Youtube</a
    >
  </div>
</template>
<script setup>
import store from '../store'
import EmptyHeartIcon from './icons/EmptyHeartIcon.vue'
import FullHeartIcon from './icons/FullHeartIcon.vue'
import ArrowDown from './icons/ArrowDown.vue'
import ArrowUp from './icons/ArrowUp.vue'
import { onBeforeMount, ref } from 'vue'

const props = defineProps({
  meal: Object
})
const showTags = ref(false)
const showCats = ref(false)
const savedRecipes = ref([])
const isSaved = ref('')

function addFavorite() {
  store.commit('saveDish', props.meal.idMeal)
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
  addFavorite()
  isSaved.value = true
}

function removeFromFavorites() {
  const saved = JSON.parse(localStorage.getItem('savedRecipes'))
  const updatedList = saved.filter((el) => el.id !== props.meal.idMeal)
  localStorage.setItem('savedRecipes', JSON.stringify(updatedList))
  isSaved.value = false
}

onBeforeMount(() => {
  const saved = JSON.parse(localStorage.getItem('savedRecipes'))
  console.log(saved)
  if (saved) {
    saved.forEach((el) => {
      if (el.id === props.meal.idMeal) {
        isSaved.value = true
      }
    })
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <input
      class="py-4 my-4 rounded-lg w-[300px]"
      type="text"
      placeholder="search for meals"
      v-model="search"
      @change="searchMeals"
    />
    <main class="flex flex-col items-center">
      <div v-if="meals.length !== 0" class="grid grid-cols-1 md:grid-cols-3 p-3">
        <div
          v-for="meal in meals"
          :key="meal.idMeal"
          class="p-3 bg-white m-3 shadow-md rounded-t-xl"
        >
          <RouterLink
            :to="{ name: 'MealDetails', params: { id: meal.idMeal } }"
            class="overflow-hidden"
          >
            <img
              :src="meal.strMealThumb"
              :alt="meal.strMeal"
              class="rounded-t-xl h-[150px] object-cover w-full hover:transform hover:scale-95 ease-in duration-200"
            />
          </RouterLink>
          <h3 class="my-5 font-bold">{{ meal.strMeal }}</h3>
          <!-- <p>{{ meal.strIngredient1 }}</p>
          <p>{{ meal.strInstructions }}</p> -->
          <a v-if="meal.strYoutube" :href="meal.strYoutube" class="hover:text-red-600"
            >View Youtube</a
          >
        </div>
      </div>
      <p>{{ meals }}</p>
    </main>
  </div>
</template>

<script setup>
// import TheSearchBar from '../components/TheSearchBar.vue'
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'

const search = ref('')
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()

function searchMeals() {
  store.dispatch('searchMeals', search.value)
}
onMounted(() => {
  search.value = route.params.name
  if (search.value) {
    searchMeals()
  }
})
</script>

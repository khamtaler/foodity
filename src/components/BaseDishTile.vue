<template>
  <div :key="meal.idMeal" class="p-3 bg-white shadow-md rounded-t-xl md:max-w-[300px] w-full">
    <RouterLink
      v-if="meal.strMealThumb"
      :to="{ name: 'MealDetails', params: { id: meal.idMeal } }"
      class="overflow-hidden"
    >
      <img
        v-if="meal.strMealThumb"
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
const props = defineProps({
  meal: Object
})
</script>

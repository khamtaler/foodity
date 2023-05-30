<template>
  <div>
    <RouterLink
      :to="{ name: 'MealsByIngredient', params: { ingredient: ingredient.strIngredient } }"
      ><h4>{{ ingredient.strIngredient }}</h4></RouterLink
    >
  </div>
</template>
<script setup>
const props = defineProps({
  ingredient: Object
})
</script>

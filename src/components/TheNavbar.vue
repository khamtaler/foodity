<template>
  <div>
    <ul class="flex flex-row h-full">
      <li class="inline-flex h-full items-center hover:bg-slate-400">
        <router-link :to="{ name: 'MealsByName' }" class="p-3">Search meals</router-link>
      </li>
      <li class="inline-flex h-full items-center hover:bg-slate-400">
        <router-link :to="{ name: 'MealsByLetter' }" class="p-3">Meals by Letter</router-link>
      </li>
      <li class="inline-flex h-full items-center hover:bg-slate-400">
        <router-link :to="{ name: 'MealsByIngredient' }" class="p-3">Ingredients</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>

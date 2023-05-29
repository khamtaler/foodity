<template>
  <div class="flex flex-row items-center h-[80px]">
    <router-link
      v-for="letter in alphabet"
      :to="{ name: 'MealsByLetter', params: { letter } }"
      :key="{ letter }"
      class="px-1 hover:text-xl hover:px-2 hover:font-bold"
      @click="$emit('search', letter)"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
</script>

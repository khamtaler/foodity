<template>
  <div>
    <router-link
      v-for="letter in alphabet"
      :to="{ name: 'byLetter', params: { letter } }"
      :key="{ letter }"
      class="px-1"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
</script>

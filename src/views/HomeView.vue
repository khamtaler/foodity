<template>
  <main>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <pre>{{ meals }}</pre>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import store from '../store'

const meals = computed(() => {
  return store.state.meals
})
</script>

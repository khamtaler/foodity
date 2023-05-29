<template>
  <div class="flex flex-col items-center">
    <TheAlphabet class="py-4" @search="search" />
    <main class="flex flex-col items-center">
      <p>{{ meals }}</p>
    </main>
  </div>
</template>

<script setup>
import TheAlphabet from '../components/TheAlphabet.vue'
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'

const searchedLetter = ref('')
const meals = computed(() => store.state.searchedLetter)
const route = useRoute()

function searchMealsByLetter() {
  store.dispatch('searchMealsByLetter', searchedLetter.value)
}

const search = (letter) => {
  console.log(letter)
  if (letter) {
    store.dispatch('searchMealsByLetter', letter)
  }
}

onMounted(() => {
  searchedLetter.value = route.params.letter
  console.log(route.params.letter)
  if (searchedLetter.value) {
    searchMealsByLetter()
  }
})
</script>

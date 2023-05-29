<template>
  <div class="flex flex-col items-center">
    <TheAlphabet class="py-4" @search="search" />
    <main class="flex flex-col items-center w-[90%]">
      <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 lg:w-[1000px] w-full">
        <BaseDishTile v-for="meal in meals" :meal="meal" />
      </div>
      <p v-if="!meals">Sorry there are no dishes starting with this letter yet</p>
    </main>
  </div>
</template>

<script setup>
import TheAlphabet from '../components/TheAlphabet.vue'
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import BaseDishTile from '../components/BaseDishTile.vue'

const searchedLetter = ref('')
const meals = computed(() => store.state.searchedLetter)
const route = useRoute()

function searchMealsByLetter() {
  store.dispatch('searchMealsByLetter', searchedLetter.value)
}

const search = (letter) => {
  if (letter) {
    store.dispatch('searchMealsByLetter', letter)
  }
}

onMounted(() => {
  searchedLetter.value = route.params.letter
  if (searchedLetter.value) {
    searchMealsByLetter()
  }
})
</script>

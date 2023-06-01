<template>
  <div class="flex flex-col items-center">
    <input
      class="py-4 my-4 rounded-lg w-[300px]"
      type="text"
      placeholder="search for meals"
      v-model="search"
      v-on:keyup.enter="saveWord"
      @change="searchMeals"
    />
    <main class="flex flex-col items-center">
      <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 p-3 gap-4 lg:w-[1000px] w-full">
        <BaseDishTile v-for="meal in meals" :meal="meal" />
      </div>
      <p v-if="!meals">Sorry there is no match for "{{ searchedWord }}" in the database</p>
    </main>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import router from '../router'
import BaseDishTile from '../components/BaseDishTile.vue'

const search = ref('')
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()
const searchedWord = ref('')

function saveWord() {
  searchedWord.value = search.value
  router.push({ params: { name: search.value } })
}

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

<template>
  <li class="inline-flex h-full items-center hover:bg-slate-400">
    <RouterLink :to="{ name: props.name }" class="sm:p-3 p-1">{{ props.title }}</RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  name: String,
  title: String
})
</script>

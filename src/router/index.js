import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListOfMeals from '../views/ListOfMeals.vue'
import SearchLetter from '../views/SearchLetter.vue'
import SearchIngredient from '../views/SearchIngredient.vue'
import SearchName from '../views/SearchName.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meals-by-letter/:letter?',
      name: 'MealsByLetter',
      component: SearchLetter
    },
    {
      path: '/meals-by-name/:name?',
      name: 'MealsByName',
      component: SearchName
    },
    {
      path: '/meals-by-ingredient/:ingredient?',
      name: 'MealsByIngredient',
      component: SearchIngredient
    }
  ]
})

export default router

import axiosClient from '../axiosClient'

export function searchMeals({ commit }, search) {
  axiosClient.get(`search.php?s=${search}`).then(({ data }) => {
    commit('setMeals', data.meals)
  })
}
export function searchMealsByLetter({ commit }, search) {
  axiosClient.get(`search.php?f=${search}`).then(({ data }) => {
    commit('setLetter', data.meals)
  })
}

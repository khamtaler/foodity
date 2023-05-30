export function setMeals(state, meals) {
  state.searchedMeals = meals
}
export function setLetter(state, letter) {
  state.searchedLetter = letter
}
export function saveDish(state, id) {
  state.savedDishes.push(id)
}
export function deleteDish(state, id) {
  state.savedDishes.filter((el) => el !== id)
}

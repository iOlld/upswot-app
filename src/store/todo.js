const store = {
  state: {
    todo: null,
  },
  getters: {
    todo: state => state.todo,
  },
  mutations: {
    SET_TODO (state, todo) {
      state.todo = todo
      localStorage.setItem('todos', JSON.stringify(state.todo))
    },
  },
  actions: {
    updateTodo ({ commit }, data) {
      commit('SET_TODO', data)
    },
  },
}

export default store
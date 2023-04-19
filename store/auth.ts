import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface State {
  active: boolean
  token: string
}

export const state = () =>
  ({
    active: false,
    token: '',
  } as State)

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  active: (state) => state.active,
}

export const mutations: MutationTree<RootState> = {
  SET_ACTIVE(state: RootState, active: boolean) {
    state.active = active
  },
}

export const actions: ActionTree<RootState, RootState> = {
  login({ commit }) {
    this.$axios
      .post('/auth/login')
      .then((response) => {
        commit('SET_ACTIVE', true)
        commit('SET_TOKEN', response.data.token)
        if (process.client) {
          localStorage.setItem('token', response.data.token)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

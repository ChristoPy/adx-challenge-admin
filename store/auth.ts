import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { makeHeaders } from '~/utils/request'

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
  SET_TOKEN(state: RootState, token: string) {
    state.token = token
  },
}

export const actions: ActionTree<RootState, RootState> = {
  login({ commit }, { username, password }) {
    this.$axios
      .post('/auth/login', {
        username,
        password,
      })
      .then((response) => {
        commit('SET_ACTIVE', true)
        commit('SET_TOKEN', response.data.access_token)
        this.$router.push('/')
        if (process.client) {
          localStorage.setItem('token', response.data.access_token)
        }
      })
      // @ts-ignore
      .catch(this.$toast.global.auth_error)
  },
  async verify({ commit }) {
    return this.$axios.get('/auth/verify', makeHeaders()).then(() => {
      commit('SET_ACTIVE', true)
      commit('SET_TOKEN', localStorage.getItem('token'))
    })
  },
}

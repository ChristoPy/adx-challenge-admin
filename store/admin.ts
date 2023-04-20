import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from '~/types'

interface State {
  toEdit: Product
}

export const state = () =>
  ({
    toEdit: {},
  } as State)

function makeHeaders() {
  const token = localStorage.getItem('token')
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  editing: (state) => state.toEdit,
}

export const mutations: MutationTree<RootState> = {
  SET_TO_EDIT(state: RootState, product: Product) {
    state.toEdit = product
  },
}

export const actions: ActionTree<RootState, RootState> = {
  startEditing({ commit }, product: Product) {
    commit('SET_TO_EDIT', product)
  },
  async updateProduct({ commit, state }, product: Product) {
    return (
      this.$axios
        .patch(`/products/${product._id}`, product, makeHeaders())
        // @ts-ignore
        .catch(this.$toast.global.update_product_error)
    )
  },
}

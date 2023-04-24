import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from '~/types'
import { makeHeaders } from '~/utils/request'

interface State {
  toEdit: Product
  toDelete: Product
  creating: Boolean
}

export const state = () =>
  ({
    toEdit: {},
    toDelete: {},
  } as State)

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  editing: (state) => state.toEdit,
  deleting: (state) => state.toDelete,
  creating: (state) => state.toEdit,
}

export const mutations: MutationTree<RootState> = {
  SET_TO_EDIT(state: RootState, product: Product) {
    state.toEdit = product
  },
  SET_TO_DELETE(state: RootState, product: Product) {
    state.toDelete = product
  },
}

export const actions: ActionTree<RootState, RootState> = {
  startEditing({ commit }, product: Product) {
    commit('SET_TO_EDIT', product)
  },
  updateProduct(_, product: Product) {
    return (
      this.$axios
        .patch(`/products/${product._id}`, product, makeHeaders())
        // @ts-ignore
        .catch(this.$toast.global.update_product_error)
    )
  },
  startDeleting({ commit }, product: Product) {
    commit('SET_TO_DELETE', product)
  },
  deleteProduct(_, product: Product) {
    return (
      this.$axios
        .delete(`/products/${product._id}`, makeHeaders())
        // @ts-ignore
        .catch(this.$toast.global.delete_product_error)
    )
  },
  createProduct(_, product: Product) {
    return (
      this.$axios
        .post(`/products`, product, makeHeaders())
        .then((res) => res.data)
        // @ts-ignore
        .catch(this.$toast.global.create_product_error)
    )
  },
}

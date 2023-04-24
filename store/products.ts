import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from '~/types'

interface State {
  all: Product[]
}

export const state = () =>
  ({
    all: [],
  } as State)

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  products: (state) => state.all,
}

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTS(state: RootState, products: Product[]) {
    state.all = products
  },
  SET_PRODUCT(state: RootState, product: Product) {
    state.all = state.all.map((p) => (p._id === product._id ? product : p))
  },
  REMOVE_PRODUCT(state: RootState, product: Product) {
    state.all = state.all.filter((p) => p._id !== product._id)
  },
  ADD_PRODUCT(state: RootState, product: Product) {
    state.all.push(product)
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async getProducts({ commit }) {
    const products = await this.$axios.$get('/products')
    commit('SET_PRODUCTS', products)
  },
  setProduct({ commit }, product: Product) {
    commit('SET_PRODUCT', product)
  },
  removeProduct({ commit }, product: Product) {
    commit('REMOVE_PRODUCT', product)
  },
  addProduct({ commit }, product: Product) {
    commit('ADD_PRODUCT', product)
  },
}

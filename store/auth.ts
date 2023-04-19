import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface State {
  active: boolean
}

export const state = () =>
  ({
    active: false,
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

export const actions: ActionTree<RootState, RootState> = {}

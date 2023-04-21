import { Context } from '@nuxt/types'

export default function ({ redirect, store, route }: Context) {
  if (route.path !== '/logout') {
    return
  }

  if (process.client) {
    localStorage.removeItem('token')
  }
  store.commit('auth/SET_ACTIVE', false)
  store.commit('auth/SET_TOKEN', '')
  redirect('/login')
}

import { Context } from '@nuxt/types'

export default function ({ redirect, store, route }: Context) {
  const isAuthenticated = !!store.state.auth.active
  if (!isAuthenticated && route.fullPath !== '/login') {
    redirect({ name: 'login' })
  }
}

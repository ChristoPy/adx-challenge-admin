import { Context } from '@nuxt/types'

export default function ({ redirect, store }: Context) {
  const isAuthenticated = !!store.state.auth.active
  if (!isAuthenticated) {
    redirect({ name: 'login' })
  }
}

import { Context } from '@nuxt/types'

export default function ({ redirect, store }: Context) {
  const isAuthenticated = !!store.state.auth.user
  if (!isAuthenticated) {
    redirect({ name: 'login' })
  }
}

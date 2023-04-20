export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'store-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // @nuxtjs/toast
    '@nuxtjs/toast',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Server configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-server
  server: {
    port: 8081, // default: 3000
  },

  router: {
    middleware: ['auth'],
  },

  toast: {
    position: 'bottom-center',
    register: [
      {
        name: 'auth_error',
        message: 'Usuário ou senha inválidos',
        options: {
          type: 'error',
          singleton: true,
          duration: 3000,
        },
      },
      {
        name: 'update_product_error',
        message: 'Não foi possível atualizar o produto',
        options: {
          type: 'error',
          singleton: true,
          duration: 3000,
        },
      },
      {
        name: 'delete_product_error',
        message: 'Não foi possível remover o produto',
        options: {
          type: 'error',
          singleton: true,
          duration: 3000,
        },
      },
    ],
  },
}

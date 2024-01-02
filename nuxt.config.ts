// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL ?? '',
    },
  },

  devtools: { enabled: true },

  routeRules: {
    '/news/**': { ssr: false },
  },

  ssr: false,

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vee-validate/nuxt'],

  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/scss/main.scss'],

  plugins: [{ src: '~/plugins/fontawesome.ts' }],

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/scss/main.scss'],

  plugins: [{ src: '~/plugins/fontawesome.ts' }],
})

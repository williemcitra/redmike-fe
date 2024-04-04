// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-medusa',  'nuxt-primevue', '@pinia/nuxt'],
  server: {
    host: '0.0.0.0'
  },
  medusa: {
    baseUrl: 'http://localhost:9000',
    maxRetries: 3,
    global: true,
    server: true
  },
  primevue: {
      /* Options */
  },
  css: ['/node_modules/primeflex/primeflex.css', '@/assets/css/style.css'],
  ssr: true
})

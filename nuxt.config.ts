// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-medusa',  'nuxt-primevue', '@pinia/nuxt'],
  css: ['/node_modules/primeflex/primeflex.css', '@/assets/css/style.css'],
  ssr: false
})

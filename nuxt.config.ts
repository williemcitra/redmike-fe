// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-medusa',  'nuxt-primevue'],
  css: ['/node_modules/primeflex/primeflex.css', '@/assets/css/style.css'],
  ssr: true
})

import { useStorage } from '@vueuse/core'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchTitle: useStorage('searchTitle', ''),
    clickCount: 0
  }),
  getters: {
    getClickCount: (state) => state.clickCount
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
}

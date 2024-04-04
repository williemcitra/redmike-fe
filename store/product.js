import { useStorage } from '@vueuse/core'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useProductStore = defineStore('product', {
  actions: {
    async searchProducts (param) {
      const client = useMedusaClient();
      return await client.products.search(param)
    },
    async searchProducts (param) {
      const client = useMedusaClient();
      return await client.products.search(param)
    },
    async getProductList () {
      const client = useMedusaClient();
      return await client.products.list()
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}

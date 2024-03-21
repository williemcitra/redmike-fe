import { useStorage } from '@vueuse/core'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: useStorage('cart',
      {id: '', items: []}),
  }),
  actions: {
    setCart(cart) {
      this.cart = cart
    },
    async createCart () {
      const client = useMedusaClient();
      return await client.carts.create()
    },
    async addItemToCart (cartId, param) {
      const client = useMedusaClient();
      return await client.carts.lineItems.create(cartId, param)
    },
    async updateItemQuantityToCart (cartId, lineItemId, quantity) {
      const client = useMedusaClient();
      return await client.carts.lineItems.update(cartId, lineItemId, { quantity })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}

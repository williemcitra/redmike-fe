<template>
  <div class="grid layout-margin gap-3">
    <div class="col-6">
      <div class="grid">
        {{cartStore}}
        <div class="col-12 text-2xl font-medium">
          Keranjang Anda
        </div>
        <div v-for="item in cartStore.cart.items" class="col-12">
          <div class="flex flex-row gap-3">
            <!-- {{item}} -->
            <img :src="item.thumbnail" style="max-width: 200px; max-height: 200px;">
            <div class="flex flex-column gap-3">
              <div class="text-base">{{ item.title }}</div>
              <div class="font-bold">Rp {{ item.unit_price }}</div>
              <div>
                Qty:
                <InputNumber v-model="item.quantity" inputId="minmax-buttons" mode="decimal" showButtons :min="0"
                  :max="100" @input="updateCartQuantity(item)" />
              </div>
              <small class="text-red-600 cursor-pointer">Remove</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-5 flex flex-column gap-2">
      <Card class="border-1 border-solid border-400 bg-gray-50">
        <template #title>
          Order Anda
        </template>
        <template #content>
          <div class="flex flex-column gap-3">
            <div v-for="item in cartStore.cart.items" class="flex flex-row justify-content-between">
              <div class="col-auto">{{ item.title }}</div>
              <div class="col-auto font-bold">Rp {{ (item.unit_price * item.quantity).toLocaleString('id-ID') }}</div>
            </div>
            <Divider/>
            <!-- asd -->
            <div class="flex flex-row justify-content-between">
              <div class="col-auto text-xl font-bold">Total</div>
              <div class="col-auto font-bold">Rp {{ cartStore.cart.total }}</div>
            </div>
            <Button label="Checkout" @click="completeCart"></Button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';
import { onMounted } from 'vue';

const cartStore = useCartStore()
const total = computed(() => {
  let total = 0
  cartStore.cart.items.forEach(item => {
    total = total + item.unit_price
  })
  return total
})

async function updateCartQuantity(item) {
  console.log(item)
  const response = await cartStore.updateItemQuantityToCart(cartStore.cart.id, item.id, item.quantity)
  cartStore.setCart(response.cart)
}

async function completeCart() {
  const response = await cartStore.completeCart(cartStore.cart.id)
  cartStore.setCart(response.cart)
}

</script>
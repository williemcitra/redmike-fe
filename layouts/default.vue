<template>
  <div class="fixed bg-white w-full layout-margin z-5 shadow-2 flex flex-row justify-content-between align-items-center h-6rem">
    <div class="col-auto flex flex-row gap-6">
      <div class="cursor-pointer" @click="$router.push('/')">Logo</div>
      <div class="flex flex-row align-items-center text-600 font-medium cursor-pointer">
        <span class="mr-2">Kategori</span>
        <i class="pi pi-angle-down"></i>
      </div>
    </div>
    <div class="col-6 flex flex-row align-items-center">
      <InputGroup class="h-3rem">
        <InputText class="w-9rem px-3" placeholder="Price" />
        <Button class="px-4" label="Cari"></Button>
      </InputGroup>
    </div>
    <div>
      {{ cartStore.cart.items.length }}
      <i :v-badge="cartStore.cart.items.length" class="pi pi-envelope cursor-pointer" style="font-size: 2rem" @click="$router.push('/my-cart')" />
    </div>
  </div>
  <div class="w-full flex flex-column gap-0" style="padding-top: 144px;">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore()

onMounted(async () => {
  if (!cartStore.cart.id) await createCart()
})

async function createCart() {
  const response = await cartStore.createCart()
  cartStore.setCart(response.cart)
}

</script>

<style scoped></style>
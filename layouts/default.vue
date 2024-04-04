<template>
  <!-- <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div class="font-bold mr-8">🔥 Diskon 10% untuk semua item !</div>
      <div class="align-items-center hidden lg:flex">
          <span class="line-height-3">Diskon semua item yang ada di website seharga untuk item dibawah Rp 50k</span>
      </div>
      <a class="flex align-items-center ml-2 mr-8">
          <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
      </a>
      <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
          <i class="pi pi-times"></i>
      </a>
  </div> -->
  <a target="_blank" :href="'https://wa.me/085929850933?text=Halo%20Redmike,%20Saya%20ingin%20order%20produk%20'">
    <div class="fixed flex justify-content-center align-items-center px-3 gap-0" style="border-radius: 180px; bottom: 40px; right: 20px; height: 60px; z-index: 400;">
      <i class="p-3 shadow-3 border-circle bg-green-500 text-white pi pi-whatsapp text-4xl" style="z-index: 399;" />
      <span class="px-3 py-3 shadow-3 bg-green-50 text-700 font-medium" style="margin-left: -12px; border-radius: 0 255px 255px 0;">Chat dengan Kami</span>
    </div>
  </a>
  <div class="fixed bg-white layout-margin z-5 shadow-2 flex flex-row justify-content-between align-items-center h-6rem w-full">
    <div class="col-auto flex flex-row gap-6">
      <div class="flex flex-column align-items-center gap-0 cursor-pointer" @click="$router.push('/')">
        <img :src="redmike_logo" style="min-height: 48px; max-height: 64px;" />
        <small style="margin-top: -8px;">Action Figure & Hobby Shop</small>
      </div>
      <!-- <div class="flex flex-row align-items-center text-600 font-medium cursor-pointer">
        <span class="mr-2">Kategori</span>
        <i class="pi pi-angle-down"></i>
      </div> -->
    </div>
    <div class="col-6 flex flex-row align-items-center">
      <InputGroup class="h-3rem">
        <InputText v-model="searchStore.searchTitle" class="w-9rem px-3" placeholder="Cari Disini"  @keyup.enter="goToSearch" />
        <Button class="px-4" label="Cari" @click="goToSearch" @keyup.enter="goToSearch"></Button>
      </InputGroup>
    </div>
    <!-- <div>
      {{ cartStore.cart.items.length }}
      <i :v-badge="cartStore.cart.items.length" class="pi pi-envelope cursor-pointer" style="font-size: 2rem" @click="$router.push('/my-cart')" />
    </div> -->
  </div>
  <div class="flex flex-column gap-0" style="padding-top: 144px; padding-bottom: 80px;">
    <div  style="min-height: 640px;" >
      <router-view/>
    </div>
  </div>
  <div class="flex flex-row justify-content-between h-8rem align-items-center layout-margin bg-primary-700 text-primary-50">
    <div class="col-auto">Redmike 2023 All Rights Reserved.</div>
    <div class="col-auto flex flex-column gap-2">
      <div>Contact</div>
      <div class="flex flex-row gap-2">
        <Button icon="pi pi-phone" severity="secondary"></Button>
        <Button icon="pi pi-whatsapp" severity="secondary"></Button>
      </div>
    </div>
    <!-- <div class="col-auto">123</div> -->
    <!-- <div class="col-auto">123</div> -->
  </div>
</template>

<script lang="ts" setup>
import redmike_logo from '@/assets/images/redmike_logo.png'
import { useSearchStore } from '@/store/search.js'
// const { data } = await useFetch('/api/cart')

const searchStore = useSearchStore()
const router = useRouter()
onMounted(() => {
  // searchStore.searchTitle = 'asde12e12'
})

function goToSearch() {
  searchStore.clickCount = searchStore.clickCount + 1
  router.push('/search?searchTitle=' + searchStore.searchTitle)
}

// import { useCartStore } from '~/store/cart';

// const cartStore = useCartStore()

// onMounted(async () => {
//   console.log(cartStore.cart.id)
//   if (!cartStore.cart.id) await createCart()
//   else retrieveCart(cartStore.cart.id)
// })

// async function retrieveCart(id) {
//   const response = await cartStore.retrieveCart(id)
//   console.log(response)
//   cartStore.setCart(response.cart)
// }

// async function createCart() {
//   const response = await cartStore.createCart()
//   cartStore.setCart(response.cart)
// }

</script>

<style scoped></style>
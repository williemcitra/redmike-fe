<template>
  <NuxtLink @click="goToPage" style="text-decoration: none;">
    <div class="cursor-pointer p-0 m-0 pb-4 product-card shadow-1 border-1 border-solid border-300 border-round bg-white">
      <div class="flex flex-column gap-2 p-0 m-0">
        <img style="aspect-ratio: 1; object-fit: cover;" class="max-w-full border-round border-noround-bottom" :src="product.thumbnail">
        <span style="min-height: 32px;" class="px-3 text-700 font-bold text-sm title-text" :title="product.title">{{ product.title }}</span>
        <small class="px-3 font-medium text-500 h-1rem">{{ product && product.metadata && product.metadata.brand && product.metadata.brand ? product.metadata.brand : '' }}</small>
        <span class="px-3 text-primary font-bold">Rp {{ formatPriceIDR(product?.variants[0]?.prices[0]?.amount) }}</span>
        <div class="px-3">
          <a target="_blank" :href="'https://wa.me/085929850933?text=Halo%20Redmike,%20Saya%20ingin%20order%20produk%20' + product.title">
            <Button class="w-full" label="Order" icon="pi pi-whatsapp"></Button>
          </a>
        </div>
      </div>

    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['product'])
const router = useRouter()

function goToPage() {
  const route = useRoute()
  console.log(route)
  if (route.name === 'products-id') {
    router.push(`/products/${props.product.id}`)
  } else router.push(`/products/${props.product.id}`)
}
</script>

<style scoped>
.title-text {
  /* width: 1; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* border: 1px solid #000000; */
}
</style>
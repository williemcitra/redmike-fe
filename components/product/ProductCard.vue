<template>
  <NuxtLink :to="`/products/${product.handle}`">
    <div class="p-0 m-0 pb-4  product-card shadow-1 border-round bg-white" style="height: 99%;">
      <div class="flex flex-column gap-2 p-0 m-0">
        <img class="max-w-full border-round border-noround-bottom" :src="product.thumbnail">
        <span style="min-height: 32px;" class="px-3 text-900 font-medium text-base">{{ product.title }}</span>
        <span class="px-3 text-primary font-bold">Rp {{ product?.variants[0]?.prices[0]?.amount.toLocaleString('id-ID')
          }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['product'])
</script>

<style></style>
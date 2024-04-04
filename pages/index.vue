<template>
  <div class="grid gap-4 bg-gray-50">
    <div class="col-12">
      <div class="grid grid-nogutter surface-section text-800 layout-margin" style="height: 720px;">
        <div class="col-12 md:col-6 text-center md:text-left flex align-items-center ">
          <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
          </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
          <!-- <img src="/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full"
            style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" /> -->
        </div>
      </div>
    </div>
    <div class="col-12 grid layout-margin">
      <div class="col-12 flex flex-row justify-content-between">
        <div class="text-xl font-bold">Matchbox Terbaru</div>
        <!-- <div class="text-primary font-medium cursor-pointer">Lihat Semua</div> -->
      </div>
      <div class="col-12">
        <ProductSections :products="matchBoxProducts.products" />
      </div>
    </div>
    <div class="col-12 grid layout-margin">
      <div class="col-12 flex flex-row justify-content-between">
        <div class="text-xl font-bold">Hot Wheels Terbaru</div>
        <!-- <div class="text-primary font-medium cursor-pointer">Lihat Semua</div> -->
      </div>
      <div class="col-12">
        <ProductSections :products="hotWheelsProducts.products" />
      </div>
    </div>
    <!-- <div class="col-12">
      <div v-for="(product, index) in products.products">
        {{ product.id }} {{ index }}
      </div>
    </div> -->
    <div class="col-12 layout-margin grid bg-primary-700 py-4">
      <div class="col-12 text-xl font-bold text-50">Semua Item</div>
      <div class="col-12 w-full flex-column" style="overflow-y: hidden;">
        <div class="flex flex-row flex-wrap gap-3">
          <div v-for="product in products.products" :key="product.id" class="col-6 md:col-4 lg:col-3 grid">
            <!-- {{product.id}} -->
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 layout-margin flex flex-row flex-wrap" ref="el">
    </div>
  </div>

</template>


<script setup>
import ProductSections from '@/components/scrollable/ProductSections.vue';
import { useInfiniteScroll } from '@vueuse/core'

const { data: products } = await useFetch('/api/products?limit=3&offset=0')
const { data: hotWheelsProducts } = await useFetch('/api/products?q=hot wheels')
const { data: matchBoxProducts } = await useFetch('/api/products?q=matchbox')

const el = ref(null)
const infiniteData = ref([1])
const offset = ref(1)

onMounted(async () => {
  useInfiniteScroll(
    el,
    async () => {
      const fetch = await $fetch('/api/products?limit=3&offset=' + offset.value)
      // console.log(offset.value)
      offset.value = offset.value + 3

      console.log(fetch.products.length, products.value.products.length)
      products.value.products.push(...fetch.products)
      // console.log(products.value.products.length)
    }
  )
})

</script>
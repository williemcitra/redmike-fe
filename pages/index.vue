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
        <div class="text-xl font-bold">Most Popular</div>
        <div class="text-primary font-medium cursor-pointer">Lihat Semua</div>
      </div>
      <div class="col-12">
        <ProductSections :products="products" />
      </div>
    </div>
    <div class="col-12 grid layout-margin">
      <div class="col-12 flex flex-row justify-content-between">
        <div class="text-xl font-bold">Most Popular</div>
        <div class="text-primary font-medium cursor-pointer">Lihat Semua</div>
      </div>
      <div class="col-12">
        <ProductSections :products="products" />
      </div>
    </div>
    <div class="col-12 grid layout-margin">
      <div class="col-12 text-xl font-bold">All Items</div>
      <div class="col-12">
        <ProductSections :products="products" />
      </div>
    </div>
    <div class="col-12 ">
      <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-700 text-center">
          <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
          <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
          <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
            eligendi quos.</div>
          <Button label="Join Now" icon="pi pi-discord"
            class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import ProductSections from '@/components/scrollable/ProductSections.vue';

// definePageMeta({
//   layout: 'default'
// })

const client = useMedusaClient();
const { products } = await client.products.list();
</script>
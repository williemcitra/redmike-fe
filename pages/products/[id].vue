<template>
  <div class="layout-margin flex flex-column gap-3 mt-4">
    <div class="flex flex-row flex-column lg:flex-row justify-content-start gap-3">
      <div class="col-12 lg:col-4">
        <!-- {{ data.images }} -->
        <Galleria v-if="data.images && data.images.length > 0" :value="data.images" :responsiveOptions="responsiveOptions" :numVisible="5"
          >
          <template #item="slotProps">
            <img :src="slotProps.item.url" :alt="slotProps.item.alt" style="width: 100%; height: 100%; aspect-ratio: 1;" />
          </template>

          <template #thumbnail="slotProps">
            <img style="max-width: 64px;" :src="slotProps.item.url" :alt="slotProps.item.alt" />
          </template>
        </Galleria>
      </div>
      <div class="flex flex-column col-12 lg:col-6 gap-4">
        <div class="flex flex-column gap-2">
          <div v-if="data && data.title" class="text-2xl font-bold text-900">
            {{ data.title }}
          </div>
          <!-- <div v-if="data && data.metadata && data.metadata.manufacturer" class="text-600">By {{ data.metadata.manufacturer }}</div> -->
          <div class="flex flex-column gap-2">
            <span v-if="data && data.variants" class="text-2xl text-primary font-bold">
              Rp {{ formatPriceIDR(data?.variants[0]?.prices[0]?.amount) }}
            </span>
          </div>
          <!-- {{ route.params }}sad -->
          <p class="line-height-4 text-sm" v-html="data.description"></p>
        </div>

        <div class="flex flex-row align-items-end gap-3">
          <!-- <div class="flex flex-column gap-2">
            <small>Qty.</small>
            <Dropdown v-model="quantity" class="h-3rem align-items-center" placeholder="Quantity" :options="quantityOptions" />
          </div> -->
          <a target="_blank" :href="'https://wa.me/085929850933?text=Halo%20Redmike,%20Saya%20ingin%20order%20produk%20' + data.title">
            <Button class="h-3rem" label="Order By Whatsapp" icon="pi pi-whatsapp"click="updateCart" />
          </a>
            <!-- <Button class="w-full h-3rem" type="button" label="Wishlist" icon="pi pi-heart-fill" badge="2" badgeSeverity="primary" outlined /> -->
            <!-- <Button class="w-full h-3rem" label="Wishlist" outlined>
              <i class="pi pi-heart-fill mr-2"></i>
              Add to wishlist
            </Button> -->
        </div>
        <div class="flex flex-row gap-2">
          <Button icon="pi pi-link" severity="secondary" @click="copyToClipboard"></Button>
          <!-- <Button icon="pi pi-whatsapp" severity="secondary"></Button>
          <Button icon="pi pi-facebook" severity="secondary"></Button>
          <Button icon="pi pi-instagram" severity="secondary"></Button> -->
        </div>

        <div class="flex flex-column gap-2">
          <div>Tags: </div>
          <div class="flex flex-row gap-2">
            <div v-for="(tag, index) in data.tags">
              <Button :label="tag.value" severity="secondary" @click="goToSearchByTag(index)"></Button>
            </div>
          </div>
        </div>
        <!-- <div class="flex flex-column gap-2">
          <div v-for="(value, key) in data.metadata">
            {{ key }}: {{ value }}
          </div>
        </div> -->
      </div>
    </div>
    <!-- {{ similiarProducts }} -->
    <div v-if="similiarProducts.length > 0" class="flex flex-column gap-2 mt-6">
      <div class="text-xl font-bold">Similiar Products</div>
      <ProductSections :products="similiarProducts"></ProductSections>
    </div>
  </div>
</template>

<script setup>
// const client = useMedusaClient();
import ProductSections from '@/components/scrollable/ProductSections.vue';
// import { useCartStore } from '~/store/cart';
const toast = useToast()
definePageMeta({
  layout: 'default'
})

const route = useRouter().currentRoute.value
const router = useRouter()
const similiarProducts = ref([])
const { data } = await useFetch('/api/products/' + route.params.id)

onMounted(async () => {
  try {
    const id = data.value.tags[0].id
    if (id) {
      let fetchSimiliarProducts = await $fetch(`/api/products?tags=${id}&limit=5`)
      similiarProducts.value = fetchSimiliarProducts.products.filter(similiarProduct => similiarProduct.id !== data.value.id)
    }
  } catch(e) {
    console.log(e)
  }
})

function copyToClipboard() {
  window.navigator.clipboard.writeText('asd');
  toast.add({
    summary: 'Berhasil Copy URL',
    severity: 'secondary',
    life: 5000,
    title: 'Berhasil Copy URL'
  })
}

function goToSearchByTag(index) {
  const id = data.value.tags[index].id
  router.push('/search?tags=' + id)
}

</script>
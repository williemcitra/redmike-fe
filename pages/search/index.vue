<template>
  <div v-if="data && data.products && data.products.length > 0" class="grid gap-0 layout-margin">
    <div class=" col-6 md:col-6 h-4rem align-items-center flex px-3">
      <span v-if="searchedText">
        Hasil Pencarian "<span class="font-bold">{{ searchedText }}</span>"
        menampilkan {{ data.products.length }} item
      </span>

    </div>
    <div class="col-6 md:col-6 h-4rem text-right flex flex-row justify-content-end">
      <Dropdown v-model="order" class="flex align-items-center mr-3" :options="sortOptions" optionLabel="text"
        optionValue="value" @change="searchProducts" />
      <!-- <Dropdown v-model="page" class="flex align-items-center" :options="[1, 2, 3]" @change="searchProducts" /> -->
    </div>
    <div v-if="loading" class="col-12 flex flex-wrap">
      <div v-for="i in 8" class="col-6 md:col-3 lg:col-3">
        <Skeleton class="h-18rem" />
      </div>
    </div>
    <div v-if="!loading" class="col-12 flex flex-wrap">
      <div v-for="product in data.products" class="col-6 md:col-3 lg:col-3">
        <ProductCard :product="product" />
      </div>
    </div>
    <!-- <div class="col-12 flex gap-2 justify-content-end">
      <Button v-if="page > 1" severity="secondary" label="Sebelumnya"
        @click="page = page - 1; onPageChanged();"></Button>
      <Button severity="secondary" label="Berikutnya"
        @click="page = page + 1; onPageChanged();"></Button>
    </div> -->
  </div>
  <div v-else class="layout-margin col-8 flex text-xl">
    Produk tidak ditemukan
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/store/search';
const route = useRouter().currentRoute.value
const searchStore = useSearchStore()
// const data = ref({})
const itemPerPage = ref(4)
const page = ref(1)
const offset = ref(0)
const order = ref('-variants.prices.amount')
const { data } = await useFetch(`/api/products?limit=100&title=${route.query.searchTitle}&tags=${route.query.tags}&offset=0&order=${order.value}`)
const { getClickCount } = storeToRefs(searchStore)
const loading = ref(false)

const searchedText = ref('')
const sortOptions = ref([
  { text: 'Terbaru', value: '-created_at' },
  { text: 'Harga Tertinggi', value: '-variants.prices.amount' },
  { text: 'Harga Terendah', value: 'variants.prices.amount' },
])

onUnmounted(() => {
  searchStore.searchTitle = ''
})

async function searchProducts() {
  loading.value = true

  try {
    const fetch = await $fetch(`/api/products?limit=100&title=${searchStore.searchTitle}&offset=0&order=${order.value}`)
    searchedText.value = searchStore.searchTitle
    data.value.products = fetch.products
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

watch(getClickCount, (newValue, oldValue) => {
  searchProducts()
})

function onPageChanged() {
  if (page.value === 1) offset.value = 0
  else offset.value = itemPerPage.value * page.value
  searchProducts()
}

</script>
<template>
  <div class="layout-margin flex flex-column gap-3 mt-4">
    <div class="flex flex-row flex-column lg:flex-row justify-content-start gap-3">
      <!-- <img class="border-round" style="max-width: 480px; height: auto;" :src="product.thumbnail"> -->
      <div class="col-12 lg:col-6">
        <Galleria v-if="product.images && product.images.length > 0" :value="product.images" :responsiveOptions="responsiveOptions" :numVisible="5"
        >
        <template #item="slotProps">
          <img :src="slotProps.item.url" :alt="slotProps.item.alt" style="width: 100%; min-height: 480px; max-height: 480px" />
        </template>

        <template #thumbnail="slotProps">
          <img style="max-width: 100px;" :src="slotProps.item.url" :alt="slotProps.item.alt" />
        </template>
      </Galleria>
      </div>
      <div class="flex flex-column col-12 lg:col-6 gap-4">
        <div class="flex flex-column gap-2">
          <div class="text-3xl font-medium text-900">
            {{ product.title }}
          </div>
          <div class="text-600">By Bandai</div>
        </div>
        <div class="flex flex-column gap-2">
          <!-- <span class="text-sm text-700">Harga</span> -->
          <span v-if="product && product.variants" class="text-2xl text-primary font-bold">Rp {{
        product?.variants[0]?.prices[0]?.amount }}</span>
        </div>
        <div class="flex flex-row align-items-end gap-3">
          <div class="flex flex-column gap-2">
            <small>Qty.</small>
            <Dropdown v-model="order.quantity" class="h-3rem align-items-center" placeholder="Quantity" :options="quantityOptions" />
          </div>
          <Button class="w-full h-3rem" label="Add to Cart" @click="updateCart" />
          <Button class="w-full h-3rem" type="button" label="Wishlist" icon="pi pi-heart-fill" badge="2" badgeSeverity="primary" outlined />
          <!-- <Button class="w-full h-3rem" label="Wishlist" outlined>
            <i class="pi pi-heart-fill mr-2"></i>
            Add to wishlist
          </Button> -->
        </div>
        <div class="flex flex-row gap-2">
          <Button icon="pi pi-link" severity="secondary"></Button>
          <Button icon="pi pi-whatsapp" severity="secondary"></Button>
          <Button icon="pi pi-facebook" severity="secondary"></Button>
          <Button icon="pi pi-instagram" severity="secondary"></Button>
          <!-- <Button icon="pi pi-twitter" severity="secondary"></Button> -->
        </div>
        <div class="flex flex-column gap-2">
          <div v-for="(value, key) in product.metadata">
            {{ key }}: {{ value }}
          </div>
        </div>
        <!-- <div>
          <p class="line-height-4 text-sm" v-html="product.description">
          </p>
        </div> -->
      </div>
    </div>
    <div v-if="similiarProducts.length > 0" class="flex flex-column gap-2 mt-6">
      <div class="text-xl font-bold">Similiar Products</div>
      <ProductSections :products="similiarProducts"></ProductSections>
    </div>
  </div>
</template>

<script setup>
const client = useMedusaClient();
import ProductSections from '@/components/scrollable/ProductSections.vue';
import { useCartStore } from '~/store/cart';

definePageMeta({
  layout: 'default'
})
const cartStore = useCartStore()
const order = ref({
  quantity: 1
})
const quantityOptions = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const route = useRoute()
const product = ref([])
const similiarProducts = ref([])

onMounted(async () => {

  // setCartId()
  const handle = route.params.id
  const fetch = await client.products.list({ handle });
  if (fetch?.response?.status === 200 && fetch?.products.length > 0) {
    console.log(fetch.products)
    product.value = fetch.products[fetch.products.findIndex(product => product.handle.includes(handle))]
  }
  const fetchSimiliarProducts = await client.products.list();
  console.log(fetchSimiliarProducts)
  if (fetchSimiliarProducts?.response?.status === 200 && fetchSimiliarProducts?.products.length > 0) {
    similiarProducts.value = fetchSimiliarProducts.products
  }
})

async function createCart() {
  const response = await cartStore.createCart()
  cartStore.setCart(response.cart)
}

async function updateCart() {
  // console.log(product.value.variants[0].id)
  const cartId = cartStore.cart.id
  if (!cartId) await createCart()
  const response = await cartStore.addItemToCart(cartId, {variant_id: product.value.variants[0].id, quantity: 1})
  cartStore.setCart(response.cart)
}
</script>
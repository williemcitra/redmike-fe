<template>
  <div class="flex flex-column">
    asd
    <div>{{  }}</div>
  </div>
</template>

<script setup>
const client = useMedusaClient();
const { products } = await client.products.list();
onMounted(() => {

})
</script>
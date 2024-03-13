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
    <div>asdasdsa</div>
  </div>
  <div class="w-full flex flex-column gap-0" style="padding-top: 108px;">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<template>
  <table class="table-auto w-full shadow-md">
    <thead class="border">
      <tr>
        <th class="px-4 py-2 text-left w-2"></th>
        <th class="px-4 py-2 text-left">Imagem</th>
        <th class="px-4 py-2 text-left">Nome</th>
        <th class="px-4 py-2 text-left border">Preço</th>
        <th class="px-4 py-2 text-left">Estoque</th>
      </tr>
    </thead>
    <tbody>
      <ProductTableItem
        v-for="product of $store.getters['products/products']"
        :key="product._id"
        :product="product"
      />
    </tbody>
  </table>
</template>

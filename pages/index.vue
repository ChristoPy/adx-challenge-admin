<template>
  <section class="py-8 mt-12 px-4">
    <div class="container mx-auto max-w-5xl">
      <h1 class="font-bold text-4xl my-4 py-8">Produtos</h1>
      <ProductsTable />
      <ModalEdit />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head: {
    title: 'Painel',
  },
  created() {
    this.$store.dispatch('products/getProducts')
  },
})
</script>

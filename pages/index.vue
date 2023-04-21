<template>
  <section class="py-8 mt-12 px-4">
    <div v-if="loading == false" class="container mx-auto max-w-5xl">
      <h1 class="font-bold text-4xl my-4 py-8">Produtos</h1>
      <ProductsTable />
      <ModalEdit />
      <ModalConfirmDeletion />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    loading: true,
  }),
  head: {
    title: 'Painel',
  },
  created() {
    this.$store.dispatch('auth/verify').then(() => {
      this.$store.dispatch('products/getProducts')
      this.loading = false
    }).catch(() => {
      this.$router.push('/login')
    })
  },
})
</script>

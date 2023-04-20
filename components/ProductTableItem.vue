<script lang="ts">
import Vue from 'vue'
import { Product } from '@/types'
import { formatMoney } from '@/utils/money'

export default Vue.extend({
  name: 'ProductTableItem',
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$store.dispatch('admin/startEditing', this.product)
      this.$router.push('/#modal-edit')
    },
    formatMoney,
  },
})
</script>

<template>
  <tr class="odd:bg-gray-100 hover:bg-gray-200">
    <td class="border px-4 py-2">
      <div class="flex gap-2">
        <EditButton :product="product" />
        <DeleteButton :product="product" />
      </div>
    </td>
    <td class="border px-4 py-2" style="width: 136px">
      <ProductThumbnail :image="product.image" :name="product.name" />
    </td>
    <td class="border px-4 py-2">{{ product.name }}</td>
    <td class="border px-4 py-2">{{ formatMoney(product.price) }}</td>
    <td class="border px-4 py-2">{{ product.quantity }}</td>
  </tr>
</template>

<script setup lang="ts">
import { Product } from '~/types'
import { formatMoney } from '~/utils/money'

defineProps<{
  product: Product
}>()
</script>

<template>
  <tr class="odd:bg-gray-100">
    <td class="border px-4 py-2">{{ product.name }}</td>
    <td class="border px-4 py-2">{{ formatMoney(product.price) }}</td>
    <td class="border px-4 py-2">{{ product.quantity }}</td>
  </tr>
</template>

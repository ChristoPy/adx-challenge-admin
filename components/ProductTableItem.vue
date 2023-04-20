<script setup lang="ts">
import { Product } from '~/types'
import { formatMoney } from '~/utils/money'

defineProps<{
  product: Product
}>()
</script>

<template>
  <tr class="odd:bg-gray-100 hover:bg-gray-200">
    <td class="border px-4 py-2">
      <router-link :to="{ name: 'products.edit', params: { id: product._id } }">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 hover:text-gray-700" viewBox="0 0 24 24"
          fill="inherit">
          <g data-name="Layer 2">
            <g data-name="edit">
              <rect width="24" height="24" opacity="0"></rect>
              <path
                d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z">
              </path>
            </g>
          </g>
        </svg>
      </router-link>
    </td>
    <td class="border px-4 py-2" style="width: 136px">
      <ProductThumbnail :image="product.image" :name="product.name" />
    </td>
    <td class="border px-4 py-2">{{ product.name }}</td>
    <td class="border px-4 py-2">{{ formatMoney(product.price) }}</td>
    <td class="border px-4 py-2">{{ product.quantity }}</td>
  </tr>
</template>

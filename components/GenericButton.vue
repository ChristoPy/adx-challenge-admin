<script setup lang="ts">
defineProps<{
  text: string
  onClick?: () => void
  full?: boolean
  secondary?: boolean
}>()
</script>

<template>
  <button
    class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-all duration-300 ease-in-out"
    :class="{ 'w-full': full, 'bg-gray-500 hover:bg-gray-700': secondary }"
    @click="onClick ? onClick() : () => {}"
  >
    <span class="w-full text-center">{{ text }}</span>
    <slot></slot>
  </button>
</template>

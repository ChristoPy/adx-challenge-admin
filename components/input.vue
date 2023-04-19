<script setup lang="ts">
import { defineProps } from 'vue'

const value = ''

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="value"
      required
      :type="type || 'text'"
      class="border border-black hover:border-gray-700 rounded h-10 px-2"
    />
  </div>
</template>

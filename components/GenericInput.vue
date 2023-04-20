<script setup lang="ts">
import { ref, watch } from 'vue'

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
  value: {
    required: false,
  },
})

const emit = defineEmits(['input'])
const internalValue = ref(props.value)

watch(
  () => props.value,
  // @ts-ignore
  (value: string) => {
    internalValue.value = value
  }
)

const updateInternalValue = (value: string) => {
  internalValue.value = value
  emit('input', value)
}
</script>

<template>
  <div class="mb-4">
    <label class="block mb-2" :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="internalValue"
      required
      :type="type || 'text'"
      class="w-full border border-black hover:border-gray-700 rounded h-10 px-2"
      @input="updateInternalValue($event.target.value)"
    />
  </div>
</template>

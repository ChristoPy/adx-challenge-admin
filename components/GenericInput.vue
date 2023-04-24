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
    default: 'text',
  },
  value: {
    type: [String || Number],
    required: false,
    default: '',
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
  if (props.type === 'number') {
    emit('input', Number(value))
    return
  }
  emit('input', value)
}
</script>

<template>
  <div class="w-full mb-4">
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

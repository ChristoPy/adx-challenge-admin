<script setup lang="ts">
defineProps<{
  image?: string
  name: string
}>()
</script>

<template>
  <img
    class="object-cover w-full hover:shadow-lg rounded-md"
    :src="image || 'https://via.placeholder.com/103X103.png?text=Sem+imagem'"
    :alt="name"
    style="height: 103px"
  />
</template>

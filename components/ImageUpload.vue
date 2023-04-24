<template>
  <div
    class="relative w-full h-64 border border-dashed border-emerald hover:border-gray-700 rounded-lg overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-cover bg-center"
      :class="{ hidden: !imageDataUrl }"
      :style="{ backgroundImage: 'url(' + imageDataUrl + ')' }"
    >
      <button
        class="absolute top-2 right-2 text-white text-lg font-bold bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
        @click="removeImage"
      >
        x
      </button>
    </div>
    <div
      class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm"
      :class="{ hidden: imageDataUrl }"
      @dragover.prevent
      @drop="handleDrop"
    >
      <label for="file-input">
        <input
          id="file-input"
          type="file"
          accept="image/*"
          class="hidden"
          @change="handleFileInput"
        />
        <div class="cursor-pointer">
          <svg
            class="mx-auto h-8 w-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 3v4a1 1 0 01-1 1H10a1 1 0 01-1-1V3m5 0l-1.5 3M9 3l1.5 3"
            ></path>
          </svg>
          <p class="mt-1">
            Arreste e solte uma imagem aqui ou clique para escolher
          </p>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ImageUpload',
  emits: ['image-data-url'],
  setup(_, context) {
    const imageDataUrl = ref(null)

    function handleDrop(event) {
      event.preventDefault()
      handleFile(event.dataTransfer.files[0])
    }

    function handleFileInput(event) {
      handleFile(event.target.files[0])
    }

    function handleFile(file) {
      const reader = new FileReader()
      reader.onload = () => {
        imageDataUrl.value = reader.result
        context.emit('image-data-url', reader.result)
      }
      reader.readAsDataURL(file)
    }

    function removeImage() {
      imageDataUrl.value = null
      context.emit('image-data-url', '')
    }

    return { imageDataUrl, handleDrop, handleFileInput, removeImage }
  },
}
</script>

<script lang="ts">
import Vue from 'vue'
import { Route } from 'vue-router'
import { Product } from '~/types'

export default Vue.extend({
  name: 'ModalEdit',
  data: () => ({
    isOpen: false,
    newProductData: {} as Product,
  }),
  computed: {
    product() {
      return this.$store.getters['admin/editing']
    },
  },
  watch: {
    $route(route: Route) {
      if (!route.hash || route.hash !== '#modal-edit') return
      this.toggle()
    },
    product() {
      this.newProductData = { ...this.product }
    },
  },
  methods: {
    toggle() {
      const closing = !!this.isOpen
      this.isOpen = !this.isOpen

      if (closing) {
        this.$router.push('/')
      }
    },
    doUpdate() {
      this.$store
        .dispatch('admin/updateProduct', this.newProductData)
        .then(() => {
          this.$store.dispatch('products/setProduct', this.newProductData)
        })
      this.toggle()
    },
    onImageChange(value: string) {
      this.newProductData.image = value
    },
  },
})
</script>

<template>
  <a
    v-show="isOpen"
    id="#modal-edit"
    class="transition transition-all fixed z-50 inset-0 overflow-y-auto"
  >
    <div class="flex items-center justify-center min-h-screen">
      <div class="fixed inset-0 bg-gray-500 opacity-30"></div>
      <div
        class="container max-w-xl bg-white rounded-lg shadow-lg p-4 relative"
      >
        <div class="flex w-full justify-center justify-between">
          <h3 class="font-bold text-2xl">Editar Produto</h3>
          <button @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-500 hover:text-gray-700"
              viewBox="0 0 24 24"
              fill="inherit"
            >
              <g data-name="Layer 2">
                <g data-name="close">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  ></rect>
                  <path
                    d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div class="py-4">
          <form @submit.prevent="() => {}">
            <GenericInput
              id="name"
              v-model="newProductData.name"
              label="Nome"
            />
            <div class="mt-4 flex justify-end gap-4">
              <GenericInput
                id="price"
                v-model="newProductData.price"
                label="Preço"
                type="number"
              />
              <GenericInput
                id="quantity"
                v-model="newProductData.quantity"
                label="Quantidade"
                type="number"
              />
            </div>
            <ImageUpload
              :image-url="newProductData.image"
              @image-data-url="onImageChange"
            />
            <div class="mt-4 flex justify-end gap-4">
              <GenericButton
                secondary
                text="Cancelar"
                class="mt-4"
                :on-click="toggle"
              />
              <GenericButton
                type="submit"
                text="Atualizar"
                class="mt-4"
                :on-click="doUpdate"
              />
            </div>
          </form>
        </div>
        <div
          class="absolute inset-0 rounded-lg shadow-lg pointer-events-none z-0"
        ></div>
      </div>
    </div>
  </a>
</template>

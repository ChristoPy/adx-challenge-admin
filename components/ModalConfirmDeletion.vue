<script lang="ts">
import Vue from 'vue'
import { Route } from 'vue-router'

export default Vue.extend({
  name: 'ModalConfirmDeletion',
  data: () => ({
    isOpen: false,
  }),
  computed: {
    product() {
      return this.$store.getters['admin/deleting']
    },
  },
  watch: {
    $route(route: Route) {
      if (!route.hash || route.hash !== '#modal-confirm-deletion') return
      this.toggle()
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
    doDelete() {
      this.$store.dispatch('admin/deleteProduct', this.product).then(() => {
        this.$store.dispatch('products/removeProduct', this.product)
      })
      this.toggle()
    },
  },
})
</script>

<template>
  <a
    v-show="isOpen"
    id="#modal-confirm-deletion"
    class="transition transition-all fixed z-50 inset-0 overflow-y-auto"
  >
    <div class="flex items-center justify-center min-h-screen">
      <div class="fixed inset-0 bg-gray-500 opacity-30"></div>
      <div
        class="container max-w-lg bg-white rounded-lg shadow-lg p-4 relative"
      >
        <div class="flex w-full justify-center justify-between">
          <h3 class="font-bold text-2xl">Remover Produto</h3>
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
          <p class="text-gray-700">
            Tem certeza que deseja remover o produto
            <span class="font-bold">{{ product.name }}</span
            >?
          </p>
          <p class="text-gray-700">Esta ação não pode ser desfeita.</p>
        </div>
        <div class="mt-4 flex justify-end gap-4">
          <GenericButton
            secondary
            text="Cancelar"
            class="mt-4"
            :on-click="toggle"
          />
          <GenericButton
            type="submit"
            text="Excluir"
            class="mt-4"
            :on-click="doDelete"
          />
        </div>
        <div
          class="absolute inset-0 rounded-lg shadow-lg pointer-events-none z-0"
        ></div>
      </div>
    </div>
  </a>
</template>

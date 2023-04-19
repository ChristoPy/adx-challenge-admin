<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <section class="py-8 mt-12 px-4">
    <div class="container mx-auto max-w-md">
      <h1 class="font-bold text-4xl text-center my-4 py-8">Entrar</h1>

      <form
        @submit.prevent="$store.dispatch('auth/login', { username, password })"
      >
        <GenericInput id="username" v-model="username" label="Usuário" />
        <GenericInput
          id="password"
          v-model="password"
          label="Senha"
          type="password"
        />
        <GenericButton full text="Entrar" class="mt-4" />
      </form>
    </div>
  </section>
</template>

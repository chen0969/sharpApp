<script setup lang="ts">
import { ref } from 'vue'

import AddCardModal
  from '../components/AddCardModule.vue'

const isOpen = ref(false)
</script>

<template>

  <!-- Floating Button -->
  <button @click="isOpen = true" class="
      fixed bottom-6 right-6
      w-10 h-10
      rounded-full
      bg-blue-500
      text-white
      text-2xl
      shadow-2xl
      active:scale-95

      transition
    ">
    <i class="bi bi-plus-circle"></i>
  </button>

  <!-- Modal -->
  <AddCardModal v-if="isOpen" @close="isOpen = false" />

</template>
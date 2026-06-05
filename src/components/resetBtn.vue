<script setup lang="ts">
import { ref } from 'vue'

import {
  resetItems
}
  from '../composables/useItems'

const isConfirming = ref(false)

function handleReset() {

  resetItems()

  isConfirming.value = false
}
</script>

<template>

  <!-- Floating Button -->
  <button @click="isConfirming = true" class="
      fixed bottom-6 left-6

      w-10 h-10
      rounded-full

      bg-red-500
      text-white

      shadow-2xl

      text-2xl

      hover:scale-110
      active:scale-95

      transition
    ">
    <i class="bi bi-arrow-clockwise"></i>
  </button>

  <!-- Confirm Modal -->
  <div v-if="isConfirming" class="
      fixed inset-0
      bg-black/40

      flex items-center justify-center

      z-50
    ">

    <div class="
        bg-white
        rounded-2xl
        p-6

        w-[90%] max-w-md

        space-y-5
      ">

      <h2 class="text-2xl font-bold">
        Reset All Items?
      </h2>

      <p class="text-gray-500">

        This will remove all local changes
        and restore default items.

      </p>

      <div class="flex justify-end gap-3">

        <button @click="isConfirming = false" class="
            px-4 py-2
            rounded-xl
            border
          ">
          Cancel
        </button>

        <button @click="handleReset" class="
            px-4 py-2
            rounded-xl

            bg-red-500
            text-white
          ">
          Reset
        </button>

      </div>

    </div>

  </div>

</template>
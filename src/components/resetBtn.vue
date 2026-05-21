<!-- src/components/ResetBtn.vue -->
<script setup>
const emit = defineEmits(['reset'])

const handleReset = () => {
  // 1. Ask for confirmation so the user doesn't accidentally wipe their data
  if (confirm('Are you sure you want to delete all stored data and reset to default?')) {
    // 2. Wipe the specific key from localStorage
    localStorage.removeItem('my_dashboard_items')
    
    // 3. Notify the parent to reload the fallback list
    emit('reset')
  }
}
</script>

<template>
  <button
    @click="handleReset"
    class="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-red-600 transition-colors focus:outline-none"
  >
    <!-- Simple Reset/Trash icon -->
    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
    </svg>
    Reset Storage
  </button>
</template>
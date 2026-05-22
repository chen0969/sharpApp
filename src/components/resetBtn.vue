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
    <i class="bi bi-bootstrap-reboot"></i>
  </button>
</template>
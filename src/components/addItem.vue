<!-- src/components/AddItem.vue -->
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['itemAdded'])

const name = ref('')
const status = ref('Active') // Default status choice
const isOpen = ref(false)    // Toggles form visibility

const handleSubmit = () => {
  if (!name.value.trim()) return

  // 1. Construct the new item object structure
  const newItem = {
    id: Date.now().toString(), // Simple unique ID generator
    name: name.value.trim(),
    status: status.value,
    notes: [] // Initialized with an empty notes array
  }

  // 2. Emit the new item back to the parent container
  emit('itemAdded', newItem)

  // 3. Reset form inputs and close panel
  name.value = ''
  status.value = 'Active'
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <!-- Toggle Button -->
    <button
      @click="isOpen = !isOpen"
      class="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors focus:outline-none"
    >
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      Add New Item
    </button>

    <!-- Dropdown Form Panel Overlay -->
    <div 
      v-if="isOpen" 
      class="fixed top-1 left-1 w-90 z-50 rounded-xl border border-gray-200 bg-white p-4 shadow-xl border-t-4 border-t-blue-600"
    >
      <h3 class="text-sm font-semibold text-gray-900 mb-3">Create New Project Card</h3>
      
      <form @submit.prevent="handleSubmit" class="space-y-3">
        <!-- Item Name Input -->
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Item Name</label>
          <input
            v-model="name"
            type="text"
            required
            placeholder="e.g., Cloud Deployment"
            class="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <!-- Status Selection Dropdown -->
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">Initial Status</label>
          <select
            v-model="status"
            class="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <!-- Action Panel Buttons -->
        <div class="flex justify-end gap-2 pt-2 border-t border-gray-100">
          <button
            type="button"
            @click="isOpen = false"
            class="rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Save Item
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
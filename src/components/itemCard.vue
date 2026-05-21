<!-- src/components/ItemCard.vue -->
<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

// Establish local event communication line back to ItemSwiper
const emit = defineEmits(['updateNotes', 'delete'])
const newNote = ref('')

const handleAddNote = () => {
  if (!newNote.value.trim()) return

  // Build a fresh array map to prevent shallow reactive mutability errors
  const updatedNotes = [...(props.item.notes || []), newNote.value.trim()]
  
  // Shout the data change message up to parent component
  emit('updateNotes', props.item.id, updatedNotes)
  newNote.value = ''
}

const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'active': return 'bg-green-100 text-green-800'
    case 'pending': return 'bg-yellow-100 text-yellow-800'
    case 'inactive': return 'bg-gray-100 text-gray-800'
    default: return 'bg-blue-100 text-blue-800'
  }
}
</script>

<template>
  <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between">
    <div>
      <!-- Name & Status Panel Row -->
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
          <span :class="['mt-1.5 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', getStatusColor(item.status)]">
            {{ item.status || 'No Status' }}
          </span>
        </div>
        
        <!-- Delete Button Option Trigger -->
        <button
          @click="emit('delete', item.id)"
          class="rounded-lg p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
          aria-label="Delete item"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <!-- Notes Log Terminal View -->
      <div class="mt-6">
        <h4 class="text-sm font-medium text-gray-700">Notes</h4>
        <div class="mt-2 max-h-32 overflow-y-auto space-y-1.5 pr-1">
          <template v-if="item.notes && item.notes.length > 0">
            <p 
              v-for="(note, index) in item.notes" 
              :key="index" 
              class="rounded bg-gray-50 p-2 text-sm text-gray-600 border-l-2 border-gray-300"
            >
              {{ note }}
            </p>
          </template>
          <p v-else class="text-sm italic text-gray-400">No notes added yet.</p>
        </div>
      </div>
    </div>

    <!-- Note Input Addition Block -->
    <form @submit.prevent="handleAddNote" class="mt-6 flex gap-2">
      <input
        v-model="newNote"
        type="text"
        placeholder="Add a note..."
        class="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="whitespace-nowrap rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
      >
        Add Note
      </button>
    </form>
  </div>
</template>
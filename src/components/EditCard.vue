<script setup lang="ts">
import { ref } from 'vue'

import { STATUS_MAP } from '../data/statuses'

import type { Item } from '../initStore/itemsList'

import type { StatusKey } from '../data/statuses'

import { updateItem } from '../composables/useItems'

const props = defineProps<{
  item: Item
}>()

const emit = defineEmits<{
  close: []
}>()

const editedName = ref(props.item.name)

const editedStatus = ref<StatusKey>(
  props.item.status
)

function saveChanges() {

  updateItem({

    ...props.item,

    name: editedName.value,

    status: editedStatus.value,
  })

  emit('close')
}
</script>

<template>

  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/40
           flex items-center justify-center"
  >

    <!-- Modal -->
    <div
      class="bg-white rounded-2xl p-6
             w-full max-w-md space-y-5"
    >

      <h2 class="text-2xl font-bold">
        Edit Item
      </h2>

      <!-- Name -->
      <input
        v-model="editedName"
        class="w-full border rounded-xl p-3"
      />

      <!-- Status -->
      <select
        v-model="editedStatus"
        class="w-full border rounded-xl p-3"
      >

        <option
          v-for="(value, key) in STATUS_MAP"
          :key="key"
          :value="key"
        >
          {{ value.label }}
        </option>

      </select>

      <!-- Buttons -->
      <div class="flex justify-end gap-3">

        <button
          @click="emit('close')"
          class="px-4 py-2 rounded-xl border"
        >
          Cancel
        </button>

        <button
          @click="saveChanges"
          class="px-4 py-2 rounded-xl
                 bg-blue-500 text-white"
        >
          Save
        </button>

      </div>

    </div>

  </div>

</template>
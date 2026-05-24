<script setup lang="ts">
import { ref } from 'vue'

import type { Item }
  from '../initStore/itemsList'

import {
  STATUS_MAP,
  type StatusKey
}
  from '../data/statuses'

import {
  SECTION_MAP,
  type SectionKey
} from '../data/sections'

import {
  updateItem
}
  from '../composables/useItems'

const props = defineProps<{
  item: Item
}>()

const emit = defineEmits<{
  close: []
}>()

// Editable state
const editedName = ref(
  props.item.name
)

const editedStatus = ref<StatusKey>(
  props.item.status
)

const editedSection = ref<SectionKey>(
  props.item.section
)

// IMPORTANT
const editableNotes = ref(
  [...props.item.notes]
)

const newNote = ref('')

function addNote() {

  if (!newNote.value.trim()) return

  editableNotes.value.push(
    newNote.value
  )

  newNote.value = ''
}

function removeNote(index: number) {

  editableNotes.value.splice(index, 1)

}

function saveChanges() {

  updateItem({

    ...props.item,

    name: editedName.value,

    status: editedStatus.value,

    section: editedSection.value,

    notes: editableNotes.value,

  })

  emit('close')
}
</script>

<template>

  <div class="
      fixed inset-0
      bg-black/40
      flex items-start justify-center
      p-5
    ">

    <div class="
        bg-white
        rounded-2xl
        p-2 text-xs
        space-y-2
        border-2 border-gray-300
        shadow-lg
      ">

      <!-- TITLE -->
      <h2 class="text-lg font-bold">
        Edit <span class="text-red-500">{{ item.name }}</span>
      </h2>
      <!-- NAME -->
      <input v-model="editedName" class="
          w-full border
          rounded-xl p-2
        " />

      <!-- STATUS -->
      <select v-model="editedStatus" class="
          w-full border
          rounded-xl p-2
        ">

        <option v-for="(value, key) in STATUS_MAP" :key="key" :value="key">
          {{ value.label }}
        </option>

      </select>

      <!-- SECTION -->
      <select v-model="editedSection" class="
          w-full border
          rounded-xl p-2
        ">

        <option v-for="(value, key) in SECTION_MAP" :key="key" :value="key">
          {{ value.label }}
        </option>

      </select>

      <!-- NOTES -->
      <div class="space-y-3">

        <h3 class="font-bold text-lg">
          Notes
        </h3>

        <!-- Existing Notes -->
        <div v-for="(_, index) in editableNotes" :key="index" class="
            flex gap-2
            items-start
          ">

          <textarea v-model="editableNotes[index]" class="
              flex-1
              border rounded-xl
              p-2
            " />

          <button @click="removeNote(index)" class="
              px-3 py-2
              rounded-xl
              bg-red-100
              text-red-600
            ">
            <i class="bi bi-trash3"></i>
          </button>

        </div>

        <!-- Add Note -->
        <div class="flex gap-2">

          <input v-model="newNote" placeholder="New note..." class="
              flex-1
              border rounded-xl
              p-2
            " />

          <button @click="addNote" class="
              px-4 py-2
              rounded-xl
              bg-blue-500
              text-white
            ">
            <i class="bi bi-plus-square"></i>
          </button>

        </div>

      </div>

      <!-- ACTIONS -->
      <div class="flex justify-end gap-3">

        <button @click="emit('close')" class="
            px-4 py-2
            rounded-xl border
          ">
          <i class="bi bi-x"></i>
        </button>

        <button @click="saveChanges" class="
            px-4 py-2
            rounded-xl
            bg-blue-500
            text-white
          ">
          <i class="bi bi-floppy"></i>
        </button>

      </div>

    </div>

  </div>

</template>
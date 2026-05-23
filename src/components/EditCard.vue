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
}  from '../data/sections'

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
      flex items-center justify-center
    ">

    <div class="
        bg-white
        rounded-2xl
        p-6
        w-full max-w-lg
        space-y-5
      ">

      <!-- TITLE -->
      <h2 class="text-2xl font-bold">
        Edit <span class="text-red-500">{{ item.name }}</span>
      </h2>
      <!-- NAME -->
      <input v-model="editedName" class="
          w-full border
          rounded-xl p-3
        " />

      <!-- STATUS -->
      <select v-model="editedStatus" class="
          w-full border
          rounded-xl p-3
        ">

        <option v-for="(value, key) in STATUS_MAP" :key="key" :value="key">
          {{ value.label }}
        </option>

      </select>

      <!-- SECTION -->
      <select v-model="editedSection" class="
          w-full border
          rounded-xl p-3
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
              p-3
            " />

          <button @click="removeNote(index)" class="
              px-3 py-2
              rounded-xl
              bg-red-100
              text-red-600
            ">
            X
          </button>

        </div>

        <!-- Add Note -->
        <div class="flex gap-2">

          <input v-model="newNote" placeholder="New note..." class="
              flex-1
              border rounded-xl
              p-3
            " />

          <button @click="addNote" class="
              px-4 py-2
              rounded-xl
              bg-blue-500
              text-white
            ">
            Add
          </button>

        </div>

      </div>

      <!-- ACTIONS -->
      <div class="flex justify-end gap-3">

        <button @click="emit('close')" class="
            px-4 py-2
            rounded-xl border
          ">
          Cancel
        </button>

        <button @click="saveChanges" class="
            px-4 py-2
            rounded-xl
            bg-blue-500
            text-white
          ">
          Save
        </button>

      </div>

    </div>

  </div>

</template>
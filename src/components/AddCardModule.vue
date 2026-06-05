<script setup lang="ts">
import { ref } from 'vue'

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
  addItem
}
  from '../composables/useItems'

const emit = defineEmits<{
  close: []
}>()

const name = ref('')

const status = ref<StatusKey>(
  'undefined'
)

const notes = ref<string[]>([])

const section = ref<SectionKey>('uncategorized')

const newNote = ref('')

function addNote() {

  if (!newNote.value.trim()) return

  notes.value.push(
    newNote.value
  )

  newNote.value = ''
}

function removeNote(index: number) {

  notes.value.splice(index, 1)

}

function createItem() {

  if (!name.value.trim()) return

  addItem({

    id: crypto.randomUUID(),

    name: name.value,

    status: status.value,

    notes: notes.value,

    section: section.value,

  })

  emit('close')
}
</script>

<template>

  <div class="
      fixed inset-0
      bg-black/40
      flex items-center justify-center
      z-50
    ">

    <div class="
        bg-white
        rounded-xl
        p-3
        w-[90%]
        space-y-1
      ">

      <h2 class="text-[16px] font-bold">
        Add Item
      </h2>

      <!-- NAME -->
      <input v-model="name" placeholder="Item name" class="
          w-full
          border
          rounded-sm
          p-1
          text-[14px]
        " />

      <!-- STATUS -->
      <select v-model="status" class="
          w-full
          border
          rounded-sm
          p-1
          text-[14px]
        ">

        <option v-for="(value, key) in STATUS_MAP" :key="key" :value="key">
          {{ value.label }}
        </option>

      </select>

      <!-- SECTION -->
      <select v-model="section" class="
          w-full
          border
          rounded-sm
          p-1
          text-[14px]
        ">

        <option v-for="(value, key) in SECTION_MAP" :key="key" :value="key">
          {{ value.label }}
        </option>

      </select>

      <!-- NOTES -->
      <div class="space-y-1">

        <h3 class="font-bold">
          Notes
        </h3>

        <div v-for="(note, index) in notes" :key="index" class="
            flex gap-2
            items-center
          ">

          <div class="
              flex-1
              bg-gray-100
              rounded-xl
              p-3
            ">
            {{ note }}
          </div>

          <button @click="removeNote(index)" class="
              px-3 py-2
              rounded-xl
              bg-red-100
              text-red-600
            ">
            X
          </button>

        </div>

        <!-- ADD NOTE -->
        <div class="flex gap-2">

          <input v-model="newNote" placeholder="New note..." class="
              flex-1
              border
              rounded-sm
              p-1
              text-[14px]
              
            " />

          <button @click="addNote" class="
              p-1
              rounded-sm
              bg-blue-500
              text-white
            ">
            <i class="bi bi-file-plus"></i>
          </button>

        </div>

      </div>

      <!-- ACTIONS -->
      <div class="flex justify-end gap-3">

        <button @click="emit('close')" class="
            p-2
            rounded-sm
            text-[16px]
            border
          ">
          Cancel
        </button>

        <button @click="createItem" class="
            p-2
            rounded-sm
            text-[16px]
            bg-blue-500
            text-white
          ">
          Create
        </button>

      </div>

    </div>

  </div>

</template>
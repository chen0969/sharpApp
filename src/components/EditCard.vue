<script setup lang="ts">
import { ref } from 'vue'
// import { useTextareaAutosize } from '@vueuse/core'

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
}
  from '../data/sections'

import {
  updateItem
}
  from '../composables/useItems'

import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,

  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText
}
  from 'radix-vue'

const props = defineProps<{
  item: Item
}>()

const emit = defineEmits<{
  close: []
}>()

const open = ref(true)

const editedName = ref(
  props.item.name
)

const editedStatus = ref<StatusKey>(
  props.item.status
)

const editedSection = ref<SectionKey>(
  props.item.section
)

const editableNotes = ref(
  [...props.item.notes]
)

const newNote = ref('')

// VueUse
// const {
//   textarea
// } = useTextareaAutosize()

function addNote() {

  if (!newNote.value.trim())
    return

  editableNotes.value.push(
    newNote.value
  )

  newNote.value = ''

}

function removeNote(
  index: number
) {

  editableNotes.value.splice(
    index,
    1
  )

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

  <DialogRoot v-model:open="open" @update:open="emit('close')">

    <DialogPortal>

      <!-- Overlay -->

      <DialogOverlay class="
          fixed inset-0
          bg-black/40
          backdrop-blur-sm
          z-40
        " />

      <!-- Content -->

      <DialogContent @open-auto-focus="(event) => event.preventDefault()" class="
          fixed
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-50
          w-[90%]
          max-w-xl
          bg-white
          rounded-lg
          p-3
          shadow-sm
          space-y-1
          border
          border-gray-400
        ">

        <!-- TITLE -->

        <DialogTitle class="
            text-[16px]
            font-bold
          ">
          Edit
          <span class="text-blue-500">
            {{ item.name }}
          </span>
        </DialogTitle>

        <!-- NAME -->
        <input v-model="editedName" class="
            w-full
            text-[14px]
            border
            rounded-sm
            p-2
          " placeholder="Name" />

        <!-- STATUS -->

        <div>

          <label class="
              text-[14px]
            ">
            Status
          </label>

          <SelectRoot v-model="editedStatus">

            <SelectTrigger class="
                w-full
                border
                rounded-sm
                p-1
                text-left
              ">

              <SelectValue />

            </SelectTrigger>

            <SelectPortal>

              <SelectContent class="
                  bg-white
                  border
                  rounded-sm
                  shadow-sm
                  z-50
                ">

                <SelectViewport>

                  <SelectItem v-for="(value, key) in STATUS_MAP" :key="key" :value="key" class="
                      p-1
                      cursor-pointer
                    active:bg-gray-300
                      tranisition-all
                      duration-200
                      ease-in
                      shadow-sm
                    ">

                    <SelectItemText class="text-base ">
                      {{ value.label }}
                    </SelectItemText>

                  </SelectItem>

                </SelectViewport>

              </SelectContent>

            </SelectPortal>

          </SelectRoot>

        </div>

        <!-- SECTION -->

        <div class="space-y-1">

          <label class="
              text-[14px]
              font-medium
            ">
            Section
          </label>

          <SelectRoot v-model="editedSection">

            <SelectTrigger class="
                w-full
                text-base
                border
                rounded-sm
                p-1
                text-left
              ">

              <SelectValue />

            </SelectTrigger>

            <SelectPortal>

              <SelectContent class="
                  bg-white
                  border
                  rounded-sm
                  shadow-sm
                  z-50
                ">

                <SelectViewport>

                  <SelectItem v-for="(value, key) in SECTION_MAP" :key="key" :value="key" class="
                      p-2
                      cursor-pointer
                      active:bg-gray-200
                      transition-all
                      duration-200
                      ease-in
                      shadow-sm
                    ">

                    <SelectItemText class="text-base">
                      {{ value.label }}
                    </SelectItemText>

                  </SelectItem>

                </SelectViewport>

              </SelectContent>

            </SelectPortal>

          </SelectRoot>

        </div>

        <!-- NOTES -->

        <div class="space-y-1">

          <h3 class="
              text-[14px]
              font-semibold
            ">
            Notes
          </h3>

          <div v-for="(_, index) in editableNotes" :key="index" class="
              flex
              gap-2
            ">

            <textarea v-model="editableNotes[index]" ref="textarea" class="
                flex-1
                border
                rounded-sm
                p-1
                text-base
                resize-none
              " />

            <button @click="removeNote(index)" class="
                p-1
                rounded-sm
                bg-red-100
                text-red-600
              ">
              <i class="bi bi-trash3"></i>
            </button>

          </div>

          <!-- ADD NOTE -->

          <div class="
              flex
              gap-2
            ">

            <input v-model="newNote" class="
                flex-1
                text-base
                border
                rounded-sm
                p-1
              " placeholder="New note..." />

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

        <div class="
            flex
            justify-between
            px-5
          ">

          <button @click="emit('close')" class="
              p-2
              border
              rounded-sm
            ">
            Cancel
          </button>

          <button @click="saveChanges" class="
              p-2
              rounded-sm
              bg-blue-500
              text-white
            ">
            Save
          </button>

        </div>

      </DialogContent>

    </DialogPortal>

  </DialogRoot>

</template>
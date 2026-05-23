<script setup lang="ts">
import { ref } from 'vue'

import type { Item } from '../initStore/itemsList'

import { STATUS_MAP }
  from '../data/statuses'

import { SECTION_MAP }
  from '../data/sections'

import {
  deleteItem
} from '../composables/useItems'

import EditItemModal
  from '../components/EditCard.vue'

const props = defineProps<{
  item: Item
}>()

const isEditing = ref(false)
</script>

<template>

  <div class="
      rounded-2xl
      border-2 border-gray-300
      shadow
      p-5
      space-y-4
    " :class="STATUS_MAP[item.status].bgColor">

    <!-- Header -->
    <div class="
        flex
        justify-between
        items-start
      ">

      <h2 class="text-2xl font-bold">

        {{ item.name }}

        <span class="p-2 text-xs">{{ SECTION_MAP[item.section].label }}</span>
      </h2>

      <div class="flex gap-2">

        <!-- Edit -->
        <button @click="isEditing = true" class="
            px-3 py-1
            rounded-lg
            bg-blue-100
            text-blue-600
          ">
          <i class="bi bi-pencil-square"></i>
        </button>

        <!-- Delete -->
        <button @click="deleteItem(item.id)" class="
            px-3 py-1
            rounded-lg
            bg-red-100
            text-red-600
          ">
          <i class="bi bi-trash3-fill"></i>
        </button>

      </div>

    </div>

    <!-- Status -->
    <span class="
        px-3 py-1
        rounded-full
        text-sm
      " :class="STATUS_MAP[item.status].color">
      {{ STATUS_MAP[item.status].label }}
    </span>

    <!-- Notes -->
    <div class="space-y-2">

      <div v-for="note in item.notes" :key="note" class="
          bg-gray-100
          rounded-xl
          p-3
        ">
        {{ note }}
      </div>

    </div>

  </div>

  <!-- Modal -->
  <EditItemModal v-if="isEditing" :item="item" @close="isEditing = false" />

</template>
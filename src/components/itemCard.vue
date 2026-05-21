<script setup lang="ts">
import { ref, computed } from 'vue'

import { STATUS_MAP } from '../data/statuses'

import type { Item } from '../initStore/itemsList'

import {
  updateItemStatus,
  deleteItem
} from '../composables/useItems'

const props = defineProps<{
  item: Item
}>()

const dragX = ref(0)

const isDragging = ref(false)

let startX = 0

function onPointerDown(event: PointerEvent) {

  isDragging.value = true

  startX = event.clientX
}

function onPointerMove(event: PointerEvent) {

  if (!isDragging.value) return

  dragX.value = event.clientX - startX
}

function onPointerUp() {

  isDragging.value = false

  // RIGHT SWIPE
  if (dragX.value > 120) {

    updateItemStatus(
      props.item.id,
      'good'
    )

  }

  // LEFT SWIPE
  else if (dragX.value < -120) {

    updateItemStatus(
      props.item.id,
      'empty86'
    )

  }

  dragX.value = 0
}

const cardStyle = computed(() => {

  return {

    transform: `
      translateX(${dragX.value}px)
      rotate(${dragX.value * 0.05}deg)
    `,

    transition: isDragging.value
      ? 'none'
      : '0.25s ease',
  }

})
</script>

<template>

  <div
    class="
      relative
      rounded-2xl
      border
      bg-white
      shadow
      p-5
      space-y-4
      touch-none
      select-none
      cursor-grab
    "

    :class="STATUS_MAP[item.status].bgColor"

    :style="cardStyle"

    @pointerdown="onPointerDown"

    @pointermove="onPointerMove"

    @pointerup="onPointerUp"

    @pointerleave="onPointerUp"
  >

    <!-- Status Background Hint -->
    <div
      class="
        absolute inset-0 rounded-2xl
        opacity-10 pointer-events-none
      "

      :class="{
        'bg-green-500': dragX > 0,
        'bg-red-500': dragX < 0,
      }"
    />

    <!-- Header -->
    <div class="flex justify-between items-start">

      <h2 class="text-2xl font-bold">
        {{ item.name }}
      </h2>

      <button
        @click.stop="deleteItem(item.id)"
        class="
          px-3 py-1 rounded-lg
          bg-red-100 text-red-600
        "
      >
        Delete
      </button>

    </div>

    <!-- Status -->
    <span
      class="
        px-3 py-1 rounded-full text-sm
      "
      :class="STATUS_MAP[item.status].color"
    >
      {{ STATUS_MAP[item.status].label }}
    </span>

    <!-- Notes -->
    <div class="space-y-2">

      <div
        v-for="note in item.notes"
        :key="note"
        class="
          bg-gray-100
          rounded-xl
          p-3
        "
      >
        {{ note }}
      </div>

    </div>

  </div>

</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

import ItemCard from '../components/ItemCard.vue'

import { items } from '../composables/useItems'

import {
  updateItemStatus
} from '../composables/useItems'

// ======================
// SWIPE STATE
// ======================

const dragX = ref(0)

const isDragging = ref(false)

let startX = 0

// ======================
// DERIVED CARD STATE
// ======================

// Only cards that still need review
const remainingItems = computed(() => {

  return items.value.filter(

    item => item.status === 'undefined'

  )

})

// Current visible card
const currentItem = computed(() => {

  return remainingItems.value[0]

})

// ======================
// POINTER EVENTS
// ======================

function onPointerDown(
  event: PointerEvent
) {

  isDragging.value = true

  startX = event.clientX

}

function onPointerMove(
  event: PointerEvent
) {

  if (!isDragging.value) return

  dragX.value =
    event.clientX - startX

}

function onPointerUp() {

  isDragging.value = false

  const item = currentItem.value

  if (!item) {

    dragX.value = 0

    return

  }

  // RIGHT SWIPE
  if (dragX.value > 120) {

    animateSwipe('good')

  }

  // LEFT SWIPE
  else if (dragX.value < -120) {

    animateSwipe('empty86')

  }

  // RESET
  else {

    dragX.value = 0

  }

}

// ======================
// SWIPE ACTION
// ======================

function animateSwipe(
  newStatus: 'good' | 'empty86'
) {

  const item = currentItem.value

  if (!item) return

  const direction =
    dragX.value > 0 ? 1 : -1

  // Fly out animation
  dragX.value =
    direction * 1200

  setTimeout(() => {

    updateItemStatus(
      item.id,
      newStatus
    )

    dragX.value = 0

  }, 250)

}

// ======================
// CARD STYLE
// ======================

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

  <div class="
      p-5
      flex
      items-center
      justify-center
      overflow-hidden
      bg-gray-100
    ">

    <!-- CARD -->
    <div v-if="currentItem" class="
        touch-none
        cursor-grab
        w-full
        max-w-xl
      " :style="cardStyle" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp"
      @pointerleave="onPointerUp">

      <ItemCard :item="currentItem" />

    </div>

    <!-- EMPTY STATE -->
    <div v-else class="
        text-center
        space-y-3
      ">

      <div class="
          text-4xl
        ">
        🎉
      </div>

      <h2 class="
          text-3xl
          font-bold
          text-gray-500
        ">
        No More Cards
      </h2>

      <p class="
          text-gray-400
        ">
        All undefined cards reviewed.
      </p>

    </div>

  </div>

</template>

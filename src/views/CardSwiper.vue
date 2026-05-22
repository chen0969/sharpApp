<script setup lang="ts">
import { computed, ref } from 'vue'

import ItemCard from '../components/ItemCard.vue'

import { items } from '../composables/useItems'

import {
  updateItemStatus
} from '../composables/useItems'

const currentIndex = ref(0)

const dragX = ref(0)

const isDragging = ref(false)

let startX = 0

const currentItem = computed(() => {

  return items.value[currentIndex.value]

})

function nextCard() {

  if (
    currentIndex.value
    < items.value.length - 1
  ) {

    currentIndex.value++

  }
}

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

  // RIGHT
  if (dragX.value > 120) {

    updateItemStatus(
      currentItem.value.id,
      'good'
    )

    animateOutAndNext()

  }

  // LEFT
  else if (dragX.value < -120) {

    updateItemStatus(
      currentItem.value.id,
      'empty86'
    )

    animateOutAndNext()

  }

  else {

    dragX.value = 0

  }

}

function animateOutAndNext() {

  const direction =
    dragX.value > 0 ? 1 : -1

  dragX.value = direction * 1000

  setTimeout(() => {

    nextCard()

    dragX.value = 0

  }, 250)

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

  <div class="
      h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      bg-gray-100
    ">

    <div v-if="currentItem" class="
        touch-none
        cursor-grab
      " :style="cardStyle" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp"
      @pointerleave="onPointerUp">

      <ItemCard :item="currentItem" />

    </div>

    <!-- END -->
    <div v-else class="
        text-3xl
        font-bold
        text-gray-400
      ">
      No More Cards
    </div>

  </div>

</template>
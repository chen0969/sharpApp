<script setup lang="ts">
import { computed, ref } from 'vue'

import ItemCard from '../components/ItemCard.vue'

import { items, updateItemStatus } from '../composables/useItems'

// ======================
// CARD DATA
// ======================

const remainingItems = computed(() =>
  items.value.filter(item => item.status === 'undefined')
)

const currentItem = computed(() =>
  remainingItems.value[0]
)

const nextItem = computed(() =>
  remainingItems.value[1]
)

// ======================
// DRAG
// ======================

const dragX = ref(0)

const isDragging = ref(false)

let startX = 0

function onPointerDown(event: PointerEvent) {

  isDragging.value = true

  startX = event.clientX

}

function onPointerMove(event: PointerEvent) {

  if (!isDragging.value) return

  dragX.value =
    event.clientX - startX

}

function onPointerUp() {

  isDragging.value = false

  const item = currentItem.value

  if (!item) return

  // GOOD

  if (dragX.value > 120) {

    swipeCard(
      item.id,
      'good',
      1
    )

    return

  }

  // EMPTY86

  if (dragX.value < -120) {

    swipeCard(
      item.id,
      'empty86',
      -1
    )

    return

  }

  dragX.value = 0

}

// ======================
// SWIPE
// ======================

function swipeCard(
  id: string,
  status: 'good' | 'empty86',
  direction: 1 | -1
) {

  // 不再用 1500

  dragX.value =
    direction * window.innerWidth * 0.8

  setTimeout(() => {

    updateItemStatus(
      id,
      status
    )

    dragX.value = 0

  }, 220)

}

// ======================
// PREVIEW LABELS
// ======================

const goodOpacity = computed(() => {

  return Math.min(

    Math.max(
      dragX.value,
      0
    ) / 50,

    1

  )

})

const emptyOpacity = computed(() => {

  return Math.min(

    Math.max(
      -dragX.value,
      0
    ) / 50,

    1

  )

})

// ======================
// CARD STYLE
// ======================

const cardStyle = computed(() => ({

  transform: `
    translateX(${dragX.value}px)
    rotate(${dragX.value * 0.08}deg)
  `,

  transition:
    isDragging.value
      ? 'none'
      : '0.25s ease'

}))

// ======================
// BACKGROUND
// ======================

const backgroundStyle = computed(() => {

  if (dragX.value > 0) {

    return {

      backgroundColor: `rgba(
        34,
        197,
        94,
        ${
          Math.min(
            dragX.value / 300,
            0.25
          )
        }
      )`

    }

  }

  if (dragX.value < 0) {

    return {

      backgroundColor: `rgba(
        239,
        68,
        68,
        ${
          Math.min(
            -dragX.value / 300,
            0.25
          )
        }
      )`

    }

  }

  return {}

})
</script>

<template>

  <div
    class="
      relative

      h-full
      w-full

      flex
      items-center
      justify-center

      overflow-hidden

      rounded-3xl

      transition-colors
      duration-200
    "
    :style="backgroundStyle"
  >

    <!-- EMPTY -->

    <template v-if="!currentItem">

      <div
        class="
          text-center
          space-y-4
        "
      >

        <div class="text-6xl">
          🎉
        </div>

        <h2
          class="
            text-3xl
            font-bold
          "
        >
          No More Cards
        </h2>

      </div>

    </template>

    <!-- CARD DECK -->

    <template v-else>

      <!-- NEXT CARD -->

      <div

        v-if="nextItem"

        class="
          absolute

          left-1/2
          -translate-x-1/2

          scale-95

          opacity-40

          w-full
          max-w-xl

          pointer-events-none
        "
      >

        <ItemCard
          :item="nextItem"
        />

      </div>

      <!-- CURRENT CARD -->

      <div

        class="
          absolute

          left-1/2
          -translate-x-1/2

          w-full
          max-w-xl

          touch-none

          cursor-grab
          active:cursor-grabbing

          select-none
        "

        :style="cardStyle"

        @pointerdown="onPointerDown"

        @pointermove="onPointerMove"

        @pointerup="onPointerUp"

        @pointercancel="onPointerUp"

        @pointerleave="onPointerUp"

      >

        <!-- GOOD -->

        <div

          class="
            absolute

            top-8
            right-20

            z-20

            border-4
            border-green-500

            text-green-500

            bg-white/80

            px-5
            py-2

            rounded-xl

            rotate-12

            text-3xl
            font-black

            pointer-events-none
          "

          :style="{
            opacity: goodOpacity
          }"

        >

          GOOD

        </div>

        <!-- EMPTY -->

        <div

          class="
            absolute

            top-8
            left-15

            z-20

            border-4
            border-red-500

            text-red-500

            bg-white/80

            px-5
            py-2

            rounded-xl

            -rotate-12

            text-3xl
            font-black

            pointer-events-none
          "

          :style="{
            opacity: emptyOpacity
          }"

        >

          EMPTY86

        </div>

        <ItemCard
          :item="currentItem"
          variant="swiper"
        />

      </div>

    </template>

  </div>

</template>
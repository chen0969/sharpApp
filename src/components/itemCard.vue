<script setup lang="ts">
import type { Item } from '../initStore/itemsList'

import { STATUS_MAP } from '../data/statuses'

defineProps<{
  item: Item
}>()
</script>

<template>

  <div
    class="
      rounded-3xl
      bg-white
      shadow-xl
      border
      p-6
      space-y-5
      w-full
      max-w-md
    "
  >

    <h2 class="text-3xl font-bold">
      {{ item.name }}
    </h2>

    <span
      class="
        px-3 py-1 rounded-full text-sm
      "
      :class="STATUS_MAP[item.status].color"
    >
      {{ STATUS_MAP[item.status].label }}
    </span>

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
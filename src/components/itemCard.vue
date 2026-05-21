<script setup lang="ts">
import { STATUS_MAP } from '../data/statuses'
import type { Item } from '../initStore/itemsList'

defineProps<{
  item: Item
}>()
</script>

<template>
  <div class="rounded-2xl border p-5 space-y-4 shadow" :class="STATUS_MAP[item.status]?.bgColor || 'bg-gray-500'">

    <div class="flex justify-between items-start">

      <h2 class="text-2xl font-bold">
        {{ item.name }}
      </h2>

    </div>

    <div>
      <span
        class="px-3 py-1 rounded-full text-sm font-medium"
        :class="STATUS_MAP[item.status].color"
        :style="{ backgroundColor: STATUS_MAP[item.status].bgColor }"
      >
        {{ STATUS_MAP[item.status].label }}
      </span>
    </div>

    <div class="space-y-2">

      <div
        v-for="note in item.notes"
        :key="note"
        class="bg-gray-100 rounded-lg p-3"
      >
        {{ note }}
      </div>

    </div>

  </div>
</template>
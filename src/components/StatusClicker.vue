<script setup lang="ts">
import { computed } from 'vue'

import {
  STATUS_MAP,
  STATUS_ORDER,
  type StatusKey
} from '../data/statuses'

import {
  updateItemStatus
} from '../composables/useItems'

const props = defineProps<{
  itemId: string
  status: StatusKey
}>()

const currentStatusData = computed(
  () => STATUS_MAP[props.status]
)

function cycleStatus() {

  const currentIndex =
    STATUS_ORDER.indexOf(props.status)

  const nextIndex =
    (currentIndex + 1) % STATUS_ORDER.length

  const nextStatus =
    STATUS_ORDER[nextIndex]

  updateItemStatus(
    props.itemId,
    nextStatus
  )

}
</script>

<template>

  <button
    @click="cycleStatus"
    class="
      px-3 py-1 rounded-full text-sm
      transition-all duration-300
      active:scale-90
      hover:scale-105
    "
    :class="currentStatusData.color"
  >

    {{ currentStatusData.label }}

  </button>

</template>
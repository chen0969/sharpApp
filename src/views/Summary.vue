<script setup lang="ts">
import { computed } from 'vue'

import { items }
  from '../composables/useItems'

const empty86Items = computed(() => {

  return items.value.filter(

    item => item.status === 'empty86'

  )

})

const notedItems = computed(() => {

  return items.value.filter(

    item => item.notes.length > 0
  )

})
</script>

<template>

  <div class="p-2 bg-red-100 min-h-40">

    <h1 class="text-xl font-bold text-red-500 p-2">
      Empty 86, need them ASAP!
    </h1>

    <div class="
    flex
    gap-2
    flex-wrap
        md:grid-cols-2
        lg:grid-cols-3
      ">

      <div v-for="item in empty86Items" :key="item.id" class="
          bg-yellow-200
          rounded-xl
          border
          p-2
          shadow
          text-sm
          font-medium
        ">

        {{ item.name }}

      </div>

    </div>

  </div>

  <div class="p-2 bg-blue-100 min-h-40">
    <h1 class="text-xl font-bold text-blue-500 p-2">
      Special Notes
    </h1>

    <div class="
    flex
    gap-2
    flex-wrap
        md:grid-cols-2
        lg:grid-cols-3
      ">

      <div v-for="item in notedItems" :key="item.id" class="
          bg-blue-200
          rounded-xl
          border
          p-2
          shadow
          text-sm
          font-medium
        ">

        {{ item.name }}
        <span class="text-xs text-gray-600">{{ item.notes }}</span>
      </div>

    </div>
  </div>

</template>
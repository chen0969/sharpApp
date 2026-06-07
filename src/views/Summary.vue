<script setup lang="ts">
import { computed } from 'vue'
import { SECTION_MAP } from '../data/sections'
import { items }
  from '../composables/useItems'

const empty86Items = computed(() => {

  return items.value.filter(

    item => item.status === 'empty86'

  )

})

const packingItems = computed(() => {

  return items.value.filter(

    item => item.status === 'packing'

  )

})

const notedItems = computed(() => {

  return items.value.filter(

    item => item.notes.length > 0
  )

})
</script>

<template>

  <section class="grid grid-cols-2">
    <!-- Empty 86 Items -->
    <div class="p-1 bg-red-100 min-h-40">

      <h1 class="text-xl font-bold text-red-500">
        Empty 86
      </h1>

      <div class="
    flex
    gap-1
    flex-wrap
      ">

        <div v-for="item in empty86Items" :key="item.id" class="
          bg-yellow-200
          rounded-md
          border
          p-1
          shadow
          text-[10px]
          font-bold
        ">

          <span v-html="SECTION_MAP[item.section].icon"></span> {{ item.name }}

        </div>

      </div>

    </div>

    <!-- Packing Items -->
    <div class="p-1 bg-mist-100 min-h-40">

      <h1 class="text-xl font-bold text-mist-500">
        Packing
      </h1>

      <div class="
    flex
    gap-1
    flex-wrap
      ">

        <div v-for="item in packingItems" :key="item.id" class="
          bg-yellow-200
          rounded-md
          border
          p-1
          shadow
          text-[10px]
          font-bold
        ">

          <span v-html="SECTION_MAP[item.section].icon"></span> {{ item.name }}

        </div>

      </div>

    </div>

    <!-- Noted Items -->
    <div class="p-1 bg-blue-100 min-h-40 col-span-2">
      <h1 class="text-xl font-bold text-blue-500">
        Notes
      </h1>

      <div class="
    flex
    gap-1
    flex-wrap
      ">

        <div v-for="item in notedItems" :key="item.id" class="
          bg-blue-200
          rounded-md
          border
          p-1
          shadow
          text-[10px]
          font-bold
        ">

          <span v-html="SECTION_MAP[item.section].icon"></span> {{ item.name }}:
          <span v-html="item.notes" class="text-xs text-gray-600"></span>
        </div>

      </div>
    </div>
  </section>

</template>
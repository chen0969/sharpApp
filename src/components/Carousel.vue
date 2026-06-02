<script setup lang="ts">
import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const slides = [

  {
    title: 'Page 1'
  },

  {
    title: 'Page 2'
  },

  {
    title: 'Page 3'
  },

]

const current = ref(0)

useIntervalFn(() => {

  current.value =

    (current.value + 1)

    %

    slides.length

}, 1000)
</script>

<template>

  <div class="relative h-64 bg-gray-500">

    <Transition name="fade">

      <div
        :key="current"
        class="
          absolute
          inset-0

          flex
          items-center
          justify-center
        "
      >

        {{ slides[current].title }}

      </div>

    </Transition>

  </div>

</template>
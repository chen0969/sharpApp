<script setup lang="ts">
import { ref } from 'vue'
import { useElementHover } from '@vueuse/core'

import type { Item } from '../initStore/itemsList'

import { STATUS_MAP } from '../data/statuses'
import { SECTION_MAP } from '../data/sections'

import { deleteItem } from '../composables/useItems'

import EditItemModal from './EditCard.vue'

import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
} from 'radix-vue'

const props = defineProps<{
  item: Item,
  // for different page
  variant?: 'swiper' | 'allcard'
}>()

const isEditing = ref(false)

const cardRef = ref<HTMLElement | null>(null)

const isHovered = useElementHover(cardRef)

</script>

<template>

  <section class="flex justify-center items-center w-full h-full" >
    <div ref="cardRef" class="
      rounded-3xl
      border
      border-gray-500
      min-h-fit
      sm:h-full
      transition-all
      duration-100
      shadow-md
    " :class="[
      STATUS_MAP[item.status].bgColor,

      isHovered
        ? 'shadow-xl -translate-y-1'
        : '',

      variant === 'swiper' ? 'text-stone-700 text-2xl h-100 w-[90%] p-5 rounded-3xl' : 'text-[12px] w-full h-full p-2 rounded-sm'
    ]">

      <!-- HEADER -->

      <div class="
        flex
        justify-between
        items-start
        mb-4
      ">

        <div>

          <h2 class="
            font-bold
            leading-tight
          ">
            {{ item.name }}
          </h2>

          <div class="
            opacity-70
            mt-1
          "
          :class="SECTION_MAP[item.section].color"
          >
            {{ SECTION_MAP[item.section].label }}
            <span v-html="SECTION_MAP[item.section].icon"></span>
          </div>

        </div>

        <!-- RADIX MENU -->

        <DropdownMenuRoot>

          <DropdownMenuTrigger as-child>

            <button class="
              h-9
              w-9
              rounded-full
              active:bg-black/10
            ">
              <i class="bi bi-three-dots"></i>
            </button>

          </DropdownMenuTrigger>

          <DropdownMenuPortal>

            <DropdownMenuContent class="
              rounded-sm
              bg-white
              border
              shadow-xl
              p-1
              z-50
            ">

              <DropdownMenuItem class="
                px-3
                py-2
                rounded-lg

                cursor-pointer

                active:bg-gray-200
              " @select="isEditing = true">

                <i class="bi bi-pencil"></i> Edit

              </DropdownMenuItem>

              <DropdownMenuItem class="
                px-3
                py-2
                rounded-lg

                cursor-pointer

                text-red-600

                active:bg-red-50
              " @select="deleteItem(item.id)">

                <i class="bi bi-trash"></i> Delete

              </DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenuPortal>

        </DropdownMenuRoot>

      </div>

      <!-- STATUS -->

      <div class="mb-4">

        <span class="
          px-3
          py-1

          rounded-full

          text-sm
          font-medium
        " :class="STATUS_MAP[item.status].color">
          {{ STATUS_MAP[item.status].label }}
        </span>

      </div>

      <!-- NOTES -->

      <div class="
        space-y-2

        overflow-auto

        max-h-32
      ">

        <div v-for="note in item.notes" :key="note" class="
          bg-white/70

          rounded-xl

          p-3

          text-sm
        ">

          {{ note }}

        </div>

        <div v-if="item.notes.length === 0" class="
          text-sm
          opacity-50
          italic
        ">
          No notes
        </div>

      </div>

    </div>
  </section>


  <EditItemModal v-if="isEditing" :item="item" @close="isEditing = false" />

</template>
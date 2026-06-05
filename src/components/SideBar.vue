<script setup lang="ts">
import { ref } from 'vue'
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'radix-vue'

// 控制面板開關的狀態 (如果不透過 Trigger 鈕，也可以從外部傳入 props 控制)
const isOpen = ref(false)
</script>

<template>
  <DialogRoot v-model:open="isOpen">
    <DialogTrigger class="p-2 bg-slate-400 text-white rounded-sm transition">
      <i class="bi bi-list"></i>
    </DialogTrigger>

    <DialogPortal>

      <DialogOverlay
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />

      <DialogContent
        class="fixed top-0 right-0 bottom-0 w-50 bg-slate-900 border-l border-slate-800 p-5 shadow-2xl z-50 flex flex-col justify-between
               focus:outline-none h-dvh
               data-[state=open]:transition-transform data-[state=open]:duration-300 data-[state=open]:ease-out data-[state=open]:translate-x-0
               data-[state=closed]:transition-transform data-[state=closed]:duration-200 data-[state=closed]:ease-in data-[state=closed]:translate-x-full">
        <!-- missions -->
        <div>
          <DialogTitle class="text-lg font-bold text-white">All Missions</DialogTitle>
          <DialogDescription class="text-xs text-slate-400">Choose Mission</DialogDescription>

          <nav class="flex flex-col gap-1">
            <RouterLink to="/open-check" @click="isOpen = false"
              class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">Opening
            </RouterLink>
            <RouterLink to="/close-check" @click="isOpen = false"
              class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">Closing
            </RouterLink>
            <RouterLink to="/inven-swiper" @click="isOpen = false"
              class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">Inventory
            </RouterLink>
            <RouterLink to="/operation-timer" @click="isOpen = false"
              class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">Operation
            </RouterLink>
          </nav>
        </div>
        <!-- functions -->
        <div>
          <DialogTitle class="text-lg font-bold text-blue-100">All Functions</DialogTitle>
          <DialogDescription class="text-xs text-slate-400">List sorted by functions</DialogDescription>

          <nav class="flex flex-col gap-1">
            <RouterLink to="/inven-swiper" @click="isOpen = false"
              class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">Swiper
            </RouterLink>
            <RouterLink to="/inven-all" @click="isOpen = false"
              class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">All Cards
            </RouterLink>
            <RouterLink to="/inven-sum" @click="isOpen = false"
              class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">Summary
            </RouterLink>
          </nav>
        </div>

        <DialogClose
          class="w-full py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-xl text-center font-medium transition">
          <i class="bi bi-list"></i> Close Sidebar
        </DialogClose>

      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
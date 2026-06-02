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
    <DialogTrigger class="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
      開啟選單
    </DialogTrigger>

    <DialogPortal>
      
      <DialogOverlay 
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" 
      />

      <DialogContent
        class="fixed top-0 right-0 bottom-0 w-72 bg-slate-900 border-l border-slate-800 p-6 shadow-2xl z-50 flex flex-col justify-between
               focus:outline-none h-dvh
               data-[state=open]:transition-transform data-[state=open]:duration-300 data-[state=open]:ease-out data-[state=open]:translate-x-0
               data-[state=closed]:transition-transform data-[state=closed]:duration-200 data-[state=closed]:ease-in data-[state=closed]:translate-x-full"
      >
        <div>
          <DialogTitle class="text-lg font-bold text-white mb-2">主選單</DialogTitle>
          <DialogDescription class="text-xs text-slate-400 mb-6">請選擇功能群組</DialogDescription>

          <nav class="flex flex-col gap-2">
            <RouterLink to="/open-check" @click="isOpen = false" class="p-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">開班檢查</RouterLink>
            <RouterLink to="/close-check" @click="isOpen = false" class="p-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">結班檢查</RouterLink>
            <RouterLink to="/timer" @click="isOpen = false" class="p-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition">計時器功能</RouterLink>
          </nav>
        </div>

        <DialogClose class="w-full py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-xl text-center font-medium transition">
          關閉選單
        </DialogClose>

      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'

// 寫一個輔助函式來轉換本機圖片路徑
const getImageUrl = (name: string) => {
  return new URL(`../assets/slides/${name}`, import.meta.url).href
}

const slides = [
  { url: 'https://placehold.co/600x400/E63946/FFFFFF', label: 'Page 1' },
  { url: getImageUrl('1slide.jpeg'), label: 'Page 4' },
  { url: getImageUrl('2slide.jpeg'), label: 'Page 5' },
  { url: getImageUrl('3slide.jpeg'), label: 'Page 5' },
  { url: getImageUrl('4slide.jpeg'), label: 'Page 5' },
  { url: getImageUrl('5slide.jpeg'), label: 'Page 5' },
  { url: getImageUrl('6slide.jpeg'), label: 'Page 5' },
  { url: getImageUrl('7slide.jpeg'), label: 'Page 5' },
  { url: getImageUrl('8slide.jpeg'), label: 'Page 5' },
  { url: getImageUrl('9slide.jpeg'), label: 'Page 5' },
]

const current = ref(0)
const isFakeFullscreen = ref(false)

useIntervalFn(() => {
  current.value = (current.value + 1) % slides.length
}, 3000)

async function toggleFullscreen() {
  isFakeFullscreen.value = !isFakeFullscreen.value

  if (isFakeFullscreen.value) {
    document.body.classList.add('carousel-fullscreen')
  } else {
    document.body.classList.remove('carousel-fullscreen')
  }

  try {
    if (isFakeFullscreen.value) {
      await screen.orientation.lock('landscape')
    } else {
      screen.orientation.unlock()
    }
  } catch { }
}
</script>

<template>
  <!-- 全螢幕時用 fixed 蓋滿整個視窗 -->
  <div class="relative bg-black overflow-hidden transition-all" :class="isFakeFullscreen
    ? 'fixed inset-0 z-50 w-screen h-screen'
    : 'relative w-full h-64'
    ">
    <Transition name="fade">
      <img :key="current" :src="slides[current].url" :alt="slides[current].label"
        class="absolute inset-0 w-full h-full object-contain" />
    </Transition>

    <!-- 全螢幕按鈕 -->
    <button @click="toggleFullscreen" class="
        absolute bottom-3 right-3
        bg-black/50 text-white
        rounded-md px-3 py-1 text-sm
        backdrop-blur-sm
      ">
      {{ isFakeFullscreen ? '✕ 離開' : '⛶ 全螢幕' }}
    </button>

    <!-- 指示點 -->
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
      <button v-for="(_, i) in slides" :key="i" @click="current = i" class="w-2 h-2 rounded-full transition-colors"
        :class="i === current ? 'bg-white' : 'bg-white/40'" />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
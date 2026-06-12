<script setup lang="ts">
import { ref, watch } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { useGalleryImages } from '../composables/useGalleryImages'

const { slides } = useGalleryImages()
const current = ref(0)
const isFakeFullscreen = ref(false)

// ✅ 只保留一個 useIntervalFn，slides 要用 .value.length
const { pause, resume, isActive } = useIntervalFn(() => {
  current.value = (current.value + 1) % slides.value.length
}, 3000, { immediate: false })

// ✅ slides 更新時若 current 超出範圍則重置
watch(slides, (newSlides) => {
  if (current.value >= newSlides.length) {
    current.value = 0
  }
})

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
  } catch {}
}
</script>

<template>
  <!-- 全螢幕時用 fixed 蓋滿整個視窗 -->
  <div
    class="relative bg-black overflow-hidden transition-all"
    :class="isFakeFullscreen
      ? 'fixed inset-0 z-50 w-screen h-screen'
      : 'relative w-full h-64'
    "
  >
    <Transition name="fade">
      <img
      v-if="slides[current]"
        :key="current"
        :src="slides[current].url"
        :alt="slides[current].label"
        class="absolute inset-0 w-full h-full object-contain"
      />
    </Transition>

    <!-- 全螢幕按鈕 -->
    <button
      @click="toggleFullscreen"
      class="
        absolute bottom-3 right-3
        bg-black/50 text-white
        rounded-md px-3 py-1 text-sm
        backdrop-blur-sm
      "
    >
      {{ isFakeFullscreen ? '✕ 離開' : '⛶ 全螢幕' }}
    </button>

    <!-- 播放/暫停按鈕，放在全螢幕按鈕旁 -->
<button
  @click="isActive ? pause() : resume()"
  class="
    absolute bottom-3 left-3
    bg-black/50 text-white
    rounded-md px-3 py-1 text-sm
    backdrop-blur-sm
  "
>
  {{ isActive ? '⏸ 暫停' : '▶ 播放' }}
</button>

    <!-- 指示點 -->
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="current = i"
        class="w-2 h-2 rounded-full transition-colors"
        :class="i === current ? 'bg-white' : 'bg-white/40'"
      />
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
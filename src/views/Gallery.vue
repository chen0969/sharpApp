<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
import slider from '../assets/video/slider.mp4'

const videoEl = ref<HTMLVideoElement | null>(null)
const isFullscreen = ref(false)
let player: Plyr | null = null

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

async function toggleFullscreen() {
  if (isIOS) {
    // iOS：使用 fake fullscreen
    isFullscreen.value = !isFullscreen.value
    try {
      if (isFullscreen.value) {
        await screen.orientation.lock('landscape')
      } else {
        screen.orientation.unlock()
      }
    } catch { }
  } else {
    // 其他平台：讓 Plyr 自己處理
    player?.fullscreen.toggle()
  }
}

onMounted(() => {
  if (videoEl.value) {
    player = new Plyr(videoEl.value, {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    })

    if (isIOS) {
      // 攔截 Plyr 的全螢幕按鈕，改用我們自己的邏輯
      player.on('enterfullscreen', (e) => {
        e.preventDefault?.()
        toggleFullscreen()
      })
    }
  }
})

onUnmounted(() => {
  if (isFullscreen.value) screen.orientation.unlock()
  player?.destroy()
})
</script>

<template>
  <div class="bg-black" :class="isFullscreen
    ? 'fixed inset-0 z-50 w-screen h-screen'
    : 'w-full aspect-video'
    ">
    <video ref="videoEl" playsinline controls class="w-full h-full">
      <source :src="slider" type="video/mp4" />
    </video>
    <button v-if="isIOS" @click="toggleFullscreen"
      class="absolute bottom-4 right-4 z-10 text-white bg-black/50 p-2 rounded">
      {{ isFullscreen ? '✕' : '⛶' }}
    </button>
  </div>
</template>
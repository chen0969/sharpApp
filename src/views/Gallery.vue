<script setup lang="ts">
import Carousel from '../components/Carousel.vue'
import { useGalleryImages } from '../composables/useGalleryImages'

const { uploadedImages, addImage, removeImage } = useGalleryImages()

function onFileChange(e: Event) {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  Array.from(files).forEach(addImage)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <Carousel />

    <section class="fullscreen-hide">
      <!-- 上傳按鈕 -->
      <label class="cursor-pointer bg-blue-500 text-white rounded-md px-4 py-2 text-center">
        ＋ 上傳圖片
        <input type="file" accept="image/*" multiple class="hidden" @change="onFileChange" />
      </label>

      <!-- 已上傳圖片列表 -->
      <div class="grid grid-cols-3 gap-2">
        <div v-for="(url, i) in uploadedImages" :key="i" class="relative">
          <img :src="url" class="w-full h-24 object-cover rounded" />
          <button @click="removeImage(i)"
            class="absolute top-1 right-1 bg-black/60 text-white rounded-full w-5 h-5 text-xs">✕</button>
        </div>
      </div>
    </section>
  </div>
</template>
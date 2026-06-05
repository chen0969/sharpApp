<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 1. 定義所有的選單資料結構
const menuData = {
  Home: [
    { name: 'Mission Board', routeName: 'home' }
  ],
  Open: [
    { name: 'Opening', routeName: 'open-check' }
  ],
  Close: [
    { name: 'Closing', routeName: 'close-check' },
    { name: 'Revenue', routeName: 'close-revenue' },
    { name: 'Swiper', routeName: 'close-swiper' },
  ],
  Inven: [
    { name: 'Swiper', routeName: 'inven-swiper' },
    { name: 'All', routeName: 'inven-all' },
    { name: 'Summary', routeName: 'inven-sum' },
  ],
  Operation: [
    { name: 'Cook Timer', routeName: 'operation-timer' },
    { name: 'Gallery', routeName: 'operation-gallery' }
  ]
}

// 2. 核心：根據當前路由的 meta.group，動態抓取對應的選單陣列
const currentMenuItems = computed(() => {
  const group = route.meta.group as keyof typeof menuData
  // 如果找不到群組，預設給 Inven
  return menuData[group] || menuData['Inven']
})
</script>

<template>

  <RouterLink v-for="item in currentMenuItems" :key="item.routeName" :to="{ name: item.routeName }"
    class="flex-1 text-center p-1 text-sm bg-gray-100 rounded-sm font-medium transition-colors duration-200"
    active-class="text-taupe-400 font-bold" inactive-class="text-taupe-600 hover:text-slate-200">
    {{ item.name }}
  </RouterLink>

</template>
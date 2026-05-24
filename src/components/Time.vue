<template>
  <div class="text-xs text-slate-500 font-medium">
    {{ today }}
  </div>
</template>

<script setup lang="ts">
// 取得當前日期與時間 (格式：2026/5/24 下午6:05)
const today = new Date().toLocaleString('en-CA', {
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
})
</script>
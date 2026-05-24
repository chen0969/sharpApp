<script setup lang="ts">
import logo from './assets/invencheck.svg'
import AddCardBtn from './components/AddCardBtn.vue'
import ResetBtn from './components/ResetBtn.vue'
import Time from './components/Time.vue'
</script>
<template>

  <div class="min-h-screen bg-gray-100">

    <!-- Navigation -->
    <nav class="
        flex gap-2
        p-3 text-xs
        shadow-2xl shadow-gray-300
        bg-white
        items-center
        justify-between
      ">

      <RouterLink to="/swiper" class="
          px-4 py-2 rounded-xl
          bg-blue-500 text-white
        ">
        Swiper
      </RouterLink>

      <RouterLink to="/all" class="
          px-4 py-2 rounded-xl
          bg-gray-200
        ">
        All
      </RouterLink>

      <RouterLink to="/summary" class="
          px-4 py-2 rounded-xl
          bg-gray-200
        ">
        Sum
      </RouterLink>
      <Time />
    </nav>

    <!-- Current Page -->
    <RouterView id="capture-area" />

    <div class="flex justify-center mt-5 p-10 pb-2">
      <img class="p-10 pb-2" :src="logo" alt="" />
    </div>

  </div>

  <AddCardBtn />
  <ResetBtn />
</template>
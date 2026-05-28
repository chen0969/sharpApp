<script setup lang="ts">
import logo from './assets/invencheck.svg'
import icon from './assets/invencheck-icon.svg'
import AddCardBtn from './components/AddCardBtn.vue'
import ResetBtn from './components/ResetBtn.vue'
import Time from './components/Time.vue'
</script>
<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <!-- Navigation -->
    <nav class="
        flex gap-2
        p-3 text-xs
        shadow-2xl shadow-gray-300
        bg-white
        items-center
        justify-between
      ">
      <RouterLink to="/" class="p-0">
        <img class="w-10" :src="icon" alt="" />
      </RouterLink>

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

      <RouterLink to="/timer" class="
          px-4 py-2 rounded-xl
          bg-gray-200
        ">
        Timer
      </RouterLink>
    </nav>
    <Time class="p-1 flex justify-center items-center" />
  </header>

  <div class="min-h-80 bg-gray-100">
    <!-- Current Page -->
    <RouterView id="capture-area" />
  </div>

  <footer>
    <div class="flex justify-center">
      <img class="p-2 w-45" :src="logo" alt="" />
    </div>
    <div class="flex flex-col items-center gap-2">
      <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-xs">
        <a href="https://forms.gle/2DAQH7zTCBnj8REQ7" class="text-center text-gray-500 text-xs block mt-1">
          Feedback
        </a>
      </button>
      <p class="text-center text-gray-200 text-xs">
        &copy; 2024 Invencheck. All rights reserved.
      </p>
    </div>
    <AddCardBtn />
    <ResetBtn />
  </footer>

</template>
<script setup lang="ts">
import logo from './assets/invencheck.svg'
import AddCardBtn from './components/AddCardBtn.vue'
import ResetBtn from './components/ResetBtn.vue'
</script>
<template>

  <div class="min-h-screen bg-gray-100">

    <!-- Navigation -->
    <nav class="
        flex gap-3
        p-4
        border-b
        bg-white
      ">

      <RouterLink to="/" class="
          px-4 py-2 rounded-xl
          bg-blue-500 text-white
        ">
        Swiper
      </RouterLink>

      <RouterLink to="/all" class="
          px-4 py-2 rounded-xl
          bg-gray-200
        ">
        All Cards
      </RouterLink>

    </nav>

    <!-- Current Page -->
    <RouterView />

    <div class="flex justify-center mt-5 p-10 pb-2">
      <img class="p-10 pb-2" :src="logo" alt="" />
    </div>

  </div>

  <AddCardBtn />
  <ResetBtn />

</template>
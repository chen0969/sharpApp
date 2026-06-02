<script setup lang="ts">
import logo from './assets/invencheck.svg'
import icon from './assets/invencheck-icon.svg'
import AddCardBtn from './components/AddCardBtn.vue'
import ResetBtn from './components/ResetBtn.vue'
import Time from './components/Time.vue'

// navber
import InteractNavbar from './components/InteractNavbar.vue'

// side bar test
import SideBar from './components/SideBar.vue'
</script>
<template>
  <div class="h-dvh flex flex-col overflow-hidden">
    <header class="sticky top-0 z-50 bg-gray-100 shadow-md h-14">
      <!-- Navigation -->
      <nav class="
        flex gap-1
        p-1 text-[10px]
        shadow-2xl shadow-gray-300
        bg-white
        items-center
        justify-around
      ">
          <SideBar />
        <RouterLink to="/" class="p-0">
          <img class="w-8" :src="icon" alt="" />
        </RouterLink>

        <InteractNavbar />
      </nav>
      <Time class="flex justify-center items-center text-[10px]" />
    </header>

    <main class="flex-1 overflow-y-auto bg-gray-100">
      <!-- Current Page -->
      <RouterView id="capture-area" />
    </main>

    <footer class="bg-white shadow-md h-min text-[10px] p-1">
      <div class="flex justify-center">
        <img class="w-30" :src="logo" alt="" />
      </div>
      <div class="flex flex-col items-center">
        <button class="bg-gray-200 text-gray-700 p-1 rounded-sm text-[10px]">
          <a href="https://forms.gle/2DAQH7zTCBnj8REQ7">
            Feedback
          </a>
        </button>
        <p class="text-center text-gray-200 text-[10px]">
          &copy; 2024 Invencheck. All rights reserved.
        </p>
      </div>
    </footer>
    <AddCardBtn />
    <ResetBtn />
  </div>

</template>
<script setup lang="ts">
</script>

<template>
    <!-- Navigation -->
    <nav class="
        flex flex-col gap-1 h-full p-5
        items-center
        justify-around
      ">
        <RouterLink to="/open-check"
            class="p-3 text-slate-50 rounded-md bg-slate-300 font-bold text-lg w-50 text-center">
            <i class="bi bi-door-open"></i> Opening <span class="text-[8px]">(not ready)</span>
        </RouterLink>

        <RouterLink to="/close-check"
            class="p-3 text-slate-50 rounded-md bg-slate-300 font-bold text-lg w-50 text-center">
            <i class="bi bi-door-closed"></i> Closing <span class="text-[8px]">(not ready)</span>
        </RouterLink>

        <RouterLink to="/inven-swiper"
            class="p-3 text-slate-50 rounded-md bg-slate-500 font-bold text-lg w-50 text-center">
            <i class="bi bi-shop"></i> Inventory
        </RouterLink>

        <RouterLink to="/operation-timer"
            class="p-3 text-slate-50 rounded-md bg-slate-300 font-bold text-lg w-50 text-center">
            <i class="bi bi-bag"></i> Operation <span class="text-[8px]">(not ready)</span>
        </RouterLink>

    </nav>
</template>
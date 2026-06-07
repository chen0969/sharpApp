<script setup lang="ts">
import { SECTION_MAP }
    from '../data/sections'
</script>

<template>

    <div class="
      max-w-2xl
      mx-auto
      p-6
    ">

        <h1 class="
        text-3xl
        font-bold
        mb-6
      ">
            Choose Section
        </h1>

        <RouterLink v-for="(section, key) in SECTION_MAP" :key="key" :to="`/swiper/${key}`" class="
        block
        p-4
        mb-3
        border
        hover:shadow-md
        transition-shadow
        !text-lg
        !w-full
      " :class="section.color">

            {{ section.label }} <span v-html="section.icon"></span>

        </RouterLink>

    </div>

</template>
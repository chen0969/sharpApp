<script setup lang="ts">
import { items } from '../composables/useItems'

import ItemCard from '../components/ItemCard.vue'
</script>

<template>

  <div
    class="
      grid gap-5
      md:grid-cols-2
      lg:grid-cols-3
      p-5
    "
  >

    <ItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
    />

  </div>

</template>
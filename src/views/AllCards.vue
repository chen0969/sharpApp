<script setup lang="ts">
import { items } from '../composables/useItems'

import ItemCard from '../components/ItemCard.vue'
</script>

<template>

  <div
    class="
      grid grid-cols-2 gap-2
      p-1
      pt-3
    "
  >

    <ItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
    />

  </div>

</template>
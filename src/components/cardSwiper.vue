<script setup lang="ts">
import { items } from '../composables/useItems'

import ItemCard from './ItemCard.vue'

import AddItem from './AddItem.vue';
</script>

<template>

  <div class="grid gap-5">

    <ItemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
    />

    <AddItem />

  </div>
</template>
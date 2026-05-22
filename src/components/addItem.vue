<script setup lang="ts">
import { ref } from 'vue'

import { STATUS_MAP } from '../data/statuses'

import { items } from '../composables/useItems'

import type { StatusKey } from '../data/statuses'

const name = ref('')

const status = ref<StatusKey>('undefined')

function addItem() {

  if (!name.value.trim()) return

  items.value.push({

    id: crypto.randomUUID(),

    name: name.value,

    status: status.value,

    notes: [],
  })

  name.value = ''

  status.value = 'undefined'
}
</script>

<template>

  <div class="space-y-4">

    <input v-model="name" placeholder="Item name" class="border p-3 rounded-xl w-full" />

    <select v-model="status" class="border p-3 rounded-xl w-full">

      <option v-for="(value, key) in STATUS_MAP" :key="key" :value="key">
        {{ value.label }}
      </option>

    </select>

    <button @click="addItem" class="bg-blue-500 text-white px-5 py-3 rounded-xl">
      <i class="bi bi-plus-circle"></i>
    </button>

  </div>

</template>
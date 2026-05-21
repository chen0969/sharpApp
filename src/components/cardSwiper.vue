<!-- src/components/ItemSwiper.vue -->
<script setup>
import { ref, watch } from 'vue'
import ItemCard from './ItemCard.vue'
import ResetBtn from './ResetBtn.vue'
import AddItem from './AddItem.vue' // <-- 1. Import your new button form component

import { initialFallback } from './itemsList.js'

const savedData = localStorage.getItem('my_dashboard_items')
const items = ref(savedData ? JSON.parse(savedData) : initialFallback)

watch(items, (newItems) => {
    localStorage.setItem('my_dashboard_items', JSON.stringify(newItems))
}, { deep: true })

// 2. Add Item Handler Action
const handleAddItem = (newItemProfile) => {
    // Push the newly formatted object directly to the front of our dynamic display loop
    items.value.unshift(newItemProfile)
}

const handleUpdateNotes = (id, updatedNotes) => {
    const targetItem = items.value.find(item => item.id === id)
    if (targetItem) targetItem.notes = updatedNotes
}

const handleDelete = (id) => {
    items.value = items.value.filter(item => item.id !== id)
}

const handleResetDatabase = () => {
    items.value = JSON.parse(JSON.stringify(initialFallback))
}
</script>

<template>
    <div class="p-0 max-w-7xl mx-auto">
        <!-- Header panel housing dashboard tags and creation controllers -->
        <header
            class="flex flex-col gap-3 justify-between items-center bg-gray-500 p-4 border border-gray-200 shadow-sm">
            <div>
                <h1 class="text-2xl font-bold text-yellow-100 text-center">Sharpfle Inventory</h1>
                <p class="text-xs text-gray-200 mt-0.5">Real-time local storage mutation processing engine</p>
            </div>

            <!-- Utility Button controls wrapper panel alignment -->
            <div class="flex-col items-center gap-3">
                <ResetBtn class="m-2" @reset="handleResetDatabase" />
                <!-- 3. Add Component template call shell -->
                <AddItem class="m-2" @item-added="handleAddItem" />
            </div>
        </header>

        <section class="p-4">
            <!-- Core dynamic render loop grid container assembly view -->
            <div v-if="items.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ItemCard v-for="singleItem in items" :key="singleItem.id" :item="singleItem"
                    @update-notes="handleUpdateNotes" @delete="handleDelete" />
            </div>

            <!-- Empty State Dashboard View -->
            <div v-else class="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <p class="text-gray-500 mb-4">Your workspace dashboard database directory is currently empty.</p>
                <!-- Quick user escape route to trigger creation right from empty terminal center stage -->
                <AddItem @item-added="handleAddItem" class="inline-block mx-auto" />
            </div>
        </section>

    </div>
</template>
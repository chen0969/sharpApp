import { ref, watch } from 'vue'

import { defaultItems, type Item } from '../initStore/itemsList'

const STORAGE_KEY = 'my-items'

function loadItems(): Item[] {

  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved) {
    return JSON.parse(saved)
  }

  return structuredClone(defaultItems)
}

export const items = ref<Item[]>(loadItems())

watch(
  items,

  (newItems) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(newItems)
    )
  },

  {
    deep: true,
  }
)

export function resetItems() {

  items.value = structuredClone(defaultItems)

}
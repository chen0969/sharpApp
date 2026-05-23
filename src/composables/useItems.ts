import { ref, watch } from 'vue'

import { defaultItems, type Item } from '../initStore/itemsList'
import type { StatusKey } from '../data/statuses'

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

  localStorage.removeItem(
    STORAGE_KEY
  )

  items.value = structuredClone(
    defaultItems
  )

}

export function deleteItem(id: string) {

    items.value = items.value.filter(
        item => item.id !== id
    )

}

export function updateItem(updatedItem: Item) {

    const index = items.value.findIndex(
        item => item.id === updatedItem.id
    )

    if (index !== -1) {

        items.value[index] = updatedItem

    }

}

// for swipping
export function updateItemStatus(
  id: string,
  status: StatusKey
) {

  const item = items.value.find(
    item => item.id === id
  )

  if (!item) return

  item.status = status

}

export function addItem(
  item: Item
) {

  items.value.push(item)

}
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { CheckboxIndicator, CheckboxRoot, Label } from 'radix-vue'
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from 'radix-vue'
import { TreeItem, TreeRoot } from 'radix-vue'
import { OPENING_TREE, type TreeNode } from '../../data/Opening/openingTree'

const props = defineProps<{
  uid: number | null
}>()

const emit = defineEmits<{
  allChecked: [uid: number, value: boolean]
}>()

const treeData = computed<TreeNode[]>(() => {
  if (props.uid === null) return OPENING_TREE
  const match = OPENING_TREE.find(node => node.id === props.uid)
  return match ? [match] : []
})

const checked = ref<Record<number, boolean>>({})

function isParentChecked(node: TreeNode): boolean {
  if (!node.children) return !!checked.value[node.id]
  return node.children.every(child => checked.value[child.id])
}

function isParentIndeterminate(node: TreeNode): boolean {
  if (!node.children) return false
  const someChecked = node.children.some(child => checked.value[child.id])
  const allChecked = node.children.every(child => checked.value[child.id])
  return someChecked && !allChecked
}

function toggleParent(node: TreeNode, value: boolean) {
  if (node.children) {
    node.children.forEach(child => {
      checked.value[child.id] = value
    })
  }
  checked.value[node.id] = value
}

function toggleChild(childId: number, value: boolean) {
  checked.value[childId] = value
}

const selectedItems = computed(() => {
  return Object.entries(checked.value)
    .filter(([, v]) => v)
    .map(([k]) => k)
})

watch(checked, () => {
  if (props.uid === null) return
  const match = OPENING_TREE.find(node => node.id === props.uid)
  if (!match) return
  emit('allChecked', props.uid, isParentChecked(match))
}, { deep: true })
</script>

<template>
  <div class="p-5">
    <ScrollAreaRoot class="h-[80%] border rounded-lg overflow-hidden">
      <ScrollAreaViewport class="h-full w-full p-3">
        <TreeRoot :items="treeData" :get-key="(item) => item.id" >
          <TreeItem
            v-for="node in treeData"
            :key="node.id"
            :value="node"
          >
            <div class="flex gap-1 cursor-pointer">
              <CheckboxRoot
                :id="node.id"
                :checked="isParentIndeterminate(node) ? 'indeterminate' : isParentChecked(node)"
                @update:checked="(v) => toggleParent(node, !!v)"
                class="w-4 h-4 border border-gray-400 rounded flex items-center justify-center data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=indeterminate]:bg-blue-200 data-[state=indeterminate]:border-blue-300"
              >
                <CheckboxIndicator>
                  <svg
                    v-if="isParentIndeterminate(node)"
                    class="w-3 h-3 text-blue-600"
                    fill="currentColor" viewBox="0 0 16 16"
                  >
                    <rect x="2" y="7" width="12" height="2" rx="1"/>
                  </svg>
                  <svg
                    v-else
                    class="w-3 h-3 text-white"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </CheckboxIndicator>
              </CheckboxRoot>
              <label :for="node.id" class="text-sm font-medium cursor-pointer select-none">
                {{ node.label }}
              </label>
            </div>

            <div v-if="node.children" class="ml-6 mt-0.5">
              <div
                v-for="child in node.children"
                :key="child.id"
                class="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer"
              >
                <CheckboxRoot
                  :id="child.id"
                  :checked="!!checked[child.id]"
                  @update:checked="(v) => toggleChild(child.id, !!v)"
                  class="w-4 h-4 border border-gray-400 rounded flex items-center justify-center data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                >
                  <CheckboxIndicator>
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </CheckboxIndicator>
                </CheckboxRoot>
                <label :for="child.id" class="text-sm cursor-pointer select-none text-gray-700">
                  {{ child.label }}
                </label>
              </div>
            </div>
          </TreeItem>
        </TreeRoot>
      </ScrollAreaViewport>

      <ScrollAreaScrollbar orientation="vertical" class="w-1.5 p-px">
        <ScrollAreaThumb class="bg-gray-300 rounded-full" />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>

    <!-- <div class="mt-4 text-[10px] text-gray-500">
      Done:{{ selectedItems.length > 0 ? selectedItems.join(', ') : 'N/A' }}
    </div> -->
  </div>
</template>
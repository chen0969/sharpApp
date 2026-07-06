<script lang="ts" setup>
import { ref } from 'vue'
import Tree from "../opening/OpenTree.vue"
import { SHAPES_BAR_MAP, type Shape } from '../../data/Opening/openingBarMap'

const completedUids = ref<Set<number>>(new Set())
const activeId = ref<string | null>(null)
const selectedUid = ref<number | null>(null)

function handleClick(shape: Shape) {
    activeId.value = shape.id
    selectedUid.value = shape.uid
    shape.action()
}

function handleAllChecked(uid: number, value: boolean) {
    if (value) {
        completedUids.value.add(uid)
    } else {
        completedUids.value.delete(uid)
    }
}
</script>

<template>
    <div class="h-full overflow-hidden">
        <div class="p-5 h-[50%] justify-center items-center flex">
            <svg height="100%" viewBox="0 0 326 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                <component v-for="shape in SHAPES_BAR_MAP" :key="shape.id" :is="shape.type" v-bind="shape.props" :fill="completedUids.has(shape.uid)
                    ? '#4CAF50'
                    : activeId === shape.id ? '#FFA500' : '#FFD17B'" class="cursor-pointer transition-opacity"
                    @click="handleClick(shape)" />
            </svg>
        </div>
        <Tree class="h-[50%]" :uid="selectedUid" @all-checked="handleAllChecked" />
    </div>
</template>
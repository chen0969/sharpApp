<script setup lang="ts">
import { ref } from 'vue'
import { STATUS_MAP, type StatusKey } from '../data/statuses'
defineProps<{
    statuses: StatusKey[]
}>()

const emit = defineEmits<{
    select: [status: StatusKey]
}>()

const buttonRefs = ref<Record<StatusKey, HTMLElement | null>>({} as any)
const isFlying = ref(false)

async function handleClick(status: StatusKey) {
    if (isFlying.value) return

    const el = buttonRefs.value[status]
    if (!el) return

    isFlying.value = true

    const animation = el.animate(           // ✅ 直接用原生 el.animate()，不需要等 ref 初始化
        [
            { transform: 'translateY(0) scale(1)',     opacity: 1   },
            { transform: 'translateY(-40px) scale(1.1)', opacity: 0.6 },
            { transform: 'translateY(-80px) scale(1.3)', opacity: 0   },
        ],
        { duration: 200, easing: 'ease-in', fill: 'backwards' }
    )

    await animation.finished               // ✅ 直接拿到 Animation 實例，不經過 ref
    isFlying.value = false
    emit('select', status)
}
</script>

<template>
    <div class="w-dvw flex justify-center gap-4">
        <button v-for="status in statuses" :key="status" :ref="el => buttonRefs[status] = el as HTMLElement"
            @click="handleClick(status)" :disabled="isFlying"
            class="p-3 min-w-[5rem] text-xs rounded-3xl shadow-md shadow-mist-600 disabled:pointer-events-none"
            :class="[
                STATUS_MAP[status].bgColor,
                isFlying ? 'cursor-not-allowed' : 'hover:scale-110 active:scale-95 transition-transform'
            ]">
            <span v-html="STATUS_MAP[status].icon" class="text-3xl"></span><br>
            {{ STATUS_MAP[status].label }}
        </button>
    </div>
</template>
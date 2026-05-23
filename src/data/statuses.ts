export const STATUS_MAP = {
  undefined: {
    id: 1,
    label: 'Undefined',
    color: 'bg-gray-100 text-gray-500',
    bgColor: 'bg-gray-500',
  },

  good: {
    id: 2,
    label: 'Good',
    color: 'bg-green-500 text-green-700',
    bgColor: 'bg-green-500',
  },

  empty86: {
    id: 3,
    label: 'Empty 86',
    color: 'bg-yellow-200 text-yellow-700',
    bgColor: 'bg-yellow-500',
  },
} as const

export type StatusKey = keyof typeof STATUS_MAP
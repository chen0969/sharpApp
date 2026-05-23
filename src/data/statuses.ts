export const STATUS_MAP = {
  undefined: {
    id: 1,
    label: 'Undefined',
    color: 'bg-gray-100 text-gray-400',
    bgColor: 'bg-gray-200',
  },

  good: {
    id: 2,
    label: 'Good',
    color: 'bg-green-500 text-green-700',
    bgColor: 'bg-green-200',
  },

  empty86: {
    id: 3,
    label: 'Empty 86',
    color: 'bg-yellow-500 text-yellow-700',
    bgColor: 'bg-yellow-200',
  },
} as const

export type StatusKey = keyof typeof STATUS_MAP
export const STATUS_MAP = {
  undefined: {
    label: 'Undefined',
    color: 'bg-gray-200 text-gray-700',
    bgColor: 'bg-gray-500',
  },

  good: {
    label: 'Good',
    color: 'bg-green-200 text-green-700',
    bgColor: 'bg-green-500',
  },

  empty86: {
    label: 'Empty 86',
    color: 'bg-yellow-200 text-yellow-700',
    bgColor: 'bg-yellow-500',
  },

    test: {
    label: 'just test',
    color: 'bg-purple-200 text-purple-700',
    bgColor: 'bg-purple-500',
  },
} as const

export type StatusKey = keyof typeof STATUS_MAP
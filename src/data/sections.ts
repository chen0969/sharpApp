export const SECTION_MAP = {

  uncategorized: {
    id: 0,
    label: 'Uncategorized',
    color: 'bg-gray-200 text-gray-700',
    bgColor: 'bg-gray-500',
  },

  Beverage: {
    id: 1,
    label: 'Beverage',
    color: 'bg-blue-200 text-blue-700',
    bgColor: 'bg-blue-500',
  },

  craffle: {
    id: 2,
    label: 'Craffle',
    color: 'bg-brown-200 text-brown-700',
    bgColor: 'bg-brown-500',
  },

  wholesale: {
    id: 3,
    label: 'Wholesale',
    color: 'bg-red-200 text-red-700',
    bgColor: 'bg-red-500',
  },

  catering: {
    id: 4,
    label: 'Catering',
    color: 'bg-purple-200 text-purple-700',
    bgColor: 'bg-purple-500',
  },

  special: {
    id: 4,
    label: 'Special',
    color: 'bg-purple-200 text-purple-700',
    bgColor: 'bg-purple-500',
  }
} as const

export type SectionKey = keyof typeof SECTION_MAP
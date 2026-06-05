export const SECTION_MAP = {

  uncategorized: {
    id: 0,
    label: 'Uncategorized',
    color: 'bg-gray-200 text-gray-700',
    icon: '<i class="bi bi-cup-hot"></i>',
  },

  Beverage: {
    id: 1,
    label: 'Beverage',
    color: 'bg-blue-200 text-blue-700',
    icon: '<i class="bi bi-cup-hot"></i>',
  },

  craffle: {
    id: 2,
    label: 'Craffle',
    color: 'bg-brown-200 text-brown-700',
    icon: '<i class="bi bi-cup-hot"></i>',
  },

  wholesale: {
    id: 3,
    label: 'Wholesale',
    color: 'bg-red-200 text-red-700',
    icon: '<i class="bi bi-cup-hot"></i>',
  },

  catering: {
    id: 4,
    label: 'Catering',
    color: 'bg-purple-200 text-purple-700',
    icon: '<i class="bi bi-cup-hot"></i>',
  },

  special: {
    id: 4,
    label: 'Special',
    color: 'bg-purple-200 text-purple-700',
    icon: '<i class="bi bi-cup-hot"></i>',
  },

  disposable: {
    id: 5,
    label: 'Disposable',
    color: 'bg-purple-200 text-purple-700',
    icon: '<i class="bi bi-cup-hot"></i>',
  }
} as const

export type SectionKey = keyof typeof SECTION_MAP
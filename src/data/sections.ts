export const SECTION_MAP = {

  uncategorized: {
    id: 0,
    label: 'Uncategorized',
    color: 'bg-gray-200 text-gray-700 rounded-lg',
    icon: '<i class="bi bi-box"></i>',
  },

  Beverage: {
    id: 1,
    label: 'Beverage',
    color: 'bg-blue-200 text-blue-700 p-1 rounded-lg border border-blue-700 w-fit',
    icon: '<i class="bi bi-cup-hot text-md"></i>',
  },

  craffle: {
    id: 2,
    label: 'Craffle',
    color: 'bg-amber-200 text-amber-700 p-1 rounded-lg border border-amber-700 w-fit',
    icon: '<i class="bi bi-grid-3x3   text-md"></i>',
  },

  wholesale: {
    id: 3,
    label: 'Wholesale',
    color: 'bg-red-200 text-red-700 p-1 rounded-lg border border-red-700 w-fit',
    icon: '<i class="bi bi-shop"></i>',
  },

  catering: {
    id: 4,
    label: 'Catering',
    color: 'bg-purple-200 text-purple-700 p-1 rounded-lg border border-purple-700 w-fit',
    icon: '<i class="bi bi-truck"></i>',
  },

  special: {
    id: 4,
    label: 'Special',
    color: 'bg-purple-200 text-purple-700 p-1 rounded-lg border border-purple-700 w-fit',
    icon: '<i class="bi bi-cake2"></i>',
  },

  disposable: {
    id: 5,
    label: 'Disposable',
    color: 'bg-lime-200 text-lime-700 p-1 rounded-lg border border-lime-700 w-fit text-[8px] sm:text-sm',
    icon: '<i class="bi bi-fork-knife p-1 rounded-lg"></i>',
  }
} as const

export type SectionKey = keyof typeof SECTION_MAP
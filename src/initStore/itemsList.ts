import type { StatusKey } from '../data/statuses'
import type { SectionKey } from '../data/sections'

export interface Item {
  id: string
  name: string
  status: StatusKey
  section: SectionKey
  notes: string[]
}

export const defaultItems: Item[] = [
  {
    id: '1001',
    name: 'Milk',
    status: 'undefined',
    section: 'Beverage',
    notes: ['Sample of note'],
  },

  {
    id: '1002',
    name: 'Oat Milk',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1003',
    name: 'Sparkling',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1004',
    name: 'Coffee Bean',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1005',
    name: 'Retail Coffee Bean',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1006',
    name: 'Simple Syrup',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1007',
    name: 'Vanilla Syrup',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1008',
    name: 'Yuzu Syrup',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1009',
    name: 'Lemon Syrup',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1010',
    name: 'Caramel',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1011',
    name: 'Nutella',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1012',
    name: 'Strawberry Syrup',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1013',
    name: 'Matcha',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1014',
    name: 'Hojicha',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1015',
    name: 'Coco Powder',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1016',
    name: 'Cinnamon Powder',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '1017',
    name: 'Korean Chai',
    status: 'undefined',
    section: 'Beverage',
    notes: [],
  },

  {
    id: '2001',
    name: 'Egg',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },

  {
    id: '2002',
    name: 'Craffle',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },

  {
    id: '2003',
    name: 'Frozen Craffle',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
]
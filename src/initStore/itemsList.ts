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
    id: '0',
    name: 'Milk',
    status: 'undefined',
    section: 'drink',
    notes: ['Sample of note'],
  },

  {
    id: '1',
    name: 'Egg',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },

  {
    id: '2',
    name: 'Craffle',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },

  {
    id: '3',
    name: 'Frozen Craffle',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
]
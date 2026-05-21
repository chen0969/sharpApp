import type { StatusKey } from '../data/statuses'

export interface Item {
  id: string
  name: string
  status: StatusKey
  notes: string[]
}

export const defaultItems: Item[] = [
  {
    id: '1',
    name: 'Project Alpha',
    status: 'undefined',
    notes: ['Budget approved.'],
  },

  {
    id: '2',
    name: 'Server Migration',
    status: 'good',
    notes: [],
  },
]
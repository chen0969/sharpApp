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
  //#region Group 1 - Beverage
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

  //#endregion

  // #region Group 2 - Craffle
  {
    id: '2001',
    name: 'Whipped Cream',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2002',
    name: 'Cheese',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2003',
    name: 'Egg Salad',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2004',
    name: 'Corn',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2005',
    name: 'Ham',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2006',
    name: 'Turkey',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2007',
    name: 'Parmasan',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2008',
    name: 'Mixed Spring',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2009',
    name: 'Argula',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2010',
    name: 'Strawberry',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2011',
    name: 'Banana',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2012',
    name: 'Biscoff Cookie',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2013',
    name: 'Biscoff Crumb',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2014',
    name: 'Oreo',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2015',
    name: 'Oreo Crumb',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2016',
    name: 'Cinn & Sugar',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2017',
    name: 'Crispy Onion',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2018',
    name: 'Olive Powder',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2019',
    name: 'Sugar',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2020',
    name: 'Yeast Powder',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2021',
    name: 'Salt',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2022',
    name: 'Sesame Seed',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2023',
    name: 'Choco Curl',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2024',
    name: 'Choco Pearl',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2025',
    name: 'Black Pepper',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2026',
    name: 'Raspberry Powder',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2027',
    name: 'Pumpkin Seed',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2028',
    name: 'Soup',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2029',
    name: 'Bulgogi',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2031',
    name: 'Korean Chicken',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2032',
    name: 'Pickled Shallots',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2033',
    name: 'Rosemary',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2034',
    name: 'Yuzu Dressing',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2035',
    name: 'Fire Chicken Sauce',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2036',
    name: 'Caramel',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2037',
    name: 'Nutella',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2038',
    name: 'Choco Syrup',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2039',
    name: 'Milk Syrup',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2040',
    name: 'Sesame Syrup',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2041',
    name: 'Mayo',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },
  {
    id: '2042',
    name: 'Strawberry Jam',
    status: 'undefined',
    section: 'craffle',
    notes: [],
  },

  // #endregion

  // #region 3 disposable 
  {
    id: '3001',
    name: '10oz Hot Cup',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3002',
    name: '12oz Hot Cup',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3003',
    name: '16oz Cold Cup',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3004',
    name: 'Hot Lid',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3005',
    name: 'Cold Lid',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3006',
    name: 'Straw',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3007',
    name: 'Napkin',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3008',
    name: 'Fork & Knife',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3009',
    name: 'Spoon',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3010',
    name: 'Sugar Bag',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3011',
    name: 'Splenda',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3012',
    name: 'Sleeve',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3013',
    name: 'Toliet Paper',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3014',
    name: 'Toliet Hand Paper',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '3015',
    name: 'Starrer',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  // #endregion

  // #region 4 special
  {
    id: '4001',
    name: '12oz Special Cup',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '4002',
    name: 'Special Lid',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  {
    id: '4003',
    name: 'Special Straw',
    status: 'undefined',
    section: 'disposable',
    notes: [],
  },
  // #endregion 
]
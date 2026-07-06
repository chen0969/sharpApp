export interface TreeNode {
    id: number
    label: string
    children?: TreeNode[]
}

export const OPENING_TREE: TreeNode[] = [
    // #region Drink
    {
        id: 1000,
        label: 'Drink Station',
        children: [
            { id: 1001, label: 'Start the expresso machine' },
            { id: 1002, label: 'heat up the soup' },
            { id: 1003, label: 'Squezze bottle setup' },
            { id: 1004, label: '3 towel, 1 wet 2 dry' },
        ],
    },
    //   #endregion
    // #region Water
    {
        id: 2000,
        label: 'Water Station',
        children: [
            { id: 2001, label: 'Dispossable items refill' },
            { id: 2002, label: 'Water tank refill' },
        ],
    },
    //   #endregion
    // #region Trash
    {
        id: 3000,
        label: 'Trash Bin',
        children: [
            { id: 3001, label: 'Empty the trash bin' },
            { id: 3002, label: 'Replace a new white bag' },
        ],
    },
    //   #endregion
    // #region Bar
    {
        id: 4000,
        label: 'Clean the bar',
    },
    //   #endregion
    // #region Front Desk
    {
        id: 5000,
        label: 'Clean the front desk',
        children: [
            { id: 5001, label: 'Open pin pad' },
            { id: 5002, label: 'Heat up soup' },
            { id: 5003, label: 'Deforze Dubai Chewy Cookies' },
            { id: 5004, label: 'Warp the cutleries' },
        ],
    },
    //   #endregion
]
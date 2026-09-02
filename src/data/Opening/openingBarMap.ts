export interface ShapeBase {
    uid: number
    id: string
    action: () => void
}

export interface RectShape extends ShapeBase {
    type: 'rect'
    props: { x: number; y: number; width: number; height: number; rx?: number }
}

export interface CircleShape extends ShapeBase {
    type: 'circle'
    props: { cx: number; cy: number; r: number }
}

export interface PathShape extends ShapeBase {
    type: 'path'
    props: { d: string }
}

export type Shape = RectShape | CircleShape | PathShape

export const SHAPES_BAR_MAP: Shape[] = [
    {
        uid: 1000,
        id: 'drinkStation',
        type: 'rect',
        props: { x: 171, y: 44, width: 53, height: 200, rx: 10 },
        action: () => console.log('drinkStation clicked'),
    },
    {
        uid: 2000,
        id: 'waterStation',
        type: 'rect',
        props: { x: 1, y: 169, width: 64, height: 139, rx: 10 },
        action: () => console.log('waterStation clicked'),
    },
    {
        uid: 3000,
        id: 'trashBin',
        type: 'circle',
        props: { cx: 32.5, cy: 126.5, r: 32.5 },
        action: () => console.log('trashBin clicked'),
    },
    {
        uid: 4000,
        id: 'bar',
        type: 'path',
        props: { d: 'M153 44C158.523 44 163 48.4772 163 54V251H316C321.523 251 326 255.477 326 261V297C326 302.523 321.523 307 316 307H131C130.827 307 130.656 306.996 130.485 306.987C130.315 306.979 130.146 306.965 129.978 306.948C129.641 306.914 129.31 306.864 128.984 306.797C124.428 305.864 121 301.832 121 297V54C121 48.4772 125.477 44 131 44H153Z' },
        action: () => console.log('bar clicked'),
    },
    {
        uid: 5000,
        id: 'frontDesk',
        type: 'path',
        props: { d: 'M214 1.19249e-07C219.523 5.33892e-08 224 4.47715 224 10L224 26C224 31.5228 219.523 36 214 36L131 36C125.477 36 121 31.5228 121 26L121 10C121 4.47715 125.477 1.17487e-06 131 1.10901e-06L214 1.19249e-07Z' },
        action: () => console.log('frontDesk clicked'),
    },
]
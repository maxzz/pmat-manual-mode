// Field

export type SrcriptItemField = {
    type: 'field',
    id: string;
};

// Key

export const actionKeys: string[] = [
    'Tab',
    'Enter',
    'Esc',
    'Left arrow',
    'Right arrow',
    'Up arrow',
    'Down arrow',
    'Page Up',
    'Page Down',
    'Home',
    'End',
    'Ins',
    'Del',
    'Backspace',
    'Spacebar',
    'Shift / Control / Alt',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
];

export type SelectItemText = string | readonly [label: string, value: string];

export const modifierKeys: SelectItemText[] = [
    ['None', '0'],
    ['Any', '3'],
    ['Left', '1'],
    ['Right', '2'],
];

export type SrcriptItemKey = {
    type: 'key',
    char: string;
    repeat: number;
    shift: number;
    ctrl: number;
    alt: number;
};

export type SrcriptItemModifiers = Exclude<keyof SrcriptItemKey, 'type' | 'char' | 'repeat'>;

// Position

export type SrcriptItemPos = {
    type: 'pos',
    x: number;
    y: number;
};

// Delay

export type SrcriptItemDelay = {
    type: 'delay',
    n: number;
};

// Common type

export type ScriptItem = SrcriptItemField | SrcriptItemKey | SrcriptItemPos | SrcriptItemDelay;

export type ScriptItemType = {
    [K in keyof ScriptItem]: ScriptItem[K];
}['type'];

export type SrcriptItemUnsaved = {
    uuid: number;
};

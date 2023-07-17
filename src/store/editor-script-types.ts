export type SrcriptItemField = {
    type: 'field',
    id: string;
};

export type SrcriptItemKey = {
    type: 'key',
    char: string;
    repeat: number;
    shift: number;
    ctrl: number;
    alt: number;
};

export type SrcriptItemModifiers = Exclude<keyof SrcriptItemKey, 'type' | 'char' | 'repeat'>;

export type SrcriptItemPos = {
    type: 'pos',
    x: number;
    y: number;
};

export type SrcriptItemDelay = {
    type: 'delay',
    n: number;
};

export type ScriptItem = SrcriptItemField | SrcriptItemKey | SrcriptItemPos | SrcriptItemDelay;

export type ScriptItemType = {
    [K in keyof ScriptItem]: ScriptItem[K]
}['type'];

export type SrcriptItemUnsaved = {
    uuid: number;
};

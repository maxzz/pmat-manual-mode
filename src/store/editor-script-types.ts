export type ItemField = {
    type: 'field',
    id: string;
};

export type ItemKey = {
    type: 'key',
    char: string;
};

export type ItemPos = {
    type: 'pos',
    x: number;
    y: number;
};

export type ItemDelay = {
    type: 'delay',
    n: number;
};

export type ScriptItem = ItemField | ItemKey | ItemPos | ItemDelay;

export type ScriptItemType = {
    [K in keyof ScriptItem]: ScriptItem[K]
}['type'];

export type ItemUnsaved = {
    uuid: number;
};

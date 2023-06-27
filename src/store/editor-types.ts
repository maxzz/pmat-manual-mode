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

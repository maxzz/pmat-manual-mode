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

export type ItemUnsaved = {
    unsaved: {
        uuid: number;
    }
};

export type ScriptItem = (ItemField | ItemKey | ItemPos | ItemDelay) & ItemUnsaved;

export type ScriptItemType = {
    [K in keyof ScriptItem]: ScriptItem[K]
}['type'];

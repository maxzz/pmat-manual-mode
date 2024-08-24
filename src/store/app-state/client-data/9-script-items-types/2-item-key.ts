// Key

export type SrcriptItemKey = {
    type: 'key',
    char: string;
    repeat: number;

    shift: number;
    ctrl: number;
    alt: number;
};

export type SrcriptItemModifiers = Exclude<keyof SrcriptItemKey, 'type' | 'char' | 'repeat'>;

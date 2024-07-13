// Key

export const actionKeys: (readonly [dispalyName: string, fileName: string])[] = [
    ['Tab',                   /**/ 'tab',       /**/],
    ['Enter',                 /**/ 'enter',     /**/],
    ['Esc',                   /**/ 'escape',    /**/],
    ['Left arrow',            /**/ 'left',      /**/],
    ['Right arrow',           /**/ 'right',     /**/],
    ['Up arrow',              /**/ 'up',        /**/],
    ['Down arrow',            /**/ 'down',      /**/],
    ['Page Up',               /**/ 'prior',     /**/],
    ['Page Down',             /**/ 'next',      /**/],
    ['Home',                  /**/ 'home',      /**/],
    ['End',                   /**/ 'end',       /**/],
    ['Ins',                   /**/ 'ins',       /**/],
    ['Del',                   /**/ 'del',       /**/],
    ['Backspace',             /**/ 'back',      /**/],
    ['Spacebar',              /**/ 'space',     /**/],
    ['Shift / Control / Alt', /**/ 'none',      /**/], // <- just to press shift-ctrl-alt wo/ any key
    ['F1',                    /**/ 'f1',        /**/],
    ['F2',                    /**/ 'f2',        /**/],
    ['F3',                    /**/ 'f3',        /**/],
    ['F4',                    /**/ 'f4',        /**/],
    ['F5',                    /**/ 'f5',        /**/],
    ['F6',                    /**/ 'f6',        /**/],
    ['F7',                    /**/ 'f7',        /**/],
    ['F8',                    /**/ 'f8',        /**/],
    ['F9',                    /**/ 'f9',        /**/],
    ['F10',                   /**/ 'f10',       /**/],
    ['F11',                   /**/ 'f11',       /**/],
    ['F12',                   /**/ 'f12',       /**/],
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

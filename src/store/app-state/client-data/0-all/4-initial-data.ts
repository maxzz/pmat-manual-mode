import { type ScriptItemData } from "../9-script-items-types";

export const initialScriptItems: ScriptItemData[] = [
    {
        type: 'pos', x: 0, y: 1,
    },
    {
        type: 'field', id: '123',
    },
    {
        type: 'delay', n: 1000,
    },
    {
        type: 'field', id: '456',
    },
    {
        type: 'key', char: 'Enter', repeat: 1, shift: 0, ctrl: 0, alt: 0,
    },
];

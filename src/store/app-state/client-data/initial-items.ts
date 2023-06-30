import { SrcriptItemUnsaved, ScriptItem } from "@/store/editor-script-types";

export const initialScriptItems: ScriptItem[] = [
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
        type: 'key', char: 'Enter',
    },
];

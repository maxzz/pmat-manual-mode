import { proxy } from 'valtio';
import { ScriptItem } from '../editor-types';

type ClientState = {
    scriptItems: ScriptItem[];
};

export const initialItems: ScriptItem[] = [
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

export const clientState = proxy<ClientState>({
    scriptItems: [...initialItems],
});

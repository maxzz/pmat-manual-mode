import { proxy } from 'valtio';
import { Item } from '../editor-types';

type ClientState = {
    items: Item[];
};

export const initialItems: Item[] = [
    {
        type: 'key', char: 'a',
    },
    {
        type: 'key', char: 'a',
    },
    {
        type: 'key', char: 'a',
    },
    {
        type: 'key', char: 'a',
    },
];

export const clientState = proxy<ClientState>({
    items: [...initialItems],
});

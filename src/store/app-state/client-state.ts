import { proxy } from 'valtio';
import { ItemDelay, ItemField, ItemKey, ItemPos, ScriptItem, ScriptItemType } from '../editor-types';

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

export function addScriptItem(type: ScriptItemType) {
    switch (type) {
        case "field": {
            const newItem: ItemField = {
                type: 'field',
                id: '444',
            }
            clientState.scriptItems.push(newItem);
            break;
        }
        case "key": {
            const newItem: ItemKey = {
                type: 'key',
                char: 'Tab',
            }
            clientState.scriptItems.push(newItem);
            break;
        }
        case "pos": {
            const newItem: ItemPos = {
                type: 'pos',
                x: 10,
                y: 20,
            }
            clientState.scriptItems.push(newItem);
            break;
        }
        case "delay": {
            const newItem: ItemDelay = {
                type: 'delay',
                n: 1000,
            }
            clientState.scriptItems.push(newItem);
            break;
        }
        default: {
            const really: never = type;
            console.error(really);
        }
    }
}

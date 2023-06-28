import { ScriptItemType, ItemField, ItemKey, ItemPos, ItemDelay } from "@/store/editor-script-types";
import { clientState } from ".";

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

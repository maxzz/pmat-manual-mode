import { ScriptItemType, ItemField, ItemKey, ItemPos, ItemDelay, ScriptItem } from "@/store/editor-script-types";
import { clientState } from ".";
import { uuid } from "@/utils";

function createScriptItem(type: ScriptItemType): Omit<ScriptItem, 'unsaved'> {
    let item: Omit<ScriptItem, 'unsaved'>;
    switch (type) {
        case "field": {
            const newItem: Omit<ItemField, 'unsaved'> = {
                type: 'field',
                id: '444',
            }
            item = newItem;
            break;
        }
        case "key": {
            const newItem: Omit<ItemKey, 'unsaved'> = {
                type: 'key',
                char: 'Tab',
            }
            item = newItem;
            break;
        }
        case "pos": {
            const newItem: Omit<ItemPos, 'unsaved'> = {
                type: 'pos',
                x: 10,
                y: 20,
            }
            item = newItem;
            break;
        }
        case "delay": {
            const newItem: Omit<ItemDelay, 'unsaved'> = {
                type: 'delay',
                n: 1000,
            }
            item = newItem;
            break;
        }
        default: {
            const really: never = type;
            throw new Error(really);
        }
    }
    return item;
}

export function addScriptItem(type: ScriptItemType) {
    let item = createScriptItem(type) as ScriptItem;
    item.unsaved.uuid = uuid.asRelativeNumber();
    clientState.scriptItems.push(item);
}

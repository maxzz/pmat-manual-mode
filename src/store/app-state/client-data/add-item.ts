import { ScriptItemType, ItemField, ItemKey, ItemPos, ItemDelay, ScriptItem } from "@/store/editor-script-types";
import { clientState, editorState } from ".";
import { swap, uuid } from "@/utils";
import { snapshot } from "valtio";

function createScriptItem(type: ScriptItemType): ScriptItem {
    let item: ScriptItem;
    switch (type) {
        case "field": {
            const newItem: ItemField = {
                type: 'field',
                id: '444',
            };
            item = newItem;
            break;
        }
        case "key": {
            const newItem: ItemKey = {
                type: 'key',
                char: 'Tab',
            };
            item = newItem;
            break;
        }
        case "pos": {
            const newItem: ItemPos = {
                type: 'pos',
                x: 10,
                y: 20,
            };
            item = newItem;
            break;
        }
        case "delay": {
            const newItem: ItemDelay = {
                type: 'delay',
                n: 1000,
            };
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
    let item = createScriptItem(type);
    clientState.scriptItems.push(item);
    editorState.itemMeta.push({ uuid: uuid.asRelativeNumber() });
}

export function removeScriptItem(idx: number) {
    clientState.scriptItems.splice(idx, 1);
    editorState.itemMeta.splice(idx, 1);
}

export function swapScriptItems(idxA: number, idxB: number) {
    if (editorState.selectedIdx === idxA) {
        editorState.selectedIdx = idxB;
    }
    swap(clientState.scriptItems, idxA, idxB);
    swap(editorState.itemMeta, idxA, idxB);
}

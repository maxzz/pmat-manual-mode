import { ScriptItemType, ItemField, ItemKey, ItemPos, ItemDelay, ScriptItem } from "@/store/editor-script-types";
import { clientState, editorState } from ".";
import { swap, uuid } from "@/utils";

function createScriptItem(type: ScriptItemType): ScriptItem {
    switch (type) {
        case "field": {
            const newItem: ItemField = {
                type: 'field',
                id: '444',
            };
            return newItem;
        }
        case "key": {
            const newItem: ItemKey = {
                type: 'key',
                char: 'Tab',
            };
            return newItem;
        }
        case "pos": {
            const newItem: ItemPos = {
                type: 'pos',
                x: 10,
                y: 20,
            };
            return newItem;
        }
        case "delay": {
            const newItem: ItemDelay = {
                type: 'delay',
                n: 1000,
            };
            return newItem;
        }
        default: {
            const really: never = type;
            throw new Error(really);
        }
    }
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

export function swapScriptItems(idxCurrent: number, idxNew: number) {
    if (editorState.selectedIdx === idxCurrent) {
        editorState.selectedIdx = idxNew;
    }
    swap(clientState.scriptItems, idxCurrent, idxNew);
    swap(editorState.itemMeta, idxCurrent, idxNew);
}

export function moveScriptCursor(key: string) {
    if (editorState.itemMeta.length) {
        switch (key) {
            case 'ArrowUp': {
                (editorState.selectedIdx > 0) && editorState.selectedIdx--;
                break;
            }
            case 'ArrowDown': {
                (editorState.selectedIdx < editorState.itemMeta.length - 1) && editorState.selectedIdx++;
                break;
            }
            case 'Home': {
                editorState.selectedIdx = 0;
                break;
            }
            case 'End': {
                editorState.selectedIdx = editorState.itemMeta.length - 1;
                break;
            }
        }
    }
}
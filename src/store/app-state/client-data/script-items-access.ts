import { ScriptItemType, SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItem } from "./script-items-types";
import { gClientState, gEditorState } from "./0-all";
import { swap, uuid } from "@/utils";

function createScriptItem(type: ScriptItemType): ScriptItem {
    switch (type) {
        case "field": {
            const newItem: SrcriptItemField = {
                type: 'field',
                id: '444',
            };
            return newItem;
        }
        case "key": {
            const newItem: SrcriptItemKey = {
                type: 'key',
                char: 'Tab',
                repeat: 1,
                shift: 0,
                ctrl: 0,
                alt: 0,
            };
            return newItem;
        }
        case "pos": {
            const newItem: SrcriptItemPos = {
                type: 'pos',
                x: 10,
                y: 20,
            };
            return newItem;
        }
        case "delay": {
            const newItem: SrcriptItemDelay = {
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
    gClientState.scriptItems.push(item);
    gEditorState.itemMetas.push({ uuid: uuid.asRelativeNumber() });
}

export function removeScriptItem(idx: number) {
    gClientState.scriptItems.splice(idx, 1);
    gEditorState.itemMetas.splice(idx, 1);
}

export function swapScriptItems(idxCurrent: number, idxNew: number) {
    if (gEditorState.selectedIdx === idxCurrent) {
        gEditorState.selectedIdx = idxNew;
    }
    swap(gClientState.scriptItems, idxCurrent, idxNew);
    swap(gEditorState.itemMetas, idxCurrent, idxNew);
}

export function moveScriptCursor(key: string) {
    if (gEditorState.itemMetas.length) {
        switch (key) {
            case 'ArrowUp': {
                (gEditorState.selectedIdx > 0) && gEditorState.selectedIdx--;
                break;
            }
            case 'ArrowDown': {
                (gEditorState.selectedIdx < gEditorState.itemMetas.length - 1) && gEditorState.selectedIdx++;
                break;
            }
            case 'Home': {
                gEditorState.selectedIdx = 0;
                break;
            }
            case 'End': {
                gEditorState.selectedIdx = gEditorState.itemMetas.length - 1;
                break;
            }
        }
    }
}

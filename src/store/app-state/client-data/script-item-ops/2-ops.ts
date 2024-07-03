import type { ScriptItemType } from "../script-items-types";
import { gClientState, gEditorState } from "../0-all";
import { createScriptItem } from "./1-create-script-item";
import { swap, uuid } from "@/utils";

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

import type { ScriptItemType } from "../script-items-types";
import type { ScriptState, EditorState } from "../0-all";
import { createScriptItem } from "./1-create-script-item";
import { swap, uuid } from "@/utils";

export function addScriptItem(clientState: ScriptState, editorState: EditorState, type: ScriptItemType) {
    let item = createScriptItem(type);
    clientState.scriptItems.push(item);
    editorState.metaItems.push({ uuid: uuid.asRelativeNumber() });
}

export function removeScriptItem(clientState: ScriptState, editorState: EditorState, idx: number) {
    clientState.scriptItems.splice(idx, 1);
    editorState.metaItems.splice(idx, 1);
}

export function swapScriptItems(clientState: ScriptState, editorState: EditorState, idxCurrent: number, idxNew: number) {
    if (editorState.selectedIdx === idxCurrent) {
        editorState.selectedIdx = idxNew;
    }
    swap(clientState.scriptItems, idxCurrent, idxNew);
    swap(editorState.metaItems, idxCurrent, idxNew);
}

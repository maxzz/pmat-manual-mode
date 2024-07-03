import type { ScriptItemType } from "../script-items-types";
import type { ClientState, EditorState } from "../0-all";
import { createScriptItem } from "./1-create-script-item";
import { swap, uuid } from "@/utils";

export function addScriptItem(clientState: ClientState, editorState: EditorState, type: ScriptItemType) {
    let item = createScriptItem(type);
    clientState.scriptItems.push(item);
    editorState.itemMetas.push({ uuid: uuid.asRelativeNumber() });
}

export function removeScriptItem(clientState: ClientState, editorState: EditorState, idx: number) {
    clientState.scriptItems.splice(idx, 1);
    editorState.itemMetas.splice(idx, 1);
}

export function swapScriptItems(clientState: ClientState, editorState: EditorState, idxCurrent: number, idxNew: number) {
    if (editorState.selectedIdx === idxCurrent) {
        editorState.selectedIdx = idxNew;
    }
    swap(clientState.scriptItems, idxCurrent, idxNew);
    swap(editorState.itemMetas, idxCurrent, idxNew);
}

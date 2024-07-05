import { atom } from "jotai";
import type { ScriptItem, ScriptItemKey } from "../script-items-types";
import type { ScriptState, EditorState } from "../0-all";
import { createScriptItem } from "./1-create-script-item";
import { swap, uuid } from "@/utils";

// export function setSelectedIdx(editorState: EditorState, idxNew: number, idxCurrent: number | undefined = undefined) {
//     if (idxCurrent !== undefined) {
//         editorState.metaItems[idxCurrent].isSelected = false;
//     }
//     editorState.metaItems[idxNew].isSelected = true;
//     editorState.selectedIdxRef = idxNew;
// }

export function addScriptItem(clientState: ScriptState, type: ScriptItemKey) {
    let item: ScriptItem = {
        ...createScriptItem(type),
        unsaved: {
            id4: uuid.asRelativeNumber(),
            selectedAtom: atom(false),
        },
    };
    clientState.scriptItems.push(item);
    // editorState.metaItems.push({ uui5d: uuid.asRelativeNumber(), isSelected: false });
}

export function removeScriptItem(clientState: ScriptState, idx: number) {
    clientState.scriptItems.splice(idx, 1);
    // editorState.metaItems.splice(idx, 1);
}

export function swapScriptItems(clientState: ScriptState, idxCurrent: number, idxNew: number) {
    // if (editorState.selectedIdxRef === idxCurrent) {
    //     // setSelectedIdx(editorState, idxNew, idxCurrent);

    //     // editorState.metaItems[idxCurrent].isSelected = false;
    //     // editorState.metaItems[idxNew].isSelected = true;
    //     editorState.selectedIdxRef = idxNew;
    // }

    swap(clientState.scriptItems, idxCurrent, idxNew);
    // swap(editorState.metaItems, idxCurrent, idxNew);
}

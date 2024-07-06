import { atom, Getter, Setter } from "jotai";
import { ScriptItemKey } from "../script-items-types";
import { gScriptState } from "./2-script-state";
import { addScriptItem, moveScriptCursor, removeScriptItem } from "../script-item-ops";
import { swap } from "@/utils";

// export const rightPanel = proxy({ selectedIdx: 0 });

function deselectCurrent(get: Getter, set: Setter) {
    const currentIdx = get(_selectedRefAtom);
    const current = gScriptState.scriptItems[currentIdx];
    current && set(current.unsaved.selectedAtom, false);
}

const _selectedRefAtom = atom(-1);

export const selectedIdxAtom = atom(
    (get) => get(_selectedRefAtom),
    (get, set, idx: number) => {
        deselectCurrent(get, set);
        set(gScriptState.scriptItems[idx].unsaved.selectedAtom, true);
        set(_selectedRefAtom, idx);
    }
);

export const selectItemAtom = atom(
    null,
    (get, set, idx: number, value: boolean) => {
        deselectCurrent(get, set);
        const itemSelectAtom = gScriptState.scriptItems[idx].unsaved.selectedAtom;
        set(itemSelectAtom, value);
        set(selectedIdxAtom, idx);
    }
);

export const selectByKeyAtom = atom(
    null,
    (get, set, keyName: string) => {
        const idx = get(_selectedRefAtom);
        const newIdx = moveScriptCursor(idx, gScriptState.scriptItems.length, keyName);
        newIdx !== undefined && set(selectedIdxAtom, newIdx);
    }
);

export const swapItemsAtom = atom(
    null,
    (get, set, idxCurrent: number, idxNew: number) => {
        if (idxNew < 0 || idxNew >= gScriptState.scriptItems.length) {
            return;
        }
        swap(gScriptState.scriptItems, idxCurrent, idxNew);
        set(selectItemAtom, idxNew, true);
    }
);

export const deleteItemAtom = atom(
    null,
    (get, set, idx: number) => {
        removeScriptItem(gScriptState, idx);

        const newIdx = Math.max(0, Math.min(idx + 1, gScriptState.scriptItems.length - 1));
        set(selectedIdxAtom, newIdx);
    }
);

export const createItemAtom = atom(
    null,
    (get, set, type: ScriptItemKey) => {
        const newItem = addScriptItem(gScriptState, type);
        gScriptState.scriptItems.push(newItem);
        set(selectedIdxAtom, gScriptState.scriptItems.length - 1);   
    }
);

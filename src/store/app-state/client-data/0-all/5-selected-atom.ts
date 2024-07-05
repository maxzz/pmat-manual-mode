import { atom, Getter, Setter } from "jotai";
import { gScriptState } from ".";
import { moveScriptCursor } from "../script-item-ops";
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
    (get, set, newIdx: number) => {
        deselectCurrent(get, set);
        set(gScriptState.scriptItems[newIdx].unsaved.selectedAtom, true);
        set(_selectedRefAtom, newIdx);
    }
);

export const selectItemAtom = atom(
    null,
    (get, set, idx: number, value: boolean) => {
        const itemSelectAtom = gScriptState.scriptItems[idx].unsaved.selectedAtom;
        deselectCurrent(get, set);
        set(itemSelectAtom, value);
        set(selectedIdxAtom, idx);
    }
);

export const selectByKeyAtom = atom(
    null,
    (get, set, keyName: string) => {
        const currentIdx = get(_selectedRefAtom);
        const newIdx = moveScriptCursor(currentIdx, gScriptState.scriptItems.length, keyName);
        newIdx !== undefined && set(selectedIdxAtom, newIdx);
    }
);

export const swapItemsAtom = atom(
    null,
    (get, set, idxCurrent: number, idxNew: number) => {
        swap(gScriptState.scriptItems, idxCurrent, idxNew);
        set(selectItemAtom, idxNew, true);
    }
);

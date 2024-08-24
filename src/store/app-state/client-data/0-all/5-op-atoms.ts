import { useCallback } from "react";
import { atom, Getter, Setter } from "jotai";
import { atomWithProxy } from "jotai-valtio";
import { ScriptItemKey } from "../9-script-items-types";
import { gScriptState } from "./2-script-state";
import { createScriptItem, keyToIndex } from "../1-script-list-ops";
import { swap } from "@/utils";
import { useAtomCallback } from "jotai/utils";

// export const rightPanel = proxy({ selectedIdx: 0 });

const _selectedIdxStoreAtom = atomWithProxy(gScriptState.scriptState);

function deselectCurrent(get: Getter, set: Setter) {
    const currentIdx = get(_selectedIdxStoreAtom).selectedIdx;

    const current = gScriptState.scriptItems[currentIdx]?.unsaved.selectedAtom;
    current && set(current, false);
}

export function useInitSelectedIdx() {
    const cb = useAtomCallback(
        useCallback(
            (get: Getter, set: Setter) => {
                set(selectItemAtom, get(selectedIdxAtom), true);
            }, []
        )
    );
    return cb;
}

export const selectedIdxAtom = atom(
    (get) => get(_selectedIdxStoreAtom).selectedIdx,
    (get, set, idx: number) => {
        deselectCurrent(get, set);

        const current = gScriptState.scriptItems[idx]?.unsaved.selectedAtom;
        current && set(current, true);

        const _selectedIdxStore = get(_selectedIdxStoreAtom);
        set(_selectedIdxStoreAtom, { ..._selectedIdxStore, selectedIdx: idx });
    }
);

export const selectItemAtom = atom(
    null,
    (get, set, idx: number, value: boolean | ((v: boolean) => boolean)) => {
        const currentIdx = get(selectedIdxAtom);
        if (currentIdx !== idx) {
            deselectCurrent(get, set);
        }

        const current = gScriptState.scriptItems[idx]?.unsaved.selectedAtom;
        if (current) {
            value = typeof value === "function" ? value(get(current)) : value;
            set(current, value);
            set(selectedIdxAtom, value ? idx : -1);
        }
    }
);

export const selectByKeyAtom = atom(
    null,
    (get, set, keyName: string) => {
        const idx = get(_selectedIdxStoreAtom).selectedIdx;
        const newIdx = keyToIndex(idx, gScriptState.scriptItems.length, keyName);
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
        gScriptState.scriptItems.splice(idx, 1);

        const newIdx = Math.max(0, Math.min(idx + 1, gScriptState.scriptItems.length - 1));
        set(selectedIdxAtom, newIdx);
    }
);

export const createItemAtom = atom(
    null,
    (get, set, type: ScriptItemKey) => {
        const newItem = createScriptItem(type);

        gScriptState.scriptItems.push(newItem);
        set(selectedIdxAtom, gScriptState.scriptItems.length - 1);
    }
);

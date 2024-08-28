import { useCallback } from "react";
import { atom, type Getter, type Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { atomWithProxy } from "jotai-valtio";
import { type ScriptItemKey } from "../../9-script-items-types";
import { gScriptState } from "../2-script-state";
import { createScriptItem, keyToIndex } from "../../1-script-list-ops";
import { swap } from "@/utils";

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

import { atom } from "jotai";
import { atomWithProxy } from "jotai-valtio";
import { gScriptState } from "../2-script-state";
import { deselectCurrent } from "./7-deselect-current";

// export const rightPanel = proxy({ selectedIdx: 0 });

export const _selectedIdxStoreAtom = atomWithProxy(gScriptState.scriptState);

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

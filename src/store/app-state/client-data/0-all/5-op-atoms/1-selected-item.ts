import { atom } from "jotai";
import { atomWithProxy } from "jotai-valtio";
import { gScriptState } from "../2-script-state";
import { deselectCurrent } from "./5-deselect-current";

// export const rightPanel = proxy({ selectedIdx: 0 });

const _selectedIdxStoreAtom = atomWithProxy(gScriptState.scriptState);

export const selectedIdxAtom = atom(
    (get) => {
        return get(_selectedIdxStoreAtom).selectedIdx; //TODO: don't combine read and write atoms
    }
);

export const doSelectIdxAtom = atom(
    null,
    (get, set, idx: number) => {
        deselectCurrent(get, set);

        const currentAtom = gScriptState.scriptItems[idx]?.unsaved.selectedAtom;
        currentAtom && set(currentAtom, true);

        set(_selectedIdxStoreAtom, { selectedIdx: idx });
    }
);

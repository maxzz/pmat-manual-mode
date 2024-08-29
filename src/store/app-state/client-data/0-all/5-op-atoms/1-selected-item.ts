import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { _selectedIdxStoreAtom } from "./0-selected-idx-store-atom";
import { deselectCurrent } from "./5-deselect-current";

export const selectedIdxAtom = atom(
    (get) => {
        return get(_selectedIdxStoreAtom).selectedIdx; //TODO: don't combine read and write atoms
    },

    (get, set, idx: number) => {
        deselectCurrent(get, set);

        const currentAtom = gScriptState.scriptItems[idx]?.unsaved.selectedAtom;
        currentAtom && set(currentAtom, true);

        const _selectedIdxStore = get(_selectedIdxStoreAtom);
        set(_selectedIdxStoreAtom, { ..._selectedIdxStore, selectedIdx: idx }); // don't need ..._selectedIdxStore
    }
);

import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { keyToIndex } from "../../1-script-list-ops";
import { _selectedIdxStoreAtom, selectedIdxAtom } from "./4-selected-item";

export const selectByKeyAtom = atom(
    null,
    (get, set, keyName: string) => {
        const idx = get(_selectedIdxStoreAtom).selectedIdx;
        const newIdx = keyToIndex(idx, gScriptState.scriptItems.length, keyName);
        newIdx !== undefined && set(selectedIdxAtom, newIdx);
    }
);

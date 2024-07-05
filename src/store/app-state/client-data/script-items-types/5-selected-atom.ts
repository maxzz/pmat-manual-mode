import { atom } from "jotai";
import { gScriptState } from "../0-all";

const _selectedRefAtom = atom(-1);

export const selectedRefAtom = atom(
    (get) => get(_selectedRefAtom),
    (get, set, newIdx: number) => {
        const currentIdx = get(_selectedRefAtom);
        if (currentIdx !== -1) {
            set(gScriptState.scriptItems[currentIdx].unsaved.selectedAtom, false);
        }
        set(gScriptState.scriptItems[newIdx].unsaved.selectedAtom, true);
        set(_selectedRefAtom, newIdx);
    }
);

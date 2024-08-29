import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { doSelectIdxAtom, selectedIdxAtom } from "./1-selected-item";
import { keyToIndex } from "../../1-script-list-ops";

export const doSelectByKeyAtom = atom(
    null,
    (get, set, keyName: string) => {
        const idx = get(selectedIdxAtom);
        const newIdx = keyToIndex(idx, gScriptState.scriptItems.length, keyName);
        newIdx !== undefined && set(doSelectIdxAtom, newIdx);
    }
);

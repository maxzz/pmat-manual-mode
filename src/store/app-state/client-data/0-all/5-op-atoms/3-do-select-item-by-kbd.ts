import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { doSelectIdxAtom, selectedIdxAtom } from "./1-selected-item";
import { kbdToIndex } from "../../1-script-list-ops";

export const doSelectByKbdAtom = atom(
    null,
    (get, set, keyName: string) => {
        const idx = get(selectedIdxAtom);

        const newIdx = kbdToIndex(idx, gScriptState.scriptItems.length, keyName);
        newIdx !== undefined && set(doSelectIdxAtom, newIdx);
    }
);

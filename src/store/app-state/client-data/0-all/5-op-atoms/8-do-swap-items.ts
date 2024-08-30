import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { doSetSelectItemAtom } from "./2-do-set-select-item";
import { swap } from "@/utils";

export const doSwapItemsAtom = atom(
    null,
    (get, set, idxCurrent: number, idxNew: number) => {
        if (idxNew < 0 || idxNew >= gScriptState.scriptItems.length) {
            return;
        }
        swap(gScriptState.scriptItems, idxCurrent, idxNew);
        set(doSetSelectItemAtom, idxNew, true);
    }
);

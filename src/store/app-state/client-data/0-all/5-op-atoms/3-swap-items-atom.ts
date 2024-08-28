import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { selectItemAtom } from "./14-do-select-atoms";
import { swap } from "@/utils";

// export const rightPanel = proxy({ selectedIdx: 0 });

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

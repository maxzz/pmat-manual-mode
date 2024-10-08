import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { doSelectIdxAtom, selectedIdxAtom } from "./1-selected-idx";
import { deselectCurrent } from "./5-deselect-current";

export const doSetSelectItemAtom = atom(
    null,
    (get, set, idx: number, value: boolean | ((v: boolean) => boolean)) => {
        const currentIdx = get(selectedIdxAtom);
        if (currentIdx !== idx) {
            deselectCurrent(get, set);
        }

        const currentAtom = gScriptState.scriptItems[idx]?.unsaved.selectedAtom;
        if (currentAtom) {
            value = typeof value === "function" ? value(get(currentAtom)) : value;
            set(currentAtom, value);
            set(doSelectIdxAtom, value ? idx : -1);
        }
    }
);

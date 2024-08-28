import { atom } from "jotai";
import { gScriptState } from "../2-script-state";
import { selectedIdxAtom } from "./4-selected-item";
import { deselectCurrent } from "./7-deselect-current";

export const selectItemAtom = atom(
    null,
    (get, set, idx: number, value: boolean | ((v: boolean) => boolean)) => {
        const currentIdx = get(selectedIdxAtom);
        if (currentIdx !== idx) {
            deselectCurrent(get, set);
        }

        const current = gScriptState.scriptItems[idx]?.unsaved.selectedAtom;
        if (current) {
            value = typeof value === "function" ? value(get(current)) : value;
            set(current, value);
            set(selectedIdxAtom, value ? idx : -1);
        }
    }
);

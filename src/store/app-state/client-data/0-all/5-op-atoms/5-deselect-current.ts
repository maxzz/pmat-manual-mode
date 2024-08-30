import type { Getter, Setter } from "jotai";
import { gScriptState } from "../2-script-state";
import { selectedIdxAtom } from "./1-selected-idx";

export function deselectCurrent(get: Getter, set: Setter) {
    const currentIdx = get(selectedIdxAtom);

    const current = gScriptState.scriptItems[currentIdx]?.unsaved.selectedAtom;
    current && set(current, false);
}

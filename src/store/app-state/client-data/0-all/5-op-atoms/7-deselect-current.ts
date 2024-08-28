import type { Getter, Setter } from "jotai";
import { gScriptState } from "../2-script-state";
import { _selectedIdxStoreAtom } from "./4-selected-item";

export function deselectCurrent(get: Getter, set: Setter) {
    const currentIdx = get(_selectedIdxStoreAtom).selectedIdx;

    const current = gScriptState.scriptItems[currentIdx]?.unsaved.selectedAtom;
    current && set(current, false);
}

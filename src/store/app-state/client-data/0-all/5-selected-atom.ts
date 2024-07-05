import { atom, Getter, PrimitiveAtom, Setter } from "jotai";
import { gScriptState } from ".";
import { moveScriptCursor } from "../script-item-ops";

// export const rightPanel = proxy({ selectedIdx: 0 });

const _selectedRefAtom = atom(-1);

export const selectedRefAtom = atom(
    (get) => get(_selectedRefAtom),
    (get, set, newIdx: number) => {
        deselectCurrent(get, set);
        set(gScriptState.scriptItems[newIdx].unsaved.selectedAtom, true);
        set(_selectedRefAtom, newIdx);
    }
);

export const moveSelectedAtom = atom(
    null,
    (get, set, keyName: string) => {
        const currentIdx = get(_selectedRefAtom);

        const newIdx = moveScriptCursor(currentIdx, gScriptState.scriptItems.length, keyName);
        if (newIdx !== undefined) {
            set(selectedRefAtom, newIdx);
        }
    }
);

export const selectAtom = atom(
    null,
    (get, set, itemSelectAtom: PrimitiveAtom<boolean>, value: boolean, newIdx: number) => {
        deselectCurrent(get, set);
        set(itemSelectAtom, value);
        set(selectedRefAtom, newIdx);
    }
);

function deselectCurrent(get: Getter, set: Setter) {
    const currentIdx = get(_selectedRefAtom);
    if (currentIdx !== -1) {
        set(gScriptState.scriptItems[currentIdx].unsaved.selectedAtom, false);
    }
}

import type { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { selectItemAtom } from "./5-do-select-item-atom";
import { selectedIdxAtom } from "./4-selected-item";


export function useInitSelectedIdx() {
    const cb = useAtomCallback(
        useCallback(
            (get: Getter, set: Setter) => {
                set(selectItemAtom, get(selectedIdxAtom), true);
            }, []
        )
    );
    return cb;
}

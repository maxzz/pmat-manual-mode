import { useCallback } from "react";
import type { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { selectedIdxAtom } from "./1-selected-item";
import { selectItemAtom } from "./2-do-select-item-atom";

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

import { useCallback } from "react";
import type { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { selectedIdxAtom } from "./1-selected-idx";
import { doSetSelectItemAtom } from "./2-do-set-select-item";

export function useInitSelectedIdx() {
    const cb = useAtomCallback(
        useCallback(
            (get: Getter, set: Setter) => {
                set(doSetSelectItemAtom, get(selectedIdxAtom), true);
            }, []
        )
    );
    return cb;
}

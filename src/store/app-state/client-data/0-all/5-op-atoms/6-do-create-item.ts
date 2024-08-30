import { atom } from "jotai";
import { createScriptItem } from "../../1-script-list-ops";
import type { ScriptItemKey } from "../../9-script-items-types";
import { gScriptState } from "../2-script-state";
import { doSelectIdxAtom } from "./1-selected-idx";

export const doCreateItemAtom = atom(
    null,
    (get, set, type: ScriptItemKey) => {
        const newItem = createScriptItem(type);

        gScriptState.scriptItems.push(newItem);
        set(doSelectIdxAtom, gScriptState.scriptItems.length - 1);
    }
);

import { atom } from "jotai";
import { createScriptItem } from "../../1-script-list-ops";
import type { ScriptItemKey } from "../../9-script-items-types";
import { gScriptState } from "../2-script-state";
import { selectedIdxAtom } from "./14-do-select-atoms";


export const createItemAtom = atom(
    null,
    (get, set, type: ScriptItemKey) => {
        const newItem = createScriptItem(type);

        gScriptState.scriptItems.push(newItem);
        set(selectedIdxAtom, gScriptState.scriptItems.length - 1);
    }
);

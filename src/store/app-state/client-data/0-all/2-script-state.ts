import { proxy } from "valtio";
import type { ScriptItem } from "../9-script-items-types";
import { loadUiInitialStateFromStorage, watchScriptStateChanges } from "./3-script-storage";

export type ScriptState = { // stored data
    scriptItems: ScriptItem[];
    scriptState: {
        selectedIdx: number;
    };
};

export const gScriptState = proxy<ScriptState>(loadUiInitialStateFromStorage());

watchScriptStateChanges();

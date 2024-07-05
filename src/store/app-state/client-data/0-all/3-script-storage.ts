import { atom } from "jotai";
import { subscribe } from "valtio";
import type { ScriptItem } from "@/store";
import { ScriptState, gScriptState } from "./2-script-state";
import { initialScriptItems } from "./4-initial-data";
import { mergeDefaultAndLoaded } from "@/utils";
import { uuid } from "pm-manifest";

// Local storage

const STORAGE_UI_KEY = 'pmat-manual-mode:data';
const STORAGE_UI_VER = 'v1';

export function loadUiInitialStateFromStorage(): ScriptState {
    let storageData;

    let storageDataStr = localStorage.getItem(STORAGE_UI_KEY);
    if (storageDataStr) {
        try {
            storageData = JSON.parse(storageDataStr)?.[STORAGE_UI_VER];
        } catch (error) {
            console.error('storage bad format');
        }
    }

    const initialState = {
        scriptItems: [...initialScriptItems],
    };

    const ready = mergeDefaultAndLoaded({ defaults: initialState, loaded: storageData }) as ScriptState;

    ready.scriptItems.forEach((item) => {
        item.unsaved = {
            id4: uuid.asRelativeNumber(),
            selectedAtom: atom(false),
        };
    });

    return ready;
}

export function watchScriptStateChanges() {
    subscribe(gScriptState,
        () => {
            const data = { ...gScriptState };

            (data as any).scriptItems = gScriptState.scriptItems.map(
                (item) => {
                    const newItem: Omit<ScriptItem, 'unsaved'> = { ...item };
                    delete (newItem as any).unsaved;
                    return newItem;
                }
            );

            localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: data }));
        }
    );
}

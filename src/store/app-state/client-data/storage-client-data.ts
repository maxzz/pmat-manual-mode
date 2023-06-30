// Local storage

import { subscribe } from "valtio";
import { ClientState, initialItems, clientState } from ".";
import { mergeDefaultAndLoaded, uuid } from "@/utils";
import { ItemUnsaved, ScriptItem } from "@/store";

const STORAGE_UI_KEY = 'pmat-manual-mode:data';
const STORAGE_UI_VER = 'v1';

export function loadUiInitialState(): ClientState {
    let storageData;
    let storageDataStr = localStorage.getItem(STORAGE_UI_KEY);
    if (storageDataStr) {
        try {
            storageData = JSON.parse(storageDataStr)?.[STORAGE_UI_VER];
        } catch (error) {
            console.error('storage bad format');
        }
    }

    const initialState: ClientState = {
        scriptItems: [...initialItems],
    };

    const ready = mergeDefaultAndLoaded({ defaults: initialState, loaded: storageData });
    return ready;
}

export function watchClientStateCnages() {
    subscribe(clientState, () => {
        //console.log('store ui  ', appUi.uiState);
        const data = { ...clientState };

        (data as any).scriptItems = clientState.scriptItems.map((item) => {
            const newItem: Omit<ScriptItem, 'unsaved'> = { ...item };
            delete (newItem as any).unsaved;
            return newItem;
        });

        localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: data }));
    });
}

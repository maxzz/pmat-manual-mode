import type { AppUi } from "./1-ui-state";
import { mergeDefaultAndLoaded } from "@/utils";

const STORAGE_UI_KEY = 'pmat-manual-mode:ui';
const STORAGE_UI_VER = 'v1';

// Local storage

export function loadUiInitialState(initialAppUi: AppUi): AppUi {
    let storageUi;
    
    let storageUiStr = localStorage.getItem(STORAGE_UI_KEY);
    if (storageUiStr) {
        try {
            storageUi = JSON.parse(storageUiStr)?.[STORAGE_UI_VER];
        } catch (error) {
            console.error('storageUi bad format');
        }
    }

    const readyUiState = mergeDefaultAndLoaded({ defaults: initialAppUi.uiState, loaded: storageUi });

    const ready: AppUi = {
        uiState: readyUiState,
    };

    return ready;
}

export function saveUiState(appUi: AppUi) {
    localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: appUi.uiState }));
}

import { proxy, subscribe } from 'valtio';
import { initializeUiState } from './app-initial-state';
import { mergeDefaultAndLoaded } from '@/utils';

const STORAGE_UI_KEY = 'pmat-manual-mode:ui';
const STORAGE_UI_VER = 'v1';

export type UiState = {
    darkMode: boolean;
};

type AppUi = {
    uiState: UiState;
};

const initialAppUi: AppUi = {
    uiState: {
        darkMode: true,
    },
};

export const appUi = proxy<AppUi>(loadUiInitialState());

initializeUiState(appUi.uiState);

// Local storage

function loadUiInitialState(): AppUi {
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

subscribe(appUi.uiState, () => {
    //console.log('store ui  ', appUi.uiState);

    localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: appUi.uiState }));
});

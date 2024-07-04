import { proxy, subscribe } from 'valtio';
import { initializeUiState } from './3-ui-state-set';
import { mergeDefaultAndLoaded } from '@/utils';
import { AppUi, appUi } from '.';

const STORAGE_UI_KEY = 'pmat-manual-mode:ui';
const STORAGE_UI_VER = 'v1';

const initialAppUi: AppUi = {
    uiState: {
        darkMode: true,
    },
};

// Local storage

export function loadUiInitialState(): AppUi {
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

export function watchUiStateCnages() {
    subscribe(appUi.uiState, () => {
        //console.log('store ui  ', appUi.uiState);

        localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: appUi.uiState }));
    });
}

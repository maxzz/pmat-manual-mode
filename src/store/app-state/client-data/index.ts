import { proxy, subscribe } from 'valtio';
import { ScriptItem } from '@/store/editor-script-types';
import { initialItems } from './initial-items';
import { mergeDefaultAndLoaded } from '@/utils';

export * from './add-item';
export * from './initial-items';

const STORAGE_UI_KEY = 'pmat-manual-mode:data';
const STORAGE_UI_VER = 'v1';

type ClientState = {
    scriptItems: ScriptItem[];
};

export const clientState = proxy<ClientState>(loadUiInitialState());

// Local storage

function loadUiInitialState(): ClientState {
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

    const ready = mergeDefaultAndLoaded({ defaults: initialState, loaded: storageData });;
    return ready;
}

subscribe(clientState, () => {
    //console.log('store ui  ', appUi.uiState);

    localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: clientState }));
});

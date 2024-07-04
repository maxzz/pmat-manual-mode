import { proxy, subscribe } from "valtio";
import { initializeUiState } from "./3-ui-state-set";
import { loadUiInitialState, saveUiState } from "./2-ui-state-storage";

export * from './3-ui-state-set';
export * from './drag-position';

export type UiState = {
    darkMode: boolean;
};

export type AppUi = {
    uiState: UiState;
};

const initialAppUi: AppUi = {
    uiState: {
        darkMode: true,
    },
};

export const appUi = proxy<AppUi>(loadUiInitialState(initialAppUi));

initializeUiState(appUi.uiState);

watchUiStateCnages();

function watchUiStateCnages() {
    subscribe(appUi.uiState, () => saveUiState(appUi));
}

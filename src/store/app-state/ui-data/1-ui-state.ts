import { proxy, subscribe } from "valtio";
import { loadUiInitialState, saveUiState } from "./2-local-storage-ui-state";
import { initializeUiState } from "./3-ui-state-set";

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

function watchUiStateCnages() {
    subscribe(appUi.uiState, () => saveUiState(appUi));
}

watchUiStateCnages();

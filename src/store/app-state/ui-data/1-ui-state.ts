import { proxy } from "valtio";
import { initializeUiState } from "./3-ui-state-set";
import { loadUiInitialState, watchUiStateCnages } from "./2-ui-state-storage";

export * from './3-ui-state-set';
export * from './drag-position';

export type UiState = {
    darkMode: boolean;
};

export type AppUi = {
    uiState: UiState;
};

export const appUi = proxy<AppUi>(loadUiInitialState());

initializeUiState(appUi.uiState);
watchUiStateCnages();

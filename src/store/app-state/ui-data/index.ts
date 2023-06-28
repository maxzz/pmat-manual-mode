import { proxy } from "valtio";
import { initializeUiState } from "./app-initial-state";
import { loadUiInitialState, watchUiStateCnages } from "./storage-ui-data";

export type UiState = {
    darkMode: boolean;
};

export type AppUi = {
    uiState: UiState;
};

export const appUi = proxy<AppUi>(loadUiInitialState());

initializeUiState(appUi.uiState);
watchUiStateCnages();

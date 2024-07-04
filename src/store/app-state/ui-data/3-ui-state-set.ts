import { UiState } from ".";

export function setAppDarkMode(isDark: boolean) {
    //document.getElementsByTagName('body')[0].classList[isDark ? 'add' : 'remove']('dark');
    document.getElementsByTagName('html')[0].classList[isDark ? 'add' : 'remove']('dark');
}

export function initializeUiState(initialUiState: UiState) {
    setAppDarkMode(initialUiState.darkMode);
}

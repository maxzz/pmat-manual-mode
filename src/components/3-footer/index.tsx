import { useSnapshot } from 'valtio';
import { appUi, setAppDarkMode } from '@/store';
import { DarkLightSwitch } from '../ui/icons/DarkLight';
import { IconSunnyvale } from '../ui/icons';

function ColorModeSwitch() {
    const { darkMode } = useSnapshot(appUi.uiState);

    function changeMode() {
        appUi.uiState.darkMode = !darkMode;
        setAppDarkMode(!darkMode);
    }

    return (
        <div className="absolute p-1.5 right-2 hover:bg-primary-300 dark:hover:bg-primary-700 active:scale-[.97] rounded cursor-pointer">
            <DarkLightSwitch className="size-4" isDark={darkMode} title="Light/Dark Mode Switch" onClick={changeMode} />
        </div>
    );
}

export function SectionFooter() {
    return (
        <div className="relative px-2 py-3 flex items-center justify-center border-primary-500/20 border-t">
            <a href="https://github.com/maxzz/pmat-manual-mode" target='_blank'><IconSunnyvale className="w-4 h-4" /></a>
            <ColorModeSwitch />
        </div>
    );
}

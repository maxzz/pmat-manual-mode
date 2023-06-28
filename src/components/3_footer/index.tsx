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
        <DarkLightSwitch className="absolute right-3 w-4 h-4 cursor-pointer" isDark={darkMode} title="Light/Dark Mode Switch" onClick={changeMode} />
    );
}

export function SectionFooter() {
    return (
        <div className="relative p-2 flex items-center justify-center">
            <a href="https://github.com/maxzz/pmat-manual-mode" target='_blank'><IconSunnyvale className="w-4 h-4" /></a>
            <ColorModeSwitch />
        </div>
    );
}

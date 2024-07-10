import { useSnapshot } from 'valtio';
import { appUi, setAppDarkMode } from '@/store';
import { DarkLightSwitch } from '../ui/icons/DarkLight';
import { IconSunnyvale } from '../ui/icons';
import { classNames } from '@/utils';

const colorModeSwitchClasses = "hover:bg-primary-300 dark:hover:bg-primary-700 active:scale-[.97] rounded cursor-pointer";

function ColorModeSwitch() {
    const { darkMode } = useSnapshot(appUi.uiState);

    function changeMode() {
        appUi.uiState.darkMode = !darkMode;
        setAppDarkMode(!darkMode);
    }

    return (
        <div className={classNames("p-1.5", colorModeSwitchClasses)}>
            <DarkLightSwitch className="size-4" isDark={darkMode} title="Light/Dark Mode Switch" onClick={changeMode} />
        </div>
    );
}

export function SectionFooter() {
    return (
        <div className="px-2 py-1.5 border-primary-500/20 border-t flex items-center justify-between">
            <a href="https://github.com/maxzz/pmat-manual-mode" target='_blank'>
                <IconSunnyvale className="size-4 text-primary-500" />
            </a>

            <ColorModeSwitch />
        </div>
    );
}

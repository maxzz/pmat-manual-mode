import React from 'react';
import { IconSunnyvale } from '../ui/icons';

export function SectionFooter() {
    return (
        <div className="p-2 flex items-center justify-center">
            <a href="https://github.com/maxzz/pmat-manual-mode" target='_blank'><IconSunnyvale className="w-4 h-4" /></a>
        </div>
    );
}

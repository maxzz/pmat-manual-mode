import { ReactNode } from 'react';
import * as Scroll from '@radix-ui/react-scroll-area';

export function ScrollList({ children }: { children: ReactNode; }) {
    return (
        <Scroll.Root>
            <Scroll.Viewport>
                {children}
            </Scroll.Viewport>
            <Scroll.Scrollbar>
                <Scroll.Thumb></Scroll.Thumb>
            </Scroll.Scrollbar>
            <Scroll.Scrollbar>
                <Scroll.Thumb></Scroll.Thumb>
            </Scroll.Scrollbar>
        </Scroll.Root>
    );
}

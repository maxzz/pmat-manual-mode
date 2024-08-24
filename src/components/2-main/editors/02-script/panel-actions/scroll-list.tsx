import { ReactNode } from "react";
import * as Scroll from "@radix-ui/react-scroll-area";

export function ScrollList({ children }: { children: ReactNode; }) {
    return (
        <Scroll.Root>
            <Scroll.Viewport className="h-full min-h-0">
                {children}
            </Scroll.Viewport>

            <Scroll.Scrollbar>
                <Scroll.Thumb />
            </Scroll.Scrollbar>

            <Scroll.Scrollbar>
                <Scroll.Thumb />
            </Scroll.Scrollbar>
        </Scroll.Root>
    );
}

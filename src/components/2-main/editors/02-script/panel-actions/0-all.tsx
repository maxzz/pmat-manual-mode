import { PanelTitle } from "./1-panel-title";
import { PanellItems } from "./2-panel-items";

export function PanelActions() {
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <PanelTitle />
            <PanellItems />
        </div>
    );
}

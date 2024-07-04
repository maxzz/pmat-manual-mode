import { PanelActionsTitle } from "./1-panel-title";
import { PanelActionsList } from "./2-panel-items";

export function PanelActions() {
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <PanelActionsTitle />
            <PanelActionsList />
        </div>
    );
}

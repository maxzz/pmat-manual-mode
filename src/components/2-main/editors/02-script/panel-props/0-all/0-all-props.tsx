import { ItemPropsEditor } from "./2-item-props-editor";
import { PanelActionTitle } from "./1-panel-editor-title";

export function PanelProps() {
    return (
        <div className="space-y-1 select-none">
            {/* <PanelActionTitle /> */}
            <ItemPropsEditor />
        </div>
    );
}

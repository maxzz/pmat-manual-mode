import { useSnapshot } from "valtio";
import { editorState } from "@/store";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";
import { PanelActionTitle } from "./1-panel-title";
import { ItemPropsEditor } from "./3-item-props-editor";

export function PanelProps() {
    const { selectedIdx } = useSnapshot(editorState);
    return (
        <div className="space-y-1 select-none">
            <PanelActionTitle />

            <div className={classNames("min-h-[20rem] overflow-hidden", editorFrameClasses, focusClasses)}>
                <ItemPropsEditor idx={selectedIdx} />
            </div>
        </div>
    );
}

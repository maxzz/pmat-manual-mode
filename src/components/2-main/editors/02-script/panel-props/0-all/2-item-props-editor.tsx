import { useSnapshot } from "valtio";
import { clientState, editorState } from "@/store";
import { InPanelPropsTitle } from "./3-panel-editor-title";
import { getPropsEditor } from "../props";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";

export function ItemPropsEditor() {
    const { scriptItems } = useSnapshot(clientState);
    const { selectedIdx } = useSnapshot(editorState);

    const snap = scriptItems[selectedIdx];
    if (!snap) {
        return null;
    }

    const item = clientState.scriptItems[selectedIdx];
    const propsEditor = getPropsEditor({ snap, item });

    return (
        <div className={classNames("min-h-[20rem] overflow-hidden", editorFrameClasses, focusClasses)}>
            <div className="text-xs grid grid-rows-[auto,1fr] gap-2">
                <InPanelPropsTitle item={snap} />

                {propsEditor}
            </div>
        </div>
    );
}

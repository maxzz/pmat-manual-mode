import { useSnapshot } from "valtio";
import { gClientState, gEditorState } from "@/store";
import { InPanelPropsTitle } from "./3-panel-editor-title";
import { getPropsEditor } from "../props";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";

export function ItemPropsEditor() {
    const { scriptItems } = useSnapshot(gClientState);
    const { selectedIdx } = useSnapshot(gEditorState);

    const snap = scriptItems[selectedIdx];
    if (!snap) {
        return null;
    }

    const item = gClientState.scriptItems[selectedIdx];
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

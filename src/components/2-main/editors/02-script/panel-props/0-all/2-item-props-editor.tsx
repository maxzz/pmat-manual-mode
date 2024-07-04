import { useSnapshot } from "valtio";
import { gScriptState, gEditorState } from "@/store";
import { InPanelPropsTitle } from "./3-panel-editor-title";
import { getPropsEditor } from "../props";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";

export function ItemPropsEditor() {
    const { scriptItems } = useSnapshot(gScriptState);
    const { selectedIdxRef } = useSnapshot(gEditorState);

    const scriptItemSnap = scriptItems[selectedIdxRef];
    if (!scriptItemSnap) {
        return null;
    }

    const scriptItem = gScriptState.scriptItems[selectedIdxRef];
    const propsEditor = getPropsEditor({ scriptItemSnap, scriptItem });

    return (
        <div className={classNames("min-h-[20rem] overflow-hidden", editorFrameClasses, focusClasses)}>
            <div className="text-xs grid grid-rows-[auto,1fr] gap-2">
                <InPanelPropsTitle scriptItemSnap={scriptItemSnap} />

                {propsEditor}
            </div>
        </div>
    );
}

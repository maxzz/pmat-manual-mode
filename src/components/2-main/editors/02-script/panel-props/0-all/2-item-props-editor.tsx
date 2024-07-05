import { useSnapshot } from "valtio";
import { gScriptState, gEditorState, rightPanel } from "@/store";
import { InPanelPropsTitle } from "./3-panel-editor-title";
import { getPropsEditor } from "../props";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";

export function ItemPropsEditor() {
    const { scriptItems } = useSnapshot(gScriptState);
    const { selectedIdx } = useSnapshot(rightPanel);

    const scriptItemSnap = scriptItems[selectedIdx];
    if (!scriptItemSnap) {
        return null;
    }

    const scriptItem = gScriptState.scriptItems[selectedIdx];
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

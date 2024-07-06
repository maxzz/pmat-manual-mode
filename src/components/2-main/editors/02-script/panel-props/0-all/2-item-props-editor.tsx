import { useAtomValue } from "jotai";
import { useSnapshot } from "valtio";
import { gScriptState, selectedIdxAtom } from "@/store";
import { InPanelPropsTitle } from "./1-panel-editor-title";
import { getPropsEditor } from "../props";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";

export function ItemPropsEditorBody() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    const selectedRef = useAtomValue(selectedIdxAtom);

    const scriptItemSnap = scriptItemsSnap[selectedRef];
    if (!scriptItemSnap) {
        return null;
    }

    const scriptItem = gScriptState.scriptItems[selectedRef];
    const propsEditor = getPropsEditor({ scriptItem, scriptItemSnap });

    return (<>
        <InPanelPropsTitle type={scriptItemSnap.type} />
        {propsEditor}
    </>);
}

export function ItemPropsEditor() {
    return (
        <div className={classNames("min-h-[20rem] overflow-hidden", "text-xs grid grid-rows-[auto,1fr] gap-2", editorFrameClasses, focusClasses)}>
            <ItemPropsEditorBody />
        </div>
    );
}

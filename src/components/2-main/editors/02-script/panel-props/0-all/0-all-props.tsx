import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";
import { gScriptState, selectedIdxAtom } from "@/store";
import { useAtomValue } from "jotai";
import { useSnapshot } from "valtio";
import { getPropsEditor } from "../props";
import { InPanelPropsTitle } from "./2-editor-title";

function ItemPropsEditor() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    const selectedRef = useAtomValue(selectedIdxAtom);

    const scriptItemSnap = scriptItemsSnap[selectedRef];
    if (!scriptItemSnap) {
        return <InPanelPropsTitle />;
    }

    const scriptItem = gScriptState.scriptItems[selectedRef];
    const propsEditor = getPropsEditor({ scriptItem, scriptItemSnap });

    return (<>
        <InPanelPropsTitle type={scriptItemSnap.type} />
        {propsEditor}
    </>);
}

export function PanelProps() {
    return (
        <div className={classNames("min-h-80 overflow-hidden", "text-xs select-none grid grid-rows-[auto,1fr] gap-2", editorFrameClasses, focusClasses)}>
            <ItemPropsEditor />
        </div>
    );
}

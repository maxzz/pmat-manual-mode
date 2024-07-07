import { useAtomValue } from "jotai";
import { useSnapshot } from "valtio";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { gScriptState, selectedIdxAtom } from "@/store";
import { getPropsEditor } from "../props";
import { PanelPropsTitle } from "./1-panel-props-title";
import { classNames } from "@/utils";

function ItemPropsEditor() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    const selectedRef = useAtomValue(selectedIdxAtom);

    const scriptItemSnap = scriptItemsSnap[selectedRef];
    if (!scriptItemSnap) {
        return <PanelPropsTitle />;
    }

    const scriptItem = gScriptState.scriptItems[selectedRef];
    const propsEditor = getPropsEditor({ scriptItem, scriptItemSnap });

    return (<>
        <PanelPropsTitle type={scriptItemSnap.type} />
        {propsEditor}
    </>);
}

const PanelPropsClasses = "\
min-h-80 text-xs \
grid grid-rows-[auto,1fr] gap-2 \
overflow-hidden \
select-none";

export function PanelProps() {
    return (
        <div className={classNames(PanelPropsClasses, editorFrameClasses, focusClasses)}>
            <ItemPropsEditor />
        </div>
    );
}

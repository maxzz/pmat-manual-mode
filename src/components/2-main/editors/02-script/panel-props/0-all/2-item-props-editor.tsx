import { useAtomValue } from "jotai";
import { useSnapshot } from "valtio";
import { gScriptState, selectedIdxAtom } from "@/store";
import { InPanelPropsTitle } from "./1-panel-editor-title";
import { getPropsEditor } from "../props";

export function ItemPropsEditor() {
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

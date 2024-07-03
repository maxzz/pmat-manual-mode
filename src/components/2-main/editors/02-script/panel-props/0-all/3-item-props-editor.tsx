import { useSnapshot } from "valtio";
import { clientState } from "@/store";
import { InPanelPropsTitle } from "./2-panel-editor-title";
import { getPropsEditor } from "../props";

export function ItemPropsEditor({ idx }: { idx: number; }) {
    const { scriptItems } = useSnapshot(clientState);
    const snap = scriptItems[idx];
    if (!snap) {
        return null;
    }

    const item = clientState.scriptItems[idx];
    const propsEditor = getPropsEditor({ snap, item });

    return (
        <div className="text-xs grid grid-rows-[auto,1fr] gap-2">
            <InPanelPropsTitle item={snap} />

            {propsEditor}
        </div>
    );
}

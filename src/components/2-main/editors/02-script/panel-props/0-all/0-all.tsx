import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { ScriptItem, clientState, editorState } from "@/store";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { classNames } from "@/utils";
import { PanelActionTitle } from "./1-panel-title";
import { getPropsEditor } from "../props";
import { InPanelPropsTitle } from "./2-panel-editor-title";

function itemNameAndIcon(item: ScriptItem): { name: string; icon: ReactNode; } {
    switch (item.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 size-4" />, };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 size-4" />, };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 size-4" />, };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 size-4" />, };
        default: {
            const really: never = item;
            return { name: '', icon: null };
        }
    }
}

function ItemProps({ idx }: { idx: number; }) {
    const { scriptItems } = useSnapshot(clientState);
    const snap = scriptItems[idx];
    if (!snap) {
        return null;
    }
    
    const item = clientState.scriptItems[idx];
    const propsEditor = getPropsEditor({ snap, item });
    const { name, icon } = itemNameAndIcon(snap);

    return (
        <div className="text-xs grid grid-rows-[auto,1fr] gap-2">
            <InPanelPropsTitle name={name} icon={icon} />

            {propsEditor}
        </div>
    );
}

export function PanelProps() {
    const { selectedIdx } = useSnapshot(editorState);
    return (
        <div className="space-y-1 select-none">
            <PanelActionTitle />

            <div className={classNames("min-h-[20rem] overflow-hidden", editorFrameClasses, focusClasses)}>
                <ItemProps idx={selectedIdx} />
            </div>
        </div>
    );
}

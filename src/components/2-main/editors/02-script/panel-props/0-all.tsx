import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { ScriptItem, clientState, editorState } from "@/store";
import { editorFrameClasses, focusClasses } from "../../../../ui/shared-styles";
import { classNames } from "@/utils";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { PanelActionTitle } from "./1-panel-title";
import { getPropsViewComponent } from "./props";

function itemNameAndIcon(item: ScriptItem): { name: string; icon: ReactNode; } {
    switch (item.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 w-4 h-4" />, };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 w-4 h-4" />, };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 w-4 h-4" />, };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 w-4 h-4" />, };
        default: {
            const really: never = item;
            return { name: '', icon: null };
        }
    }
}

function InPanelPropsTitle({ name, icon }: { name: string; icon: ReactNode; }) {
    return (
        <div className="-mx-1 -mt-1">
            <div className="px-2 py-2 text-sm font-semibold bg-primary-200/50 dark:bg-primary-700/50 border-primary-500 border-b flex items-center justify-between">
                <div className="">{name}</div>
                {icon}
            </div>
        </div>
    );
}

function ItemProps({ idx }: { idx: number; }) {
    const { scriptItems } = useSnapshot(clientState);
    const snap = scriptItems[idx];
    if (!snap) {
        return null;
    }
    const item = clientState.scriptItems[idx];
    const Comp: ReactNode = getPropsViewComponent({ snap, item });
    const { name, icon } = itemNameAndIcon(snap);
    return (
        <div className="text-xs grid grid-rows-[auto,1fr] gap-2">
            <InPanelPropsTitle name={name} icon={icon} />
            {Comp && Comp}
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

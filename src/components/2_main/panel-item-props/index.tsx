import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { ScriptItem, clientState, editorState } from "@/store";
import { editorFrameClasses, focusClasses } from "../../ui/shared-styles";
import { classNames } from "@/utils";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { Title } from "./panel-title";
import { getPropsView } from "./item-props";

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

function ItemProps({ idx }: { idx: number; }) {
    const { scriptItems } = useSnapshot(clientState);
    const snap = scriptItems[idx];
    if (!snap) {
        return null;
    }
    const item = clientState.scriptItems[idx];
    const Comp: ReactNode = getPropsView({ snap, item });
    const { name, icon } = itemNameAndIcon(snap);
    return (
        <div className="text-xs">
            <div className="mt-1 mb-4 text-sm font-semibold flex items-center justify-between">
                <div className="">{name}</div>
                {icon}
            </div>

            {Comp && Comp}
        </div>
    );
}

export function PanelProps() {
    const { selectedIdx } = useSnapshot(editorState);
    return (
        <div className="space-y-1 select-none">
            <Title />

            <div className={classNames("min-h-[20rem]", editorFrameClasses, focusClasses)}>
                <ItemProps idx={selectedIdx} />
            </div>
        </div>
    );
}

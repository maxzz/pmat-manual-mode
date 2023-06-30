import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { ScriptItem, clientState, editorState } from "@/store";
import { editorFrameClasses, focusClasses } from "../../shared-styles";
import { classNames } from "@/utils";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";

function ActionProps() {
    return (
        <div className=""></div>
    );
}

function rowText(item: ScriptItem): { name: string; icon: ReactNode; details: string; } {
    switch (item.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 w-4 h-4" />, details: `${item.id}` };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 w-4 h-4" />, details: `${item.char}` };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 w-4 h-4" />, details: `${`x: ${item.x}, y: ${item.x}`}` };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 w-4 h-4" />, details: `${item.n}` };
        default: {
            const really: never = item;
            return { icon: null, name: '', details: '' };
        }
    }
}

function ItemProps({ idx }: { idx: number; }) {
    const { scriptItems } = useSnapshot(clientState);
    const snap = scriptItems[idx];
    if (!snap) {
        return null;
    }
    return (
        <div className="">
            {snap.type}
        </div>
    );
}

export function PanelProps() {
    const { selectedIdx } = useSnapshot(editorState);
    return (
        <div className="space-y-1 select-none">
            <div className="h-7 flex items-end justify-between">
                <div className="">Action properties</div>
            </div>

            <div className={classNames("min-h-[20rem]", editorFrameClasses, focusClasses)} tabIndex={0}>
                <ItemProps idx={selectedIdx} />
            </div>
        </div>
    );
}

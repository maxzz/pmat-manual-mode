import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { clientState, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./title";
import { ScrollList } from "./scroll-list";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { rowClasses, rowSelectedClasses } from "@/components/shared-styles";

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

function RowFieldCompound({ item, idx }: { item: ScriptItem; idx: number; }) {
    const { selectedIdx } = useSnapshot(clientState);
    const { icon, name, details } = rowText(item);
    return (
        <div
            className={classNames("py-0.5 grid grid-cols-[min-content,5rem,auto] items-center", rowClasses, selectedIdx === idx && rowSelectedClasses)}
            onClick={() => { clientState.selectedIdx = idx; }}
        >
            {icon}

            <div className="px-2 font-semibold">
                {name}
            </div>

            <div className="px-4 text-xs">
                {details}
            </div>
        </div>
    );
}

export function PanelList() {
    const { scriptItems } = useSnapshot(clientState);
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <Title />

            <ScrollList>
                <div className={classNames("", boxClasses)}>
                    {scriptItems.map((item, idx) =>
                        <RowFieldCompound item={item} idx={idx} key={idx} />
                    )}
                </div>
            </ScrollList>
        </div>
    );
}

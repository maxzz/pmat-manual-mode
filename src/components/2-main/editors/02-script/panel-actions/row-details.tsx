import { ReactNode } from "react";
import { SrcriptItemField, SrcriptItemPos, SrcriptItemDelay, SrcriptItemKey, ScriptItem } from "@/store";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { plural } from "@/utils";

const detailKeyClasses = "px-1 py-px min-w-[1.5rem] text-[.55rem] leading-4 text-center \
bg-gradient-to-b \
from-primary-200/70 to-primary-300/20 \
dark:from-primary-700/70 dark:to-primary-600 dark:shadow-primary-300/20 \
shadow-sm \
dark:shadow-inner \
border-primary-400 \
dark:border-primary-800 \
border rounded-sm \
";

const detailsFld = (item: SrcriptItemField) => `${item.id}`;
const detailsPos = (item: SrcriptItemPos) => `${`x: ${item.x}, y: ${item.y}`}`;
const detailsDly = (item: SrcriptItemDelay) => `${item.n}`;
const detailsKey = (item: SrcriptItemKey) => (<div className="flex items-center space-x-1">
    <div className={detailKeyClasses}>{item.char}</div> <div>{item.repeat} {plural(item.repeat, 'time')}</div>
</div>);

export function rowDetails(item: ScriptItem): { name: string; icon: ReactNode; details: ReactNode; } {
    switch (item.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 w-4 h-4" />, details: detailsFld(item) };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 w-4 h-4" />, details: detailsKey(item) };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 w-4 h-4" />, details: detailsPos(item) };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 w-4 h-4" />, details: detailsDly(item) };
        default: {
            const really: never = item;
            return { icon: null, name: '', details: '' };
        }
    }
}

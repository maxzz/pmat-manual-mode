import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { clientState, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./action-add-item";
import { ScrollList } from "./scroll-list";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";

function RowText(item: ScriptItem): { icon: ReactNode; name: string; details: string; } {
    switch (item.type) {
        case 'field': /**/ return { icon: <IconField /**/ className="ml-2 w-4 h-4" />,      /**/ name: "Field"     /**/, details: `${item.id}` };
        case 'key':   /**/ return { icon: <IconKey   /**/ className="ml-2 w-4 h-4" />,      /**/ name: "Keystroke" /**/, details: `${item.char}` };
        case 'pos':   /**/ return { icon: <IconPos   /**/ className="ml-2 mt-1 w-4 h-4" />, /**/ name: "Position"  /**/, details: `${`x: ${item.x}, y: ${item.x}`}` };
        case 'delay': /**/ return { icon: <IconDelay /**/ className="ml-2 w-4 h-4" />,      /**/ name: "Delay"     /**/, details: `${item.n}` };
        default: {
            const really: never = item;
            return { icon: null, name: '', details: '' };
        }
    }
}

const itemClasses = "leading-6 hover:bg-primary-700/10 dark:hover:bg-primary-300/10";
const selectedItemClasses = "text-primary-800 bg-primary-400/20 dark:text-primary-200 dark:bg-primary-400/20 outline-primary-400 outline-1 outline rounded-sm cursor-default";

function RowFieldCompound({ item, idx }: { item: ScriptItem; idx: number; }) {
    const { selectedIdx } = useSnapshot(clientState);
    const parts = RowText(item);
    return (
        <div
            className={classNames(
                selectedIdx === idx && selectedItemClasses,
                itemClasses,
                "py-0.5 grid grid-cols-[min-content,5rem,auto] items-center"
            )}
            onClick={() => { clientState.selectedIdx = idx; }}
        >
            {parts.icon}

            <div className="px-2 font-semibold">
                {parts.name}
            </div>
            <div className="px-4 text-xs">
                {parts.details}
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

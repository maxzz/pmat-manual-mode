import { useSnapshot } from "valtio";
import { clientState, ScriptItem, ScriptItemType } from "@/store";
import { classNames } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./action-add-item";
import { Fragment } from "react";
import { ScrollList } from "./scroll-list";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";

function RowIcon({ type }: { type: ScriptItemType; }) {
    switch (type) {
        case 'field': return <IconField className="ml-2 w-4 h-4" />;
        case 'key': return <IconKey className="ml-2 w-4 h-4" />;
        case 'pos': return <IconPos className="ml-2 mt-1 w-4 h-4" />;
        case 'delay': return <IconDelay className="ml-2 w-4 h-4" />;
        default: {
            const really: never = type;
            return <></>;
        }
    }
}

function RowItem({ part1, part2, idx, type }: { part1: string; part2: string | number; idx: number; type: ScriptItemType; }) {
    return (<>
        <div className="px-2 font-semibold">
            {part1}
        </div>
        <div className="px-4 text-xs">
            {part2}
        </div>
    </>);
}

function RowField({ item, idx }: { item: ScriptItem; idx: number; }) {
    switch (item.type) {
        case 'field': /**/ return <RowItem part1="Field"     /**/ part2={item.id} idx={idx} type={item.type} />;
        case 'key':   /**/ return <RowItem part1="Keystroke" /**/ part2={item.char} idx={idx} type={item.type} />;
        case 'pos':   /**/ return <RowItem part1="Position"  /**/ part2={`x: ${item.x}, y: ${item.x}`} idx={idx} type={item.type} />;
        case 'delay': /**/ return <RowItem part1="Delay"     /**/ part2={item.n} idx={idx} type={item.type} />;
        default: {
            const really: never = item;
            return <></>;
        }
    }
}

const itemClasses = "leading-6 hover:bg-primary-700/10 dark:hover:bg-primary-300/10";
const selectedItemClasses = "text-primary-800 bg-primary-400/20 dark:text-primary-200 dark:bg-primary-400/20 outline-primary-400 outline-1 outline rounded-sm cursor-default";

function RowFieldCompound({ item, idx }: { item: ScriptItem; idx: number; }) {
    const { selectedIdx } = useSnapshot(clientState);
    return (
        <div
            className={classNames(
                selectedIdx === idx && selectedItemClasses,
                itemClasses,
                "py-0.5 grid grid-cols-[min-content,5rem,auto] items-center"
            )}
            onClick={() => { clientState.selectedIdx = idx; }}
        >
            <RowIcon type={item.type} />
            <RowField item={item} idx={idx} key={idx} />
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

import { useSnapshot } from "valtio";
import { clientState, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./action-add-item";
import { Fragment } from "react";
import { ScrollList } from "./scroll-list";

const itemClasses = "leading-6 hover:text-red-500 hover:bg-primary-500";
const selectedItemClasses = "text-primary-800 bg-primary-200 cursor-default";

function RowItem({ part1, part2, idx }: { part1: string; part2: string | number; idx: number; }) {
    const { selectedIdx } = useSnapshot(clientState);
    return (<>
        <div className={classNames(selectedIdx === idx && selectedItemClasses, itemClasses, "pl-2")} onClick={() => { clientState.selectedIdx = idx; }}>{part1}</div>
        <div className={classNames(selectedIdx === idx && selectedItemClasses, itemClasses, "pl-8")} onClick={() => { clientState.selectedIdx = idx; }}>{part2}</div>
    </>);
}

function RowField({ item, idx }: { item: ScriptItem; idx: number; }) {
    switch (item.type) {
        case 'field': return <RowItem part1="Field" part2={item.id} idx={idx} />;
        case 'key': return <RowItem part1="Keystroke" part2={item.char} idx={idx} />;
        case 'pos': return <RowItem part1="Position" part2={`x: ${item.x}, y: ${item.x}`} idx={idx} />;
        case 'delay': return <RowItem part1="Delay" part2={item.n} idx={idx} />;
        default: {
            const really: never = item;
            console.error(really);
        }
    }
}

export function PanelList() {
    const { scriptItems } = useSnapshot(clientState);
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <Title />

            <ScrollList>
                <div className={classNames("grid grid-cols-[min-content,auto]", boxClasses)}>
                    {scriptItems.map((item, idx) =>
                        <Fragment key={idx}>
                            <RowField item={item} idx={idx} />
                        </Fragment>
                    )}
                </div>
            </ScrollList>
        </div>
    );
}
